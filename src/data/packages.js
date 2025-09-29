export const mcPackages = [
  {
    slug: "mc-classic",
    serviceSlug: "master-of-ceremony",
    title: "Classic Package",
    price: "\u20A6150,000",
    tag: "MC",
    features: [
      "Professional MC for up to 3 hours",
      "Suitable for weddings, birthdays, funerals, and corporate events",
    ],
  },
  {
    slug: "mc-premium",
    serviceSlug: "master-of-ceremony",
    title: "Premium Package",
    price: "\u20A6250,000",
    tag: "MC",
    features: [
      "Extended hosting support for up to 5 hours",
      "Interactive games and audience engagement tailored to the programme",
    ],
  },
  {
    slug: "mc-luxury",
    serviceSlug: "master-of-ceremony",
    title: "Luxury Package",
    price: "\u20A6350,000",
    tag: "MC",
    features: [
      "Full-day hosting with timeline coordination",
      "After-party kick-off to keep the celebration energised",
    ],
  },
  {
    slug: "mc-content",
    serviceSlug: "master-of-ceremony",
    title: "Content Package",
    price: "\u20A6450,000",
    tag: "MC",
    features: [
      "Hosting plus on-site content capture collaboration",
      "Quick highlight recap tailored for social platforms",
    ],
  },
  {
    slug: "mc-elite",
    serviceSlug: "master-of-ceremony",
    title: "Elite Package",
    price: "\u20A6550,000",
    tag: "MC",
    features: [
      "Premium hosting team with hype support and timekeeping",
      "Dedicated content manager and same-day deliverables",
    ],
  },
];

export const contentPackages = [
  {
    slug: "content-classic",
    serviceSlug: "content-creation",
    title: "Classic Package",
    price: "\u20A6100,000",
    tag: "Content",
    features: [
      "Content ideation session tailored to your event",
      "Slightly negotiable based on scope and deliverables",
    ],
  },
  {
    slug: "content-premium",
    serviceSlug: "content-creation",
    title: "Premium Package",
    price: "\u20A6250,000",
    tag: "Content",
    features: [
      "Content ideas and scripting for key moments",
      "On-site content shoot with same-day edit",
    ],
  },
  {
    slug: "content-luxury",
    serviceSlug: "content-creation",
    title: "Luxury Package",
    price: "\u20A6350,000",
    tag: "Content",
    features: [
      "Strategic content ideas and scripting",
      "On-site content shoot and edit",
      "Publishing support on the MC's social pages",
    ],
  },
];

export const aLaCarteServices = [
  {
    slug: "video-editing-standard",
    serviceSlug: "video-editing",
    title: "Video Editing",
    price: "\u20A6300,000",
    tag: "Service",
    features: [
      "Standalone video editing for your event footage with professional polish",
    ],
  },
];

export const packageCategories = [
  {
    key: "mc",
    label: "MC Packages",
    description:
      "Consistent pricing across weddings, birthdays, funerals, and every celebration. Pick the MC package that matches your event flow and audience expectations.",
    items: mcPackages,
  },
  {
    key: "content",
    label: "Content Creation",
    description:
      "Bring your story to life with tailored concepts, coverage, and edits that keep your audience engaged online.",
    items: contentPackages,
  },
  {
    key: "services",
    label: "Additional Services",
    description:
      "Complement any package with stand-alone video editing support delivered to the same exacting standard.",
    items: aLaCarteServices,
  },
];

export const packagesByService = packageCategories.reduce((acc, category) => {
  category.items.forEach((item) => {
    if (!item.serviceSlug) {
      return;
    }

    if (!acc[item.serviceSlug]) {
      acc[item.serviceSlug] = [];
    }

    acc[item.serviceSlug].push(item);
  });

  return acc;
}, {});
