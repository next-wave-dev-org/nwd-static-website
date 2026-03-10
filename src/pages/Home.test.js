import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Home page renders", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /next wave dev/i })
  ).toBeInTheDocument();
});