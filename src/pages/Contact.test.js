import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Contact from "./Contact";
import "@testing-library/jest-dom";
import React from "react";

jest.mock("../components/Navbar", () => () => <div>Navbar</div>);
jest.mock("../components/Footer", () => () => <div>Footer</div>);

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
    })
  );

  mockedNavigate.mockClear();
});

describe("Contact Page Integration Tests", () => {
  test("Happy Path: submits when fields are filled", async () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const nameInput = document.querySelector(
      'input[name="entry.2005620554"]'
    );

    const emailInput = document.querySelector(
      'input[name="emailAddress"]'
    );

    const messageInput = document.querySelector(
      'textarea[name="entry.839337160"]'
    );

    await userEvent.type(nameInput, "Beimnet");
    await userEvent.type(emailInput, "test@test.com");
    await userEvent.type(messageInput, "Hello test message");

    await userEvent.click(
      screen.getByRole("button", { name: /submit/i })
    );

    expect(global.fetch).toHaveBeenCalled();
    expect(mockedNavigate).toHaveBeenCalledWith(
      "/contact-thank-you"
    );
  });

  test("Validation: shows error when email is empty and does not submit", async () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const nameInput = document.querySelector(
      'input[name="entry.2005620554"]'
    );

    const messageInput = document.querySelector(
      'textarea[name="entry.839337160"]'
    );

    await userEvent.type(nameInput, "Beimnet");
    await userEvent.type(messageInput, "Hello test message");

    await userEvent.click(
      screen.getByRole("button", { name: /submit/i })
    );

    expect(global.fetch).not.toHaveBeenCalled();

    expect(
      screen.getByText(/email is required/i)
    ).toBeInTheDocument();
  });
});