import React from "react";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from "@theme/BlogPostItem";
import type { Props } from "@theme/BlogPostItems";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";

const POSTS_PER_SECTION = 4;

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");

  const featuredBlogs = items.filter((val) =>
    val.content.frontMatter.tags.includes("featured")
  );
  const latestBlogs = items.filter(
    (val) => !val.content.frontMatter.tags.includes("featured")
  );

  const renderBlogSection = (blogs, title, showAll = false) => {
    const displayBlogs = showAll ? blogs : blogs.slice(0, POSTS_PER_SECTION);
    const showViewAll = blogs.length > POSTS_PER_SECTION && !showAll;

    return (
      <div className={`custom-blog-items-${title.toLowerCase()}`}>
        <h2 className="custom-blog-items-featured-heading featured-heading">
          {title}
        </h2>
        <div className="custom-box-outer">
          {displayBlogs.map(({ content: BlogPostContent }) => (
            <div className="custom-blog-post-items-container">
              <BlogPostProvider
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
              >
                <div className="custom-blog-post-card">
                  <BlogPostItemComponent>
                    <BlogPostContent />
                  </BlogPostItemComponent>
                </div>
              </BlogPostProvider>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-right w-full">
            <Link
              to={`${location.pathname}?type=${title.toLowerCase()}`}
              className="view-all-link"
            >
              View All {title} Posts
            </Link>
          </div>
        )}
      </div>
    );
  };

  if (type === "featured") {
    return (
      <div className="custom-blog-items">
        {renderBlogSection(featuredBlogs, "Featured", true)}
      </div>
    );
  } else if (type === "latest") {
    return (
      <div className="custom-blog-items">
        {renderBlogSection(latestBlogs, "Latest", true)}
      </div>
    );
  }

  return (
    <div className="custom-blog-items">
      {renderBlogSection(featuredBlogs, "Featured")}
      {renderBlogSection(latestBlogs, "Latest")}
    </div>
  );
}
