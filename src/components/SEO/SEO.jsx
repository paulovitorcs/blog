import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useWpBasicInfo } from "../../static-queries/wp";
import DefaultThumbnail from '../../../static/default-thumbnail.png';

const SEO = (props) => {
  const { isArticle, title, subtitle, description, url, image } = props;
  const wpBasicInfo = useWpBasicInfo();
  const imagePage = image ? url : DefaultThumbnail;
  const urlPage = url ? process.env.SITE_URL + url : process.env.SITE_URL;
  const titlePage = title ? title : wpBasicInfo.generalSettings.title;
  const subtitlePage = subtitle ? `${titlePage} - ${subtitle}` : null;
  const descriptionPage = description
    ? description
    : wpBasicInfo.generalSettings.description;

  console.log(subtitlePage);

  return (
    <Helmet title={titlePage} titleTemplate={subtitlePage}>
      <meta name="description" content={descriptionPage} />
      {(isArticle ? true : null) && <meta property="og:type" content="article" />}
      <meta property="og:url" content={urlPage} />
      <meta property="og:title" content={subtitle ? subtitle : titlePage} />
      <meta property="og:description" content={descriptionPage} />
      <meta property="og:image" content={imagePage} />
      <meta property="twitter:url" content={urlPage} />
      <meta property="twitter:title" content={subtitle ? subtitle : titlePage} />
      <meta property="twitter:description" content={descriptionPage} />
      <meta property="twitter:image" content={imagePage} />
    </Helmet>
  );
};

SEO.propTypes = {
  isArticle: PropTypes.bool.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string
};

SEO.defaultProps = {
  isArticle: false
};

export default SEO;
