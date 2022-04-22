import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <h2 className="Text">{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
