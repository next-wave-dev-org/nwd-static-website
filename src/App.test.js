import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import DevelopersPage from "./pages/DevelopersPage";
import PortfolioPage from "./pages/PortfolioPage";

// Suppress known console output during rendering tests
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
  console.warn.mockRestore();
  console.log.mockRestore();
});

const renderWithRouter = (component) =>
  render(
    <MemoryRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {component}
    </MemoryRouter>
  );

describe("Static Pages", () => {
  test("Home page renders successfully", () => {
    renderWithRouter(<Main />);

    expect(
      screen.getByRole("heading", {
        name: /next wave dev/i,
      })
    ).toBeInTheDocument();
  });

  test("About page renders successfully", () => {
    renderWithRouter(<About />);

    expect(
      screen.getByRole("heading", {
        name: /about next wave dev/i,
      })
    ).toBeInTheDocument();
  });

  test("Developers page renders successfully", () => {
    renderWithRouter(<DevelopersPage />);

    expect(
      screen.getByRole("heading", {
        name: /our developers/i,
      })
    ).toBeInTheDocument();
  });

  test("Portfolio page renders successfully", () => {
    renderWithRouter(<PortfolioPage />);

    expect(
      screen.getByRole("heading", {
        name: /our portfolio/i,
      })
    ).toBeInTheDocument();
  });
});