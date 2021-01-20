import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useWpBasicInfo } from "../../static-queries/wp";

const SEO = (props) => {
  const { isArticle, title, subtitle, description } = props;
  const wpBasicInfo = useWpBasicInfo();
  const urlPage = process.env.SITE_URL;
  const titlePage = title ? title : wpBasicInfo.generalSettings.title;
  const subtitlePage = subtitle ? `${titlePage} - ${subtitle}` : null;
  const descriptionPage = description
    ? description
    : wpBasicInfo.generalSettings.description;

  return (
    <Helmet title={titlePage} titleTemplate={subtitlePage}>
      <meta name="description" content={descriptionPage} />
      <meta property="og:url" content={urlPage} />
      {(isArticle ? true : null) && <meta property="og:type" content="article" />}
      <meta property="og:title" content={titlePage} />
      <meta property="og:description" content={descriptionPage} />
    </Helmet>
  );
};

SEO.propTypes = {
  isArticle: PropTypes.bool.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  isArticle: false
};

export default SEO;
