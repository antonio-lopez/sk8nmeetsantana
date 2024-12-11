export interface NavbarLink {
  id: number;
  route: string;
  routeName: string;
  subLinks?: Array<NavbarLink>;
}

export interface NavbarLinksWithSubLinks extends Array<NavbarLink> {}

export interface IMeetup {
  _id: number;
  image: ICloudinaryList;
  title: string;
  slug: {
    current: string;
  };
  meetupDate?: string;
  cloudinaryList?: ICloudinaryList[];
  body?: string;
}

export interface ICloudinaryList {
  _key: string;
  secure_url: string;
  public_id: string;
  version?: string;
  format?: string;
  width: string;
  height: string;
}
