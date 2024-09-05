import React from "react";
import clsx from "clsx";
import { blogPostContainerID } from "@docusaurus/utils-common";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import MDXContent from "@theme/MDXContent";
import type { Props } from "@theme/BlogPostItem/Content";

export default function BlogPostItemContent({
  children,
  className,
}: Props): JSX.Element {
  const { isBlogPostPage, frontMatter, assets, metadata } = useBlogPost();
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx("markdown", className)}
    >
      {/* here show the title */}
      <MDXContent>{children}</MDXContent>
      <h3>{frontMatter.title}</h3>
      <p>{frontMatter.description}</p>
    </div>
  );
}
