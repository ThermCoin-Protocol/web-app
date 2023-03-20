export interface BlogPost {
  _id: string;
  title: string;
  author: string;
  publishedAt: string;
  mainImage: {
    asset: {
      url: string;
    };
  }
  slug: {
    current: string;
  };
  body: [object];
}