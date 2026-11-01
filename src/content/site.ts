export const site = {
  brand: "typusmedia",
  owner: "typusmedia Werbeagentur Oliver Olbert",
  street: "Wolfenbütteler Straße 84",
  city: "38102 Braunschweig",
  phone: "(0531) 88 92 74 60",
  phoneHref: "tel:+4953188927460",
  email: "info@typusmedia.de",
  vatId: "DE189144698",
  url: "https://typusmedia.de",
} as const;

export const mainNav = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/agentur", label: "Agentur" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export const services = [
  { title: "Webdesign", text: "Modernes Design für Ihre Webseite … benutzerfreundlich, suchmaschinenoptimiert und responsive für mobile Geräte." },
  { title: "CMS Contao", text: "Sie möchten Inhalte selbst in Ihre Webseite einfügen? Dann entwickeln wir Ihre Internetpräsenz mit dem Content Management System Contao." },
  { title: "Branding", text: "Kreativ, konzeptionell, ganzheitlich: vom idealen Markennamen bis zum unverwechselbaren Markendesign." },
  { title: "Printdesign", text: "Einheitlich, kreativ, unverwechselbar … wir gestalten professionelle Geschäftspapiere und Drucksachen für Ihr Unternehmen." },
] as const;
