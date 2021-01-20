import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HomeLinkItem from "../HomeLinkItem/HomeLinkItem";

const HomeLinks = () => {
  return (
    <HStack spacing="75px" justifyContent="center">
      <HomeLinkItem icon="rss" headline="Blog" link="/blog" />
      <HomeLinkItem icon={["fab", "github"]} headline="Github" link="https://github.com/paulovitorcs" />
      <HomeLinkItem icon={["fab", "twitter"]} headline="Twitter" link="https://twitter.com/paulovitorcs" />
      <HomeLinkItem icon={["fab", "linkedin"]} headline="LinkedIn" link="https://www.linkedin.com/in/paulovitorcs/" />
    </HStack>
  );
};

export default HomeLinks;
