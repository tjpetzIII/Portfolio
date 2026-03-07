import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { profile } from "@/lib/data";

describe("Hero", () => {
  it("renders the profile name", () => {
    render(<Hero />);
    expect(screen.getByText(profile.name)).toBeInTheDocument();
  });

  it("renders the profile title", () => {
    render(<Hero />);
    expect(screen.getByText(profile.title)).toBeInTheDocument();
  });

  it("renders the location", () => {
    render(<Hero />);
    expect(screen.getByText(profile.location)).toBeInTheDocument();
  });

  it("has a mailto link for get in touch", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /get in touch/i });
    expect(link).toHaveAttribute("href", `mailto:${profile.email}`);
  });

  it("has a link to the experience section", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /view my work/i });
    expect(link).toHaveAttribute("href", "#experience");
  });
});
