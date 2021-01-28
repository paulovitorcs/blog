import React from "react";
import Layout from "../../components/Layout";
import PostContent from "../../components/PostContent/PostContent";
import SEO from "../../components/SEO";
import { Disqus } from 'gatsby-plugin-disqus';
import { Container, Divider } from "@chakra-ui/react";

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

  const disqusConfig = {
    url: process.WP_ENV,
    identifier: slug,
    title: title
  };

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
        <Container >
          <Divider my="8" />
          <Disqus config={disqusConfig} />
        </Container>
      </Layout>
    </>
  );
};

export default SinglePost;
