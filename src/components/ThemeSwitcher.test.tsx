import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";

const mockMatchMedia = (dark: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: dark && query.includes("dark"),
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }),
  });
};

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
  mockMatchMedia(false);
});

describe("ThemeSwitcher", () => {
  it("renders the toggle button", async () => {
    render(<ThemeSwitcher />);
    const button = await screen.findByRole("button", { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });

  it("defaults to light theme when no preference is stored", async () => {
    render(<ThemeSwitcher />);
    await screen.findByRole("button", { name: /toggle theme/i });
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("defaults to dark theme when system prefers dark", async () => {
    mockMatchMedia(true);
    render(<ThemeSwitcher />);
    await screen.findByRole("button", { name: /toggle theme/i });
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("toggles theme on click", async () => {
    render(<ThemeSwitcher />);
    const button = await screen.findByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    fireEvent.click(button);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("persists theme choice to localStorage", async () => {
    render(<ThemeSwitcher />);
    const button = await screen.findByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("restores stored theme on mount", async () => {
    localStorage.setItem("theme", "dark");
    render(<ThemeSwitcher />);
    await screen.findByRole("button", { name: /toggle theme/i });
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
