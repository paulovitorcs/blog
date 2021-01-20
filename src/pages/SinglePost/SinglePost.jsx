import React from "react";
import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent/PostContent";
import SEO from "../../components/SEO";

const SinglePost = (props) => {
  const { pageContext } = props;
  const { author, content, date, featuredImage, slug, title } = pageContext;

  return (
    <>
      <SEO subtitle={title} />
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
