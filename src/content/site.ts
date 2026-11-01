import servicesImage from "@/assets/services.jpg.asset.json";
import ownerImage from "@/assets/olbert.jpg.asset.json";
import butlerImage from "@/assets/butler.jpg.asset.json";
import bonusImage from "@/assets/bonusbuch.jpg.asset.json";
import solisImage from "@/assets/solis.jpg.asset.json";
import editorialImage from "@/assets/editorial.jpg.asset.json";
import brandingImage from "@/assets/branding.jpg.asset.json";
import corporateImage from "@/assets/corporate.jpg.asset.json";
import gastroImage from "@/assets/gastro.jpg.asset.json";

export const site = {
  brand: "typusmedia",
  owner: "typusmedia Werbeagentur Oliver Olbert",
  street: "Wolfenbütteler Straße 84",
  city: "38102 Braunschweig",
  phone: "(0531) 88 92 74 60",
  phoneHref: "tel:+4953188927460",
  email: "keke28517@gmail.com",
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

export const home = {
  title: "typusmedia",
  subtitle: "Webdesign-Agentur & Printdesign-Agentur",
  slogan: "Werbung ist unsere Art.",
  definitionTitle: "Art, Form, Figur, Vorbild, Gattungscharakter.",
  definition: "Diejenige Form, in welcher die Eigenschaften einer Reihe verwandter Formen am vollkommensten repräsentiert sind.",
  philosophy: "Werbung und Design erfüllt unser Leben, Tag für Tag. Unsere Kunden bei ihrem Weg als Unternehmer hilfreich zu beraten und mit kommunikativer Vielfalt, Kreativität und der Passion zum expliziten Design erfolgreich zu begleiten, ist genau unser Ding. Das ist der Stoff, aus dem typusmedia ist. Unser Name ist unser Programm.",
  invitation: "Überzeugen Sie sich auf den folgenden Seiten von dem Potential unserer Full-Service Werbeagentur aus Braunschweig.",
  competencies: "Die Kompetenzen der typusmedia Werbeagentur Braunschweig",
  references: "Referenzen",
} as const;

export const servicePage = {
  title: "Unsere Leistungen in der Übersicht",
  subtitle: "Full-Service Werbeagentur",
  image: servicesImage.url,
  imageAlt: "Webdesign für HERMANs CafeBar mit digitaler Speisekarte und Bestellfunktion",
  sections: [
    { title: "Webdesign", items: ["Statische und dynamische Webseiten", "Responsive Webdesign", "HTML, CSS, JavaScript, PHP und MySQL", "Umsetzung von Projekten mittels Content Management System (CMS)", "Einrichtung von Webshops (e-Commerce)", "Suchmaschinenoptimierung", "Pagespeedoptimierung", "Optimierung von Facebook Profilen & Seiten", "Erstellung von Landing Pages", "Blätterbare Online-Kataloge aus PDF-Dateien", "Online-Kataloge bzw. Web-Portale mit umfangreichen Filterfunktionen"] },
    { title: "Grafische Gestaltung", items: ["Markenentwicklung und Markeneintragung", "Logo-Design und Corporate Design", "Geschäftspapiere und Visitenkarten", "Imagebroschüren und Prospekte", "Direktmailings", "Flyer, Plakate und Anzeigen", "Magazine, Zeitungen und Kataloge", "Schilder- und Messestand-Designs", "Piktogramme und Info-Grafiken", "Screendesign und Weblayouts", "Navigationsgrafiken"] },
    { title: "Text / Redaktion / Public Relations", items: ["Maßgeschneiderte Texte für jeden Bedarf, z. B. PR-Texte, Katalog-Texte, Manuals oder anspruchsvolle Produktbeschreibungen."] },
    { title: "Consulting", items: ["Marketing, Medien und Realisierung", "Kompetente Beratung während des gesamten Arbeitsprozesses"] },
    { title: "Druck-Produktion & Mediaeinkauf", items: ["Von Kleinst- bis Millionenauflage", "Über 20 Jahre Erfahrung", "Hohe Qualitätsstandards zum Bestpreis"] },
    { title: "Fotografie & Bildbearbeitung", items: ["Objekt- und Produktfotografie", "Bildbearbeitung, Retuschen und Composing", "Bildredaktion"] },
  ],
} as const;

export const agency = {
  title: "Agenturprofil – typusmedia",
  subtitle: "Werbeagentur aus Braunschweig",
  owner: "Oliver Olbert",
  ownerRole: "Inhaber typusmedia Werbeagentur",
  image: ownerImage.url,
  introduction: "Seit 1997 entwirft und verwirklicht unsere inhabergeführte Agentur erfolgreiche Konzepte in der klassischen und digitalen Medien-Welt. Unser Hauptsitz befindet sich in der wirtschaftsstarken Löwenstadt Braunschweig. Von hier aus operieren wir bundesweit für eine vielfältige Klientel unterschiedlicher Branchen. Unsere Kunden sind:",
  clients: ["Freiberufler", "Dienstleister", "Einzelhändler", "mittelständische Firmen", "Gastronomie-Betriebe"],
  closing: "die wir sehr persönlich und kompetent betreuen.",
  philosophyTitle: "Full Service Werbeagentur",
  paragraphs: [
    "Bei uns sind Sie als Kunde Chefsache und als Full Service Werbeagentur sind wir vom ersten Kontakt bis zum finalen Produkt ein verlässlicher Partner an Ihrer Seite... kreativ, zielorientiert, engagiert, perfektionistisch, terminsicher und etatgerecht.",
    "Unsere Philosophie ist es, Ihnen unsere Arbeit abzunehmen, damit Sie sich voll auf Ihre unternehmerischen Stärken konzentrieren können. Wir wissen, wie wenig Zeit Sie als Unternehmer haben und sorgen durch reichlich Erfahrung, runde Arbeitsabläufe und ein hohes Maß an Einfühlungsvermögen, das Sie ohne großen zeitlichen Aufwand Ihr Ziel erreichen.",
    "Wir entwickeln für Sie individuelle Werbe-Konzepte, Corporate Designs und anspruchsvolle Web-Auftritte. Außerdem optimieren wir auf Wunsch Ihre bereits vorhandenen Lösungen und passen diese marktgerecht an. Ein starkes Team mit großer Erfahrung in klassischer und digitaler Werbung freut sich auf Sie und Ihr Unternehmen.",
  ],
} as const;

export const portfolio = {
  title: "Referenzen der typusmedia Werbeagentur",
  subtitle: "Portfolio unserer Arbeiten",
  introduction: "Seit 1997 entwirft und verwirklicht unsere inhabergeführte Agentur erfolgreiche Konzepte in der klassischen und digitalen Medien-Welt. Unser Hauptsitz befindet sich in der wirtschaftsstarken Löwenstadt Braunschweig. Von hier aus operieren wir bundesweit für eine vielfältige Klientel unterschiedlicher Branchen. Als Full Service Werbeagentur sind wir vom ersten Kontakt bis zum finalen Produkt ein vertrauensvoller und kompetenter Partner an Ihrer Seite... kreativ, zielorientiert, engagiert, perfektionistisch, terminsicher und etatgerecht.",
  projects: [
    { title: "Gastronomie-Webportal", category: "Web", image: butlerImage.url, text: "Design und Programmierung von www.der-butler.com. Katalog-Funktion mit verschiedenen Filtern, über 500 Locations, individuelle Maps und personalisierte Response-Elemente. Contao CMS." },
    { title: "Bonus Buch Gutscheinbuch", category: "Web", image: bonusImage.url, text: "Responsives Webdesign mit Webshop für Buchbestellungen, blätterbarer Online-Buch-Version, Katalog-Funktion mit Filtern und verlinkter Map mit allen Teilnehmern. Contao CMS." },
    { title: "Yogaschule Solis", category: "Web", image: solisImage.url, text: "Responsives Webdesign mit Webshop für Kurs- und Videobestellungen, Kursplan-Kalender mit buchbaren Kursen und mehrstufigen Kontaktformularen. Contao CMS." },
    { title: "Meine Traumhochzeit", category: "Editorial", image: editorialImage.url, text: "Hochzeitsmagazine – Magazine, Zeitungen und Bücher." },
    { title: "neotronik", category: "Marken", image: brandingImage.url, text: "Markenentwicklung und Markendesign inklusive Anmeldung beim DPMA." },
    { title: "BiAD", category: "Corporate", image: corporateImage.url, text: "Logodesign und Slogan. Corporate Design für Geschäftspapiere und Unternehmenskommunikation." },
    { title: "Saigon Today", category: "Gastro", image: gastroImage.url, text: "Speisekarten-Design inklusive Foodfotos und Bildbearbeitung." },
  ],
} as const;

export const services = [
  { title: "Webdesign", text: "Modernes Design für Ihre Webseite … benutzerfreundlich, suchmaschinenoptimiert und responsive für mobile Geräte." },
  { title: "CMS Contao", text: "Sie möchten Inhalte selbst in Ihre Webseite einfügen? Dann entwickeln wir Ihre Internetpräsenz mit dem Content Management System Contao." },
  { title: "Branding", text: "Kreativ, konzeptionell, ganzheitlich: vom idealen Markennamen bis zum unverwechselbaren Markendesign." },
  { title: "Printdesign", text: "Einheitlich, kreativ, unverwechselbar … wir gestalten professionelle Geschäftspapiere und Drucksachen für Ihr Unternehmen." },
] as const;
