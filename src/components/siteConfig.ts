export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Training", href: "/training" },
  { label: "Easterseals", href: "/easterseals" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export const siteContact = {
  emailShowroom: "dphillips@easterseals-cseohio.org",
  emailOperations: "dphillips@easterseals-cseohio.org",
  phone: "(614) 332-5205",
  phoneHref: "tel:+16143325205",
  addressLines: [
    "The Shops on Lane Avenue,",
    "1675 W. Lane Ave,",
    "Columbus, OH 43221",
  ],
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=1675+W+Lane+Ave,+Columbus,+OH+43221",
  businessHours: [
    "CRC packet pickup - Mon, Nov 17 to Wed, Nov 26",
    "Chase packet pickup - Tue, Nov 18 and Tue, Nov 25 | 4:00pm to 6:00pm",
    "Shops on Lane pickup - Sun, Nov 23 | Noon to 3:00pm",
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/runlikeagirlOH",
      key: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/runlikeagirlOH",
      key: "instagram",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/runlikeagirlOH",
      key: "x",
    },
  ],
} as const;
