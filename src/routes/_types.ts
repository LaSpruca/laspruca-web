export type ProjectPage = {
  slug: string,
  metadata: ProjectMetadata,
  html: string
};

export type ProjectMetadata = {
  title: string,
  description: string,
  summary: string,
  dataString: string,
  subLinks: {
    href: string,
    text: string
  },
  date: Date
};
