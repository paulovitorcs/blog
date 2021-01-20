import { Container, Divider } from "@chakra-ui/react";
import React from "react";
import Contact from "../../components/Contact/Contact";
import FrontPageHeader from "../../components/FrontPageHeader/FrontPageHeader";
import HomeLinks from "../../components/HomeLinks";
import LatestPosts from "../../components/LatestPosts";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <FrontPageHeader />
      <Container my="8">
        <HomeLinks />
        <Divider my="10" />
        <LatestPosts />
        <Divider my="10" />
        <Contact />
      </Container>
    </Layout>
  );
};

export default Home;
