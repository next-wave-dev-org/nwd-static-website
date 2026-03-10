import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Developer from "../components/Developer";

test("Developers page renders developer section", () => {
  render(
    <MemoryRouter>
      <Developer
        name="Zulbadam Batdelger"
        photo="Zulbadam-Batdelger.webp"
      />
    </MemoryRouter>
  );

  expect(screen.getByText(/zulbadam batdelger/i)).toBeInTheDocument();
});