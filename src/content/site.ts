import extraImage0 from "@/assets/solis.jpg.asset.json";
import extraImage1 from "@/assets/loose.jpg.asset.json";
import extraImage2 from "@/assets/giffhorn.jpg.asset.json";
import extraImage3 from "@/assets/haertle.jpg.asset.json";
import extraImage4 from "@/assets/al-duomo.jpg.asset.json";
import portfolioImage0 from "@/assets/portfolio-01.jpg.asset.json";
import portfolioImage1 from "@/assets/portfolio-02.jpg.asset.json";
import portfolioImage2 from "@/assets/portfolio-03.jpg.asset.json";
import portfolioImage3 from "@/assets/portfolio-04.jpg.asset.json";
import portfolioImage4 from "@/assets/portfolio-05.jpg.asset.json";
import portfolioImage5 from "@/assets/portfolio-06.jpg.asset.json";
import portfolioImage6 from "@/assets/portfolio-07.jpg.asset.json";
import portfolioImage7 from "@/assets/portfolio-08.jpg.asset.json";
import portfolioImage8 from "@/assets/portfolio-09.jpg.asset.json";
import portfolioImage9 from "@/assets/portfolio-10.jpg.asset.json";
import portfolioImage10 from "@/assets/portfolio-11.jpg.asset.json";
import portfolioImage11 from "@/assets/portfolio-12.jpg.asset.json";
import portfolioImage12 from "@/assets/portfolio-13.jpg.asset.json";
import portfolioImage13 from "@/assets/portfolio-14.jpg.asset.json";
import portfolioImage14 from "@/assets/portfolio-15.jpg.asset.json";
import portfolioImage15 from "@/assets/portfolio-16.jpg.asset.json";
import portfolioImage16 from "@/assets/portfolio-17.jpg.asset.json";
import portfolioImage17 from "@/assets/portfolio-18.jpg.asset.json";
import portfolioImage18 from "@/assets/portfolio-19.jpg.asset.json";
import portfolioImage19 from "@/assets/portfolio-20.jpg.asset.json";
import portfolioImage20 from "@/assets/portfolio-21.jpg.asset.json";
import portfolioImage21 from "@/assets/portfolio-22.jpg.asset.json";
import portfolioImage22 from "@/assets/portfolio-23.jpg.asset.json";
import portfolioImage23 from "@/assets/portfolio-24.jpg.asset.json";
import portfolioImage24 from "@/assets/portfolio-25.jpg.asset.json";
import portfolioImage25 from "@/assets/portfolio-26.jpg.asset.json";
import portfolioImage26 from "@/assets/portfolio-27.jpg.asset.json";
import portfolioImage27 from "@/assets/portfolio-28.jpg.asset.json";
import portfolioImage28 from "@/assets/portfolio-29.jpg.asset.json";
import portfolioImage29 from "@/assets/portfolio-30.jpg.asset.json";
import portfolioImage30 from "@/assets/portfolio-31.jpg.asset.json";
import portfolioImage31 from "@/assets/portfolio-32.jpg.asset.json";
import portfolioImage32 from "@/assets/portfolio-33.jpg.asset.json";
import portfolioImage33 from "@/assets/portfolio-34.jpg.asset.json";
import portfolioImage34 from "@/assets/portfolio-35.jpg.asset.json";
import portfolioImage35 from "@/assets/portfolio-36.jpg.asset.json";
import portfolioImage36 from "@/assets/portfolio-37.jpg.asset.json";
import portfolioImage37 from "@/assets/portfolio-38.jpg.asset.json";
import portfolioImage38 from "@/assets/portfolio-39.jpg.asset.json";
import portfolioImage39 from "@/assets/portfolio-40.jpg.asset.json";
import portfolioImage40 from "@/assets/portfolio-41.jpg.asset.json";
import servicesImage from "@/assets/services.jpg.asset.json";
import ownerImage from "@/assets/olbert.jpg.asset.json";

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
  { slug: "solis-yoga", title: "Yogaschule Solis", category: "Web", text: "Webseite für die Yogaschule Solis", features: ["Responsives Webdesign", "Webshop für Kurs- und Videobestellungen", "Kursplan-Kalender mit buchbaren Kursen unter Berücksichtigung von Platzkapazitäten", "Mehrstufige Kontaktformulare mit personalisierten Nachrichten", "Opt-In Datenschutz-Tool", "Contao Content Management System"], image: extraImage0.url, images: [extraImage0.url] },
  { slug: "loose-schuhe", title: "Loose Schuhe", category: "Web", text: "Webdesign für Loose Schuhe", features: ["Responsives Webdesign", "Umfangreicher Slider", "Mehrere Bildergalerien", "Opt-In Datenschutz-Tool", "Contao Content Management System"], image: extraImage1.url, images: [extraImage1.url] },
  { slug: "kanzlei-giffhorn", title: "Kanzlei Giffhorn", category: "Web", text: "Webdesign für die Steuerberater Kanzlei Giffhorn", features: ["Responsives Webdesign", "Downloadbereich mit Arbeitshilfen", "Newsbereich zur Selbstverwaltung", "Logo-Design", "Fotoshooting", "Contao Content Management System"], image: extraImage2.url, images: [extraImage2.url] },
  { slug: "cafe-haertle", title: "Konditorei & Café Haertle", category: "Web", text: "Webdesign für die Konditorei & Café Haertle", features: ["Responsives Webdesign", "Digitale Speise- und Getränkekarte", "Mehrere Bildergalerien", "Fotoshooting", "Contao Content Management System"], image: extraImage3.url, images: [extraImage3.url] },
  { slug: "al-duomo", title: "Al Duomo", category: "Web", text: "Webdesign für das Ristorante Al Duomo", features: ["Responsives Webdesign", "Blätterbares Event-Buch", "Location-Fotoshootings", "Verschiedene Bild-Slider", "Mehrere Bildergalerien", "Zeitgesteuerte Event-Termine", "Gutschein-Bestellservice mit automatisierten Bestellbestätigungen", "Contao Content Management System"], image: extraImage4.url, images: [extraImage4.url] },
  {
    slug: "der-butler",
    title: "Gastronomie-Webportal",
    category: "Web",
    text: "Design und Programmierung des Webportals www.der-butler.com",
    features: ["Katalog-Funktion mit verschiedenen Filtern", "Liste und Details mit über 500 Locations", "Individuelle Maps, automatisierte Verlinkungen zu facebook, instagram, Google reviews uvm.", "Personalisierte Response-Elemente", "Contao Content Management System"],
    image: portfolioImage0.url,
    images: [portfolioImage0.url],
  },
  {
    slug: "bonus-buch",
    title: "Bonus Buch Gutscheinbuch",
    category: "Web",
    text: "Webseite für das Gutscheinbuch Bonus Buch",
    features: ["Responsives Webdesign", "Webshop für Buchbestellungen, inkl. automatischer Bestätigungen und Versandbenachrichtigungen", "Blätterbare Online-Buch-Version (responsive)", "Katalog-Funktion mit verschiedenen Filtern", "Verlinkte Map mit allen Teilnehmern", "Contao Content Management System"],
    image: portfolioImage1.url,
    images: [portfolioImage1.url],
  },
  {
    slug: "web-arbeitsausschuss-tourismus-braunschweig",
    title: "Arbeitsausschuss Tourismus Braunschweig",
    category: "Web",
    text: "Webseite für den Arbeitsausschuss Tourismus Braunschweig e.V.",
    features: ["Responsives Webdesign", "Geschützter Login-Bereich", "Newsliste mit Zeitsteuerung", "Mitgliederliste mit Registrierung", "Opt-In Datenschutz-Tool", "Contao Content Management System"],
    image: portfolioImage2.url,
    images: [portfolioImage2.url],
  },
  {
    slug: "web-trauerbeistand-e-v-braunschweig",
    title: "Trauerbeistand e.V. Braunschweig",
    category: "Web",
    text: "Webseite für den Trauerbeistand e.V. Braunschweig",
    features: ["Responsives Webdesign", "Opt-In Datenschutz-Tool", "Contao Content Management System"],
    image: portfolioImage3.url,
    images: [portfolioImage3.url],
  },
  {
    slug: "web-sm-elektroanlagenbau-gmbh",
    title: "SM Elektroanlagenbau GmbH",
    category: "Web",
    text: "Webseite für die SM Elektroanlagenbau GmbH",
    features: ["Responsives Webdesign", "Opt-In Datenschutz-Tool", "Contao Content Management System"],
    image: portfolioImage4.url,
    images: [portfolioImage4.url],
  },
  {
    slug: "web-ristorante-momento",
    title: "Ristorante Momento",
    category: "Web",
    text: "Webdesign für das Ristorante Momento in Braunschweig.",
    features: ["Responsives Webdesign", "Restaurant- und Food-Fotoshootings", "Digitale Speisekarte", "Datenschutztool", "Contao Content Management System"],
    image: portfolioImage5.url,
    images: [portfolioImage5.url],
  },
  {
    slug: "web-schlossrestaurant-zentgraf",
    title: "Schlossrestaurant Zentgraf",
    category: "Web",
    text: "Webdesign für das Schlossrestaurant Zentgraf",
    features: ["Responsives Webdesign", "Location-Fotoshootings", "Verschiedene Bild-Slider", "Mehrere Bildergalerien"],
    image: portfolioImage6.url,
    images: [portfolioImage6.url],
  },
  {
    slug: "web-hermans-cafebar",
    title: "HERMANs CafeBar",
    category: "Web",
    text: "Webseite für die HERMANs CafeBar",
    features: ["Responsives Webdesign", "Webshop für Speisebestellungen (zeitgesteuert)", "Digitale Speise- und Getränkekarte, selbstverwaltet (inkl. QR-Code-Verlinkung)", "Mehrere Bildergalerien", "Individuelles Kontaktformular", "Contao Content Management System"],
    image: portfolioImage7.url,
    images: [portfolioImage7.url],
  },
  {
    slug: "web-rechtsanwalts-kanzlei-lowenrecht",
    title: "Rechtsanwalts-Kanzlei Löwenrecht",
    category: "Web",
    text: "Webseite für die Rechtsanwalts-Kanzlei Löwenrecht",
    features: ["Responsives Webdesign", "Onepager mit Scroll-to-Menu", "Cookie-Hinweis-Tool", "Map-Integration", "Slider mit Kundenbewertungen"],
    image: portfolioImage8.url,
    images: [portfolioImage8.url],
  },
  {
    slug: "web-pba-ingenieurburo",
    title: "PBA Ingenieurbüro",
    category: "Web",
    text: "Webdesign für das PBA Ingenieur- und Planungsbüro in Lehre-Wendhausen",
    features: ["Responsives Webdesign", "CSS-Animationen", "Map Integration", "Contao Content Management System"],
    image: portfolioImage9.url,
    images: [portfolioImage9.url],
  },
  {
    slug: "web-rokoko",
    title: "Rokoko",
    category: "Web",
    text: "Webseite für das Restaurant Rokoko.",
    features: ["Responsives Webdesign", "Webshop für Abhol- und Lieferservice", "Restaurant- und Event-Fotoshooting", "Contao Content Management System", "Online-Speisekarte zur Selbstverwaltung"],
    image: portfolioImage10.url,
    images: [portfolioImage10.url],
  },
  {
    slug: "web-sozialportal24-de",
    title: "sozialportal24.de",
    category: "Web",
    text: "Webseite für das Hartz IV-Portal sozialportal24",
    features: ["Responsives Webdesign", "Webshop für Buchbestellungen", "Mehrstufige Kontaktformulare mit Upload-Möglichkeiten und automatisierten Benachrichtigungen", "Selbstverwaltete Anwalts-Empfelungsliste mit Map-Einträgen", "Contao Content Management System"],
    image: portfolioImage11.url,
    images: [portfolioImage11.url],
  },
  {
    slug: "web-hotel-deutsches-haus",
    title: "Hotel Deutsches Haus",
    category: "Web",
    text: "Webseite für das Hotel Deutsches Haus",
    features: ["Responsives Webdesign", "Location-Fotoshootings", "2. Sprachversion (Englisch)", "Verschiedene Bild-Slider", "Mehrere Bildergalerien", "Contao Content Management System"],
    image: portfolioImage12.url,
    images: [portfolioImage12.url],
  },
  {
    slug: "web-hotel-brackstedter-muhle",
    title: "Hotel Brackstedter Mühle",
    category: "Web",
    text: "Webseite für das Hotel & Restaurant Brackstedter Mühle",
    features: ["Responsives Webdesign", "Location- & Food-Fotoshooting", "2. Sprachversion (Englisch)", "Verschiedene Bild-Slider", "Mehrere Bildergalerien", "Datenschutz-Tool Opt-In", "Contao Content Management System"],
    image: portfolioImage13.url,
    images: [portfolioImage13.url],
  },
  {
    slug: "web-dr-schops",
    title: "Dr. Schöps",
    category: "Web",
    text: "Webdesign für den Sachverständigen und Umweltexperten Dr. Schöps",
    features: ["Responsives Webdesign", "Contao Content Management System"],
    image: portfolioImage14.url,
    images: [portfolioImage14.url],
  },
  {
    slug: "web-vielharmonie",
    title: "Vielharmonie",
    category: "Web",
    text: "Webdesign für die Vielharmonie – Restaurant & Bar",
    features: ["Responsives Webdesign", "Location- & Food-Fotoshootings", "Onepager mit Scroll-to-Menu", "Slider", "Bildergalerie", "Contao Content Management System", "Map-Integration"],
    image: portfolioImage15.url,
    images: [portfolioImage15.url],
  },
  {
    slug: "web-zu-den-vier-linden",
    title: "Zu den Vier Linden",
    category: "Web",
    text: "Webdesign für die Vier Linden",
    features: ["Responsives Webdesign", "Location- & Food-Fotoshootings", "Onepager mit Scroll-to-Menu", "Slider", "Bildergalerie", "Contao Content Management System", "Map-Integration"],
    image: portfolioImage16.url,
    images: [portfolioImage16.url],
  },
  {
    slug: "editorial-magazin-butler",
    title: "Magazin BUTLER",
    category: "Editorial",
    text: "Layout, Text- und Anzeigen-Redaktion, Druck, Eigenverlag des BUTLER Gastronomieführer (148 Seiten, DIN A4, Klebebindung, Umschlag lackiert)",
    features: [],
    image: portfolioImage17.url,
    images: [portfolioImage17.url],
  },
  {
    slug: "meine-traumhochzeit",
    title: "Hochzeitsmagazine",
    category: "Editorial",
    text: "Layout, Text, Druck der Magazine \"Meine Traumhochzeit\" inkl. Anzeigenakquise und Anzeigengestaltung. Druck auf seidenmattem Papier mit Klebebindung.",
    features: [],
    image: portfolioImage18.url,
    images: [portfolioImage18.url],
  },
  {
    slug: "editorial-kataloge",
    title: "Kataloge",
    category: "Editorial",
    text: "Layout, Satz, Bildbearbeitung und Druck von hochwertigen Brautmodekatalogen",
    features: [],
    image: portfolioImage19.url,
    images: [portfolioImage19.url],
  },
  {
    slug: "editorial-gutscheinbuch",
    title: "Gutscheinbuch",
    category: "Editorial",
    text: "Design und Druck des Bonus Buch Gutscheinbuchs 2022. 228 Seiten, perforiert, Klebebindung, kaschierter Umschlag. Inklusive Anzeigengestaltung und Textredaktion.",
    features: [],
    image: portfolioImage20.url,
    images: [portfolioImage20.url],
  },
  {
    slug: "editorial-magazin-38",
    title: "Magazin 38°",
    category: "Editorial",
    text: "Layout, Text- und Anzeigen-Redaktion, Druck, Eigenverlag des Sommer-Magazins 38° (68 Seiten, DIN A5+, geheftet, Umschlag lackiert).",
    features: [],
    image: portfolioImage21.url,
    images: [portfolioImage21.url],
  },
  {
    slug: "editorial-elektronik-katalog",
    title: "Elektronik-Katalog",
    category: "Editorial",
    text: "Katalogdesign für den Elektronik-Versandhändler ETT.",
    features: [],
    image: portfolioImage22.url,
    images: [portfolioImage22.url],
  },
  {
    slug: "editorial-kinderbuch",
    title: "Kinderbuch",
    category: "Editorial",
    text: "Layout des Kinderbuchs \"Heras Fest - Märchen von der Würde des Menschen\" von Ulrike Munte.",
    features: [],
    image: portfolioImage23.url,
    images: [portfolioImage23.url],
  },
  {
    slug: "editorial-jci-coupon-booklet",
    title: "JCI-Coupon-Booklet",
    category: "Editorial",
    text: "Design, Text- und Anzeigen-Redaktion für das Booklet zur JCI-Europa-Konferenz in Braunschweig. 64 Seiten in englischer Sprache, Format DIN A6, geheftet, inkl. perforierter Gutscheine für die Konferenzteilnehmer aus der ganzen Welt.",
    features: [],
    image: portfolioImage24.url,
    images: [portfolioImage24.url],
  },
  {
    slug: "neotronik",
    title: "Marke neotronik",
    category: "Marken",
    text: "Entwicklung der Marke neotronik inkl. Anmeldung beim DPMA.",
    features: [],
    image: portfolioImage25.url,
    images: [portfolioImage25.url],
  },
  {
    slug: "marken-marke-enstruments",
    title: "Marke enstruments",
    category: "Marken",
    text: "Entwicklung der Marke enstruments inkl. Anmeldung beim DPMA.",
    features: [],
    image: portfolioImage26.url,
    images: [portfolioImage26.url],
  },
  {
    slug: "marken-marke-liston12",
    title: "Marke Liston12",
    category: "Marken",
    text: "Entwicklung der Marke Liston12 inkl. Anmeldung beim DPMA.",
    features: [],
    image: portfolioImage27.url,
    images: [portfolioImage27.url],
  },
  {
    slug: "marken-marke-volt-ch",
    title: "Marke Volt@ch",
    category: "Marken",
    text: "Entwicklung der Marke Volt@ch inkl. Anmeldung beim DPMA.",
    features: [],
    image: portfolioImage28.url,
    images: [portfolioImage28.url],
  },
  {
    slug: "biad",
    title: "BiAD – Bildungsakademie Düsseldorf",
    category: "Corporate",
    text: "Logodesign und Slogan für die Bildungsakademie Düsseldorf GmbH",
    features: ["Logodesign und Slogan für die Bildungsakademie Düsseldorf GmbH", "Prospektdesign und Druck, 16 seiter DIN A4 mit Ringösenheftung", "Corporate-Design Briefpapier, Visitenkarten, Stempel, V-Hülle und Präsentationsmappe inkl. Druck", "Design und Druck eines Seminar-Blocks inkl. 4-farbigem Umschlag für die Bildungsakademie BiAD."],
    image: portfolioImage29.url,
    images: [portfolioImage29.url, portfolioImage30.url, portfolioImage31.url, portfolioImage32.url],
  },
  {
    slug: "rokoko-corporate",
    title: "Rokoko – Corporate Design",
    category: "Corporate",
    text: "Design und Druck Event-Prospekt Restaurant Rokoko. 6 Seiten DIN A4, genutet, Wickelfalz.",
    features: ["Design und Druck Event-Prospekt Restaurant Rokoko. 6 Seiten DIN A4, genutet, Wickelfalz.", "Design und Druck Faltflyer (21 x 21 cm, inkl. Nutung) und Präsentationsmappe für das Restaurant Rokoko.", "Design und Druck Event-Flyer und Gutschein für das Restaurant Rokoko.", "Anzeigen-Design für das Restaurant Rokoko."],
    image: portfolioImage33.url,
    images: [portfolioImage33.url, portfolioImage34.url, portfolioImage35.url, portfolioImage36.url],
  },
  {
    slug: "saigon-today",
    title: "Saigon Today",
    category: "Gastro",
    text: "Design und Druck der Speisekarte für das Restaurant Saigon Today. Inkl. Foodfotos und Bildbearbeitung.",
    features: ["Design und Druck der Speisekarte für das Restaurant Saigon Today. Inkl. Foodfotos und Bildbearbeitung.", "Design und Druck von Flyern und Plakaten zur Eröffnung des Restaurants Saigon Today. Inkl. Logodesign."],
    image: portfolioImage37.url,
    images: [portfolioImage37.url, portfolioImage38.url],
  },
  {
    slug: "cafe-arcachon",
    title: "Café Arcachon",
    category: "Gastro",
    text: "Design und Druck der Speisekarte für das Café Arcachon.",
    features: ["Design und Druck der Speisekarte für das Café Arcachon."],
    image: portfolioImage39.url,
    images: [portfolioImage39.url],
  },
  {
    slug: "restaurant-kalimera",
    title: "Restaurant Kalimera",
    category: "Gastro",
    text: "Design und Druck der Speisekarte und Außerhauskarte für das Restaurant Kalimera.",
    features: ["Design und Druck der Speisekarte und Außerhauskarte für das Restaurant Kalimera."],
    image: portfolioImage40.url,
    images: [portfolioImage40.url],
  }
  ],
} as const;

export const services = [
  { title: "Webdesign", text: "Modernes Design für Ihre Webseite … benutzerfreundlich, suchmaschinenoptimiert und responsive für mobile Geräte." },
  { title: "CMS Contao", text: "Sie möchten Inhalte selbst in Ihre Webseite einfügen? Dann entwickeln wir Ihre Internetpräsenz mit dem Content Management System Contao." },
  { title: "Branding", text: "Kreativ, konzeptionell, ganzheitlich: vom idealen Markennamen bis zum unverwechselbaren Markendesign." },
  { title: "Printdesign", text: "Einheitlich, kreativ, unverwechselbar … wir gestalten professionelle Geschäftspapiere und Drucksachen für Ihr Unternehmen." },
] as const;
