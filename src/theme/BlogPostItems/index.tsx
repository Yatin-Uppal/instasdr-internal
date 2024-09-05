import React, { useEffect } from "react";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from "@theme/BlogPostItem";
import type { Props } from "@theme/BlogPostItems";

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  // here we'll filter out the featured blogs
  const featuredBlogs = items.filter((val) =>
    val.content.frontMatter.tags.includes("featured")
  );
  const latestBlogs = items.filter(
    (val) => !val.content.frontMatter.tags.includes("featured")
  );
  useEffect(() => {
    console.log(items, BlogPostItem);
  }, []);
  return (
    <div className="custom-blog-items">
      <div className="custom-blog-items-featured">
        <h2 className="custom-blog-items-featured-heading featured-heading">
          Featured
        </h2>
        {featuredBlogs.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </BlogPostProvider>
        ))}
      </div>
      <div className="custom-blog-items-latest">
        <h2 className="custom-blog-items-featured-heading featured-heading">
          Latest
        </h2>
        {latestBlogs.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </BlogPostProvider>
        ))}
      </div>
    </div>
  );
}
