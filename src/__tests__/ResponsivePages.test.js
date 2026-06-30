import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import DevelopersPage from "../pages/DevelopersPage";
import PortfolioPage from "../pages/PortfolioPage";

function resize(width) {
  window.innerWidth = width;

  window.dispatchEvent(
    new Event("resize")
  );
}

describe("Responsive rendering", () => {
  const breakpoints = [375, 768, 1280];

  const pages = [
    Main,
    About,
    DevelopersPage,
    PortfolioPage,
  ];

  pages.forEach((Page) => {
    breakpoints.forEach((width) => {
      test(`${Page.name} renders at ${width}px`, () => {
        resize(width);

        render(
          <MemoryRouter>
            <Page />
          </MemoryRouter>
        );

        expect(document.body).toBeInTheDocument();
      });
    });
  });
});