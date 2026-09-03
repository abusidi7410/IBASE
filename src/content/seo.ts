import { company } from "./site";

export const SITE_URL = "https://toss.ng";

export const siteUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "" : path}`.replace(/\/$/, path === "/" ? "" : "");

export const seoTitles = {
  home: `${company.name} | ICT & Networking Solutions in Kaduna, Nigeria`,
  about: `About ${company.name} | ICT Company in Kaduna`,
  services: `ICT & Networking Services in Kaduna | ${company.short}`,
  solutions: `Software & Platform Solutions | ${company.short}`,
  projects: `Projects & Delivery | ${company.short}`,
  contact: `Contact ${company.name} | Kaduna, Nigeria`,
};
