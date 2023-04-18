export interface BlogPost {
  _id: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  categories: [Category];
  slug: {
    current: string;
  };
  body: [object];
}

export interface Category {
  _id: string;
  title: string;
}
