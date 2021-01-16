import React from "react";
import ReactHtmlParser from "react-html-parser";
import Typing from "react-typing-animation";
import { Heading, Stack, Box, Text, Container } from "@chakra-ui/react";
import { useWpFrontPage } from "../../static-queries/page";
import { FrontPageHeaderContainer } from "./FrontPageHeader.styles";

const FrontPageHeader = () => {
  const frontPageData = useWpFrontPage();

  if (!frontPageData) {
    return null;
  }

  return (
    <FrontPageHeaderContainer>
      <Container maxW="5xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          spacing="80px"
        >
          <Box w={{ base: "100%", md: "55%" }}>
            <Heading
              fontSize={{ base: "50px", md: "80px" }}
              textAlign={{ base: "center", md: "right" }}
            >
              <Typing speed={100}>{frontPageData.title}</Typing>
            </Heading>
          </Box>
          <Box
            d="flex"
            alignItems="center"
            justifyContent={{ base: "center", md: "start" }}
            w={{ base: "100%", md: "45%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Box as="span">{ReactHtmlParser(frontPageData.content)}</Box>
          </Box>
        </Stack>
      </Container>
    </FrontPageHeaderContainer>
  );
};

export default FrontPageHeader;
