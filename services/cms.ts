import butter from "buttercms";
import { CMSPost } from "../types/CMSTypes";

export const ABOUT_SLUG = "profile";

const API_KEY = process.env.BUTTER_CMS_API_KEY ?? "";

export const getAllPost = () => {
  const CMS = butter(API_KEY);
  return new Promise<CMSPost[]>(async (resolve, reject) => {
    try {
      const rawList = await CMS.post.list();
      const postList = (rawList?.data?.data ?? []) as CMSPost[];
      const filteredPost = postList.filter((post) => post.slug !== ABOUT_SLUG);
      resolve(filteredPost);
    } catch (e) {
      console.error(`Failed to retrive posts`);
      reject(e);
    }
  });
};

export const getPostBySlug = (slug: string) => {
  const CMS = butter(API_KEY);
  return new Promise<CMSPost>(async function (resolve, reject) {
    try {
      const post = (await CMS.post.retrieve(slug))?.data?.data as CMSPost;
      resolve(post);
    } catch (e) {
      console.error(`Failed to retrive post with slug: ${slug}`);
      reject(e);
    }
  });
};

export const getAbout = () => getPostBySlug(ABOUT_SLUG);
