import {
  profile,
  experiences,
  certifications,
  projects,
  travelLocations,
  activities,
} from "./data";

describe("profile", () => {
  it("has required fields", () => {
    expect(profile.name).toBeTruthy();
    expect(profile.email).toMatch(/@/);
    expect(profile.github).toMatch(/^https:\/\//);
    expect(profile.linkedin).toMatch(/^https:\/\//);
  });
});

describe("experiences", () => {
  it("has at least one entry", () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it("each entry has required fields", () => {
    for (const exp of experiences) {
      expect(exp.company).toBeTruthy();
      expect(exp.role).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.location).toBeTruthy();
      expect(exp.description).toBeTruthy();
      expect(Array.isArray(exp.skills)).toBe(true);
      expect(exp.skills.length).toBeGreaterThan(0);
    }
  });
});

describe("certifications", () => {
  it("has at least one entry", () => {
    expect(certifications.length).toBeGreaterThan(0);
  });

  it("each entry has a name and issuer", () => {
    for (const cert of certifications) {
      expect(cert.name).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
      expect(cert.date).toBeTruthy();
    }
  });
});

describe("projects", () => {
  it("has at least one entry", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("each entry has required fields", () => {
    for (const project of projects) {
      expect(project.name).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(Array.isArray(project.tech)).toBe(true);
    }
  });

  it("github links start with https", () => {
    for (const project of projects) {
      if (project.github) {
        expect(project.github).toMatch(/^https:\/\//);
      }
    }
  });
});

describe("travelLocations", () => {
  it("has at least one entry", () => {
    expect(travelLocations.length).toBeGreaterThan(0);
  });

  it("each entry has valid coordinates [longitude, latitude]", () => {
    for (const loc of travelLocations) {
      expect(loc.name).toBeTruthy();
      expect(loc.country).toBeTruthy();
      const [lng, lat] = loc.coordinates;
      expect(lng).toBeGreaterThanOrEqual(-180);
      expect(lng).toBeLessThanOrEqual(180);
      expect(lat).toBeGreaterThanOrEqual(-90);
      expect(lat).toBeLessThanOrEqual(90);
    }
  });
});

describe("activities", () => {
  it("has at least one entry", () => {
    expect(activities.length).toBeGreaterThan(0);
  });

  it("each entry has required fields", () => {
    for (const activity of activities) {
      expect(activity.title).toBeTruthy();
      expect(activity.category).toBeTruthy();
      expect(activity.description).toBeTruthy();
    }
  });
});
