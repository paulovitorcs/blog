import React from "react";
import PostItem from "../PostItem";
import { Button, Heading, HStack, VStack, Wrap } from "@chakra-ui/react";
import { useLatestPosts } from "../../static-queries/post";
import { Link } from "gatsby";

const LatestPosts = () => {
  const latestPostsData = useLatestPosts();

  const postsList = latestPostsData.map((post, index) => {
    return (
      <PostItem
        key={`postItem${index}`}
        title={post.title}
        slug={post.slug}
        excerpt={post.excerpt}
        featuredImage={post.featuredImage?.node}
      />
    );
  });

  return (
    <Wrap>
      <Heading size="md" mb="4">
        Últimas Postagens
      </Heading>
      <VStack spacing="20px">{postsList}</VStack>
      <HStack w="100%" justify="center" mt="4">
        <Link to="/blog">
          <Button>Ver Todas as Postagens</Button>
        </Link>
      </HStack>
    </Wrap>
  );
};

export default LatestPosts;
