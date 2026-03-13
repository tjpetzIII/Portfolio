import { test, expect } from "@playwright/test";

test.describe("Travel page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/travel");
  });

  test("displays the Travel heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Travel" })).toBeVisible();
  });

  test("renders the world map", async ({ page }) => {
    await expect(page.locator("svg.rsm-svg")).toBeVisible();
  });

  test("shows location cards for each travel destination", async ({ page }) => {
    await expect(page.getByText("Philadelphia")).toBeVisible();
    await expect(page.getByText("Paris")).toBeVisible();
    await expect(page.getByText("Amsterdam")).toBeVisible();
    await expect(page.getByText("Rome")).toBeVisible();
  });

  test("shows country labels", async ({ page }) => {
    await expect(page.getByText("France")).toBeVisible();
    await expect(page.getByText("Netherlands")).toBeVisible();
    await expect(page.getByText("Italy").first()).toBeVisible();
  });

  test("navbar is visible on travel page", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.getByRole("navigation").getByText("Thomas Petz")).toBeVisible();
  });

  test("navbar home link returns to homepage", async ({ page }) => {
    await page.getByRole("navigation").getByText("Thomas Petz").click();
    await expect(page).toHaveURL(/\/#about|\/$/);
  });
});
