import { render, screen } from "@testing-library/react";
import Activities from "./Activities";
import { activities } from "@/lib/data";

describe("Activities", () => {
  it("renders the section heading", () => {
    render(<Activities />);
    expect(screen.getByText("Other Activities")).toBeInTheDocument();
  });

  it("renders the section number", () => {
    render(<Activities />);
    expect(screen.getByText("04.")).toBeInTheDocument();
  });

  it("renders all activity titles", () => {
    render(<Activities />);
    for (const activity of activities) {
      expect(screen.getByText(activity.title)).toBeInTheDocument();
    }
  });

  it("renders all activity categories", () => {
    render(<Activities />);
    for (const activity of activities) {
      expect(screen.getByText(activity.category)).toBeInTheDocument();
    }
  });

  it("renders all activity descriptions", () => {
    render(<Activities />);
    for (const activity of activities) {
      expect(screen.getByText(activity.description)).toBeInTheDocument();
    }
  });

  it("renders the correct number of activity cards", () => {
    render(<Activities />);
    const titles = activities.map((a) => screen.getByText(a.title));
    expect(titles).toHaveLength(activities.length);
  });
});
