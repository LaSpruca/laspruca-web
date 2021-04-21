export interface ProjectPage {
  slug: string;
  metadata: ProjectMetadata;
  html: string;
}

export interface CardLink {
  href: string;
  text: string;
}

export interface ProjectMetadata {
  title: string;
  description: string;
  summary: string;
  dataString: string;
  subLinks: CardLink[];
  date: Date;
}
