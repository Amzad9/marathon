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
<<<<<<< HEAD
  emailShowroom: "dphillips@easterseals-cseohio.org",
  emailOperations: "dphillips@easterseals-cseohio.org",
  phone: "(614) 332-5205",
=======
  emailShowroom: "kara@ultrafitusa.com",
  emailOperations: "kara@ultrafitusa.com",
  phone: "614-332-5205",
>>>>>>> ad3887c (ui changes)
  phoneHref: "tel:+16143325205",
  addressLines: [
    "The Shops on Lane Avenue,",
    "1675 W. Lane Ave,",
    "Columbus, OH 43221",
  ],
  directionsHref:
<<<<<<< HEAD
    "https://www.google.com/maps/search/?api=1&query=1675+W+Lane+Ave,+Columbus,+OH+43221",
  businessHours: [
    "CRC packet pickup - Mon, Nov 17 to Wed, Nov 26",
    "Chase packet pickup - Tue, Nov 18 and Tue, Nov 25 | 4:00pm to 6:00pm",
    "Shops on Lane pickup - Sun, Nov 23 | Noon to 3:00pm",
=======
    "https://www.google.com/maps/search/?api=1&query=1675+W.+Lane+Ave,+Columbus,+OH+43221",
  businessHours: [
    "Thanksgiving Day - Thursday, Nov 27, 2025",
    "Start times begin at 8:30am",
>>>>>>> ad3887c (ui changes)
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/ColumbusTurkeyTrot/",
      key: "facebook",
    },
  ],
} as const;
