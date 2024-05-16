// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "about", label: "About" },
  { href: "/missing", key: "missing", label: "Missing" },
  { href: "/", key: "contact", label: "Contact" },
];

// REASONS
export const REASONS = [
  {
    reason:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus provident sequi, cum architecto libero quo nulla accusantium expedita distinctio!",
  },
  {
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nam!",
  },
];

// WHY SLOGANS
export const WHY_SLOGANS = [
  { label: "Love Prevails" },
  { label: "Let's Bring Them Home" },
  { label: "Together Rescue Reunite" },
];

// MISSING PERSONS
export type PersonProps = {
  name: string;
  imageSrc: string;
  location: string;
  createdAt: string;
};

export const persons: PersonProps[] = [
  {
    name: "Jane Doe 1",
    imageSrc: "/jane-doe-1.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Jon Doe 1",
    imageSrc: "/jon-doe-1.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Jon Doe 2",
    imageSrc: "/jon-doe-2.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Jane Doe 3",
    imageSrc: "/jane-doe-3.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Jon Doe 3",
    imageSrc: "/jon-doe-3.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
  {
    name: "Jane Doe 2",
    imageSrc: "/jane-doe-2.png",
    location: "Newfoundland",
    createdAt: "Jan 2024",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};
