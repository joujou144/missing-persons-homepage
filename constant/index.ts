// NAVIGATION
export const NAV_LINKS = [
  { href: "/#about", key: "about", label: "About" },
  { href: "/#why", key: "why", label: "Why" },
  {
    href: "https://react-losttracker.vercel.app",
    key: "missing",
    label: "Missing",
  },
  { href: "/#contact", key: "contact", label: "Contact" },
  {
    href: "https://react-losttracker.vercel.app",
    key: "login",
    label: "Login",
  },
];

// HERO HEADLINE
export const HERO_HEADLINE = "Missing Persons Platform";

// HERO SUBTEXT
export const HERO_SUBTEXT =
  " We store and disseminate information about individuals who go missing in the UK.";

// ABOUT HEADLINE
export const ABOUT_HEADLINE =
  "Empowering communities through technology, we strive to bring hope by finding missing loved ones swiftly and effectively.";
// ABOUT LEFT CONTENT
export const ABOUT_LEFT_CONTENT = [
  {
    content:
      "Founded with a mission to alleviate the distress of missing persons' families, our company harnesses advanced technology and a dedicated team to locate individuals efficiently. With a compassionate approach, we provide support to communities and authorities, striving to reunite loved ones and bring solace in times of uncertainty.",
  },
  {
    content:
      "Committed to reuniting families, our passion and dedication drive us to tirelessly search for missing individuals with compassion and expertise.",
  },
];

// ABOUT BOX CONTENT
export const BOX_CONTENT =
  "Through close collaboration with local authorities, we've successfully reunited families. Our expertise and technology ensure effective search operations.";
// ABOUT RIGHT CONTENT
export const ABOUT_RIGHT_CONTENT =
  "Driven by a commitment to human welfare, we prioritize transparency and collaboration in every aspect of our work. Through our comprehensive database and proactive outreach efforts, we endeavor to create a safer world where no disappearance goes unnoticed. At our core, we stand as a beacon of hope and solidarity for those in need.";

// ABOUT SLOGANS
export const ABOUT_SLOGANS = [
  { label: "Faith over fear" },
  { label: "Don't lose hope" },
  { label: "Keep your head up" },
];

// REASONS
export const REASONS = [
  {
    reason:
      "Our dedication stems from the rising number of missing individuals annually, driving our urgent mission. We believe in offering hope and closure to affected families, alleviating their anguish with every successful reunion.",
  },
  {
    reason:
      "As missing cases escalate, our resolve strengthens to provide solace and support to affected communities.",
  },
];

// WHY SLOGANS
export const WHY_SLOGANS = [
  { label: "Love Prevails" },
  { label: "Let's Bring Them Home" },
  { label: "Together Rescue Reunite" },
];

// CTA TEXT
export const CTA_INTRO =
  "Inspired by compassion and driven by purpose, our organization is dedicated to addressing the distress of missing persons' families. With each passing day, our resolve strengthens to harness technology and community support in our quest to reunite loved ones. Your involvement is crucial in our mission.";

export const CTA_TEXT =
  "Join us in our mission to reunite families and bring solace to communities. Together, we can make a difference in the lives of those affected by missing individuals.";

// MAP TEXT
export const MAP_TEXT = "Search. Hope. Find them alive.";

// MAP DATE
export const MAP_DATE = "Updated as of May 30, 2024";
export const MAP_INFO = "Contact your local authority for additional updates";

// MISSING PERSONS
export type PersonProps = {
  name: string;
  imageSrc: string;
  location: string;
  createdAt: string;
};

export const persons: PersonProps[] = [
  {
    name: "Alice Smith",
    imageSrc: "/jane-doe-1.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Brad Smith",
    imageSrc: "/jon-doe-1.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Jacob Smith",
    imageSrc: "/jon-doe-2.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Jessica Smith",
    imageSrc: "/jane-doe-3.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Isaac Smith",
    imageSrc: "/jon-doe-3.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Penelope Smith",
    imageSrc: "/jane-doe-2.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
];

// FOOTER SECTION
export const COPYRIGHT = "Copyright © 2024 LostinNL. All Rights Reserved.";

export const CONTACT = [
  {
    content:
      "  Email, call or complete the form to learn how we could assist you.",
  },
  { content: "info@lostinnl.com" },
  { content: "(+123) 456 789" },
];

export const FOOTER_LINKS = [
  {
    title: "Links",
    links: ["Privacy Policy", "Cookie Policy", "Terms & Conditions"],
  },
  {
    title: "Support",
    links: ["Help & FAQ", "Community", "Press & Media"],
  },
  {
    title: "Social",
    links: ["Twitter", "Facebook", "LinkedIn"],
  },
];
