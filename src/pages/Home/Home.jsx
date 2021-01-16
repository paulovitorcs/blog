import { Container, Divider } from "@chakra-ui/react";
import React from "react";
import FrontPageHeader from "../../components/FrontPageHeader/FrontPageHeader";
import LatestPosts from "../../components/LatestPosts";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <FrontPageHeader />
      <Container>
        <Divider my="5" />
        <LatestPosts />
      </Container>
    </Layout>
  );
};

export default Home;
