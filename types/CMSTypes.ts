export type CMSPostAuthor = {
  bio?: string;
  email?: string;
  facebook_url?: string;
  first_name?: string;
  instagram_url?: string;
  last_name?: string;
  linkedin_url?: string;
  pinterest_url?: string;
  profile_image?: string;
  slug?: string;
  title?: string;
  twitter_handle?: string;
};

export type CMSPostCategory = {
  name?: string;
  slug?: string;
};

export type CMSPost = {
  author?: CMSPostAuthor;
  body?: string;
  categories?: CMSPostCategory[];
  created?: string;
  featured_image?: string;
  featured_image_alt?: string;
  meta_description?: string;
  published?: string;
  seo_title?: string;
  slug?: string;
  status?: string;
  summary?: string;
  tags?: any[];
  title?: string;
  updated?: string;
  url?: string;
};
