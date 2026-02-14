export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { id: "customers", label: "For Customers", href: "#types" },
  { id: "why", label: "Why Wenny", href: "#why" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;
