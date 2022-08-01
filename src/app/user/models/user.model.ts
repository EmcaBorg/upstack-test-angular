export interface Link {
  label: string;
  link: string;
}

export interface LinksGroup {
  name: string;
  links: Link[];
}

export interface Info {
  name: string;
  description: string;
  image: string;
}

export interface User {
  info: Info;
  links: Link[];
  linksGroups: LinksGroup[];
}