import React from "react";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from "@theme/BlogPostItem";
import type { Props } from "@theme/BlogPostItems";
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

const POSTS_PER_SECTION = 2;

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');

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
        {displayBlogs.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </BlogPostProvider>
        ))}
        {showViewAll && (
          <Link
            to={`${location.pathname}?type=${title.toLowerCase()}`}
            className="view-all-link"
          >
            View All {title} Posts
          </Link>
        )}
      </div>
    );
  };

  if (type === 'featured') {
    return <div className="custom-blog-items">{renderBlogSection(featuredBlogs, "Featured", true)}</div>;
  } else if (type === 'latest') {
    return <div className="custom-blog-items">{renderBlogSection(latestBlogs, "Latest", true)}</div>;
  }

  return (
    <div className="custom-blog-items">
      {renderBlogSection(featuredBlogs, "Featured")}
      {renderBlogSection(latestBlogs, "Latest")}
    </div>
  );
}
