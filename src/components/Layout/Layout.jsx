import React from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../../../assets/theme";
import Header from "../Header";
import Footer from "../Footer";

library.add(fas);

const Layout = (props) => {
  const { children } = props;

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <main>
        <Box mb="100px">{children}</Box>
      </main>
      <Footer />
    </ChakraProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
