export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: NavItem[] = [
  { href: "/writing", label: "Writing" },
  { href: "/media", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: NavItem[] = [
  { href: "/writing", label: "Writing" },
  { href: "/media", label: "Media" },
];

export const footerExternal: NavItem[] = [
  { href: "https://albanjerome.substack.com", label: "Substack" },
];
