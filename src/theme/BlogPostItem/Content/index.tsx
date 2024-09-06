import React from "react";
import clsx from "clsx";
import { blogPostContainerID } from "@docusaurus/utils-common";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import MDXContent from "@theme/MDXContent";
import type { Props } from "@theme/BlogPostItem/Content";
import Link from "@docusaurus/Link";

export default function BlogPostItemContent({
  children,
  className,
}: Props): JSX.Element {
  const { isBlogPostPage, frontMatter, metadata } = useBlogPost();
  console.log(123, frontMatter)
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx("markdown", className)}
    >
      {/* here show the title */}
      {/* <Link to={metadata.permalink}>
      <img src={frontMatter.image} alt="" />
      </Link> */}
      <MDXContent>{children}</MDXContent>
      <h3>{frontMatter.title}</h3>
      <p>{frontMatter.description}</p>
    </div>
  );
}
