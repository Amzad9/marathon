export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Event Details", href: "/event-details" },
  { label: "Our Beneficiary", href: "/our-beneficiary" },
  { label: "Swag", href: "/swag" },
  { label: "Packet Pickup", href: "/packet-pickup" },
  { label: "Questions", href: "/questions" },
];

export const siteContact = {
  emailShowroom: "kara@ultrafitusa.com",
  emailOperations: "kara@ultrafitusa.com",
  phone: "614-332-5205",
  phoneHref: "tel:+16143325205",
  addressLines: [
    "The Shops on Lane Avenue,",
    "1675 W. Lane Ave,",
    "Columbus, OH 43221",
  ],
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=1675+W.+Lane+Ave,+Columbus,+OH+43221",
  businessHours: [
    "Thanksgiving Day - Thursday, Nov 27, 2025",
    "Start times begin at 8:30am",
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/ColumbusTurkeyTrot/",
      key: "facebook",
    },
  ],
} as const;
