import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Project from "../components/Project";

test("Portfolio page renders projects section", () => {
  render(
    <MemoryRouter>
      <Project
        title="Test Project"
        screenshots={["test-image.png"]}
      />
    </MemoryRouter>
  );

  expect(screen.getByText(/test project/i)).toBeInTheDocument();
});