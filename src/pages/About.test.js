import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import About from "./About";

test("About page renders bio/header text", () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
});