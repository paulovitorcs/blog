import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeLinkItem = (props) => {
  const { icon, headline, link } = props;

  return (
    <Box>
      <Link
        href={link}
        d="flex"
        flexDirection="column"
        alignItems="center"
        isExternal
      >
        <FontAwesomeIcon icon={icon} size="2x" />
        <Heading mt="2" fontSize="3xl">
          {headline}
        </Heading>
      </Link>
    </Box>
  );
};

HomeLinkItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  headline: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeLinkItem;
