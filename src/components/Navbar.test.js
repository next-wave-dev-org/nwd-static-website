import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

describe("Navbar navigation links", () => {
  test("internal links use local routes", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLogoLink = screen.getByAltText(/next wave dev logo/i).closest("a");
    const contactLink = screen.getByRole("link", { name: /contact/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const developersLink = screen.getByRole("link", { name: /developers/i });

    expect(homeLogoLink).toHaveAttribute("href", "/Home");
    expect(contactLink).toHaveAttribute("href", "/Contact");
    expect(aboutLink).toHaveAttribute("href", "/About");
    expect(developersLink).toHaveAttribute("href", "/Developers");
  });

  test("shop link opens external Bonfire page securely", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const shopLink = screen.getByRole("link", { name: /shop/i });

    expect(shopLink).toHaveAttribute(
      "href",
      "https://bonfire.com/store/next-wave-dev-store/"
    );
    expect(shopLink).toHaveAttribute("target", "_blank");
    expect(shopLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
   