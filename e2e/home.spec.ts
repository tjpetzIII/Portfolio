import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("Navbar", () => {
    test("displays the site name", async ({ page }) => {
      await expect(page.getByRole("navigation").getByText("Thomas Petz")).toBeVisible();
    });

    test("has links to all sections", async ({ page }) => {
      const nav = page.getByRole("navigation");
      await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
      await expect(nav.getByRole("link", { name: "Experience" })).toBeVisible();
      await expect(nav.getByRole("link", { name: "Projects" })).toBeVisible();
      await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
    });

    test("Travel link navigates to /travel", async ({ page }) => {
      const travelLink = page.getByRole("navigation").getByRole("link", { name: "Travel" });
      await expect(travelLink).toHaveAttribute("href", "/travel");
    });
  });

  test.describe("Hero section", () => {
    test("displays the name", async ({ page }) => {
      await expect(page.getByRole("heading", { level: 1, name: "Thomas Petz" })).toBeVisible();
    });

    test("displays the title", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Software Engineer", exact: true })).toBeVisible();
    });

    test("displays the location", async ({ page }) => {
      await expect(page.locator("#about").getByText("Philadelphia, PA")).toBeVisible();
    });

    test("View my work button links to experience section", async ({ page }) => {
      await expect(page.getByRole("link", { name: /view my work/i })).toHaveAttribute("href", "#experience");
    });

    test("Get in touch button links to email", async ({ page }) => {
      await expect(page.getByRole("link", { name: /get in touch/i })).toHaveAttribute(
        "href",
        "mailto:tompetz2000@gmail.com"
      );
    });

    test("profile image is visible", async ({ page }) => {
      await expect(page.getByRole("img", { name: "Thomas Petz" })).toBeVisible();
    });
  });

  test.describe("Work Experience section", () => {
    test("shows the section heading", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Work Experience" })).toBeVisible();
    });

    test("shows Elsevier role", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Software Engineer II" })).toBeVisible();
      await expect(page.getByText("Elsevier (ELS)")).toBeVisible();
    });

    test("shows second experience", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "BI Developer Intern" })).toBeVisible();
      await expect(page.getByText("American Commercial Barge Line")).toBeVisible();
    });

    test("shows skills as plain text", async ({ page }) => {
      await expect(page.getByText(/TypeScript.*React.*Tailwind CSS.*Node\.js/)).toBeVisible();
    });
  });

  test.describe("Certifications section", () => {
    test("shows the section heading", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Certifications" })).toBeVisible();
    });

    test("shows AWS certification", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "AWS Certified Cloud Practitioner" })).toBeVisible();
      await expect(page.getByText("Amazon Web Services")).toBeVisible();
    });
  });

  test.describe("Personal Projects section", () => {
    test("shows the section heading", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Personal Projects" })).toBeVisible();
    });

    test("shows all three projects", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Project Alpha" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Project Beta" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Project Gamma" })).toBeVisible();
    });

    test("Project Alpha has a GitHub link", async ({ page }) => {
      const card = page.locator("section#projects div.bg-card").filter({ hasText: "Project Alpha" });
      await expect(card.getByRole("link", { name: "[src]" })).toHaveAttribute(
        "href",
        "https://github.com/yourusername/project-alpha"
      );
    });

    test("Project Beta has both src and live links", async ({ page }) => {
      const betaSection = page.locator("section#projects");
      const srcLinks = betaSection.getByRole("link", { name: "[src]" });
      const liveLinks = betaSection.getByRole("link", { name: "[live]" });
      await expect(srcLinks).toHaveCount(3); // one per project
      await expect(liveLinks).toHaveCount(1);
    });
  });

  test.describe("Other Activities section", () => {
    test("shows the section heading", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Other Activities" })).toBeVisible();
    });

    test("shows all activity titles", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Open Source Contributions" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Local Hackathons" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Tech Blog" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Rock Climbing" })).toBeVisible();
    });

    test("shows activity categories as plain text", async ({ page }) => {
      await expect(page.getByText("Open Source", { exact: true })).toBeVisible();
      await expect(page.getByText("Community", { exact: true })).toBeVisible();
    });
  });

  test.describe("Contact section", () => {
    test("shows the section heading", async ({ page }) => {
      await expect(page.getByRole("heading", { name: "Get In Touch" })).toBeVisible();
    });

    test("Say Hello button links to email", async ({ page }) => {
      await expect(page.getByRole("link", { name: /say hello/i })).toHaveAttribute(
        "href",
        "mailto:tompetz2000@gmail.com"
      );
    });

    test("GitHub and LinkedIn links are present", async ({ page }) => {
      await expect(page.getByRole("link", { name: "GitHub" })).toHaveAttribute(
        "href",
        "https://github.com/tjpetzIII"
      );
      await expect(page.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/tpetz1/"
      );
    });
  });

  test.describe("Navigation scrolling", () => {
    test("clicking Experience nav link scrolls to experience section", async ({ page }) => {
      await page.getByRole("navigation").getByRole("link", { name: "Experience" }).click();
      await expect(page.locator("#experience")).toBeInViewport();
    });

    test("clicking Projects nav link scrolls to projects section", async ({ page }) => {
      await page.getByRole("navigation").getByRole("link", { name: "Projects" }).click();
      await expect(page.locator("#projects")).toBeInViewport();
    });

    test("clicking Contact nav link scrolls to contact section", async ({ page }) => {
      await page.getByRole("navigation").getByRole("link", { name: "Contact" }).click();
      await expect(page.locator("#contact")).toBeInViewport();
    });
  });
});
