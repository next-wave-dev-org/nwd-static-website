import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FormComponent } from "./form";

// Mock navigate
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("FormComponent validation", () => {
  let alertSpy;

  beforeEach(() => {
    jest.useFakeTimers();

    alertSpy = jest
      .spyOn(window, "alert")
      .mockImplementation(() => {});

    global.fetch = jest.fn();

    mockNavigate.mockClear();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();

    alertSpy.mockRestore();
    jest.clearAllMocks();
  });

  const renderForm = () =>
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <FormComponent />
      </MemoryRouter>
    );

  const submitForm = () => {
    const form = screen
      .getByRole("button", { name: /submit/i })
      .closest("form");

    fireEvent.submit(form);
  };

  test("renders form fields", () => {
    renderForm();

    expect(
      screen.getByLabelText(/name/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/company \/ organization/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/message/i)
    ).toBeInTheDocument();
  });

  test("prevents submission when fields contain only whitespace", () => {
    renderForm();

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "     " },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "     " },
    });

    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "     " },
    });

    submitForm();

    expect(alertSpy).toHaveBeenCalledWith(
      "Fields cannot be empty."
    );

    expect(fetch).not.toHaveBeenCalled();
  });

  test("prevents submission with invalid email format", () => {
    renderForm();

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });

    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello there" },
    });

    submitForm();

    expect(alertSpy).toHaveBeenCalledWith(
      "Invalid email."
    );

    expect(fetch).not.toHaveBeenCalled();
  });

  test("updates character counter as user types", () => {
    renderForm();

    const textarea = screen.getByLabelText(/message/i);

    fireEvent.change(textarea, {
      target: {
        value: "Hello World",
      },
    });

    expect(
      screen.getByText("11/500")
    ).toBeInTheDocument();
  });

  test("shows approaching character limit warning", () => {
    renderForm();

    const textarea = screen.getByLabelText(/message/i);

    fireEvent.change(textarea, {
      target: {
        value: "a".repeat(450),
      },
    });

    expect(
      screen.getByText(/approaching character limit/i)
    ).toBeInTheDocument();
  });

  test("shows character limit reached at 500 characters", () => {
    renderForm();

    const textarea = screen.getByLabelText(/message/i);

    fireEvent.change(textarea, {
      target: {
        value: "a".repeat(500),
      },
    });

    expect(
      screen.getByText(/character limit reached/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /submit/i,
      })
    ).toBeDisabled();
  });

  test("allows valid form data to submit", async () => {
    fetch.mockResolvedValueOnce({});

    renderForm();

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });

    fireEvent.change(screen.getByLabelText(/message/i), {
      target: {
        value: "This is a valid message.",
      },
    });

    await act(async () => {
      submitForm();

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });

    act(() => {
      jest.runAllTimers();
    });
  });
});