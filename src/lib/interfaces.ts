export interface NavbarLink {
  id: number;
  route: string;
  routeName: string;
  subLinks?: Array<NavbarLink>;
}

export interface NavbarLinksWithSubLinks extends Array<NavbarLink> {}
