import React from "react";
import Layout from "../../components/Layout";
import PageContent from "../../components/PageContent/PageContent";
import SEO from "../../components/SEO";

const SinglePost = (props) => {
  const { pageContext } = props;
  const { content, featuredImage, slug, title } = pageContext;

  return (
    <>
      <SEO subtitle={title} />
      <Layout>
        <PageContent
          title={title}
          content={content}
          featuredImage={featuredImage}
        />
      </Layout>
    </>
  );
};

export default SinglePost;
