// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "about", label: "About" },
  { href: "/missing", key: "missing", label: "Missing" },
  { href: "/", key: "contact", label: "Contact" },
];

// ABOUT HEADLINE
export const ABOUT_HEADLINE =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa perferendis quae quo optio architecto laboriosam neque temporibus nemo in.";

// ABOUT LEFT CONTENT
export const ABOUT_LEFT_CONTENT = [
  {
    content:
      " When designing for the web, whitespace is one of those tools you should never take for granted and should always keep a good handle on. Something to keep in mind: the things you scale upwards often become focal points, so, be sure to scale with care. With great scale comes great responsibility.",
  },
  {
    content:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet ea ad, optio unde natus illum deserunt. Atque, voluptates quis?",
  },
];

// ABOUT BOX CONTENT
export const BOX_CONTENT =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, eligendi. Asperiores odit enim aperiam aliquam incidunt exercitationem, ab voluptates facere voluptatibus.";

// ABOUT RIGHT CONTENT
export const ABOUT_RIGHT_CONTENT =
  "  When designing for the web, whitespace is one of those tools you should never take for granted and should always keep a good handle on. Something to keep in mind: the things you scale upwards often become focal points, so, be sure to scale with care. With great scale comes great responsibility.";

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

// CTA TEXT
export const CTA_TEXT =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat qui doloremque consectetur sequi, quo hic? A similique minus magni odit iure ipsa dicta doloremque eos ea voluptate? Odit, voluptates.";

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
