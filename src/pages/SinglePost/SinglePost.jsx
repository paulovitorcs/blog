import React from "react";
import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent/PostContent";
import SEO from "../../components/SEO";

const SinglePost = (props) => {
  const { pageContext } = props;
  const {
    author,
    content,
    excerpt,
    date,
    featuredImage,
    slug,
    title,
  } = pageContext;

  return (
    <>
      <SEO
        isArticle={true}
        subtitle={title}
        description={excerpt}
        url={`/post/${slug}`}
        image={featuredImage?.node?.sourceUrl}
      />
      <Layout>
        <PostContent
          title={title}
          content={content}
          author={author}
          date={date}
          featuredImage={featuredImage}
        />
      </Layout>
    </>
  );
};

export default SinglePost;
