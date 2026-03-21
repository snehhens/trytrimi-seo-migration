import { blogPosts } from "@/data/blogPosts";

export const getBlogPostMeta = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};
