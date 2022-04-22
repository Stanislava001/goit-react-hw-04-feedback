import React from "react";
import PropTypes from "prop-types";

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2 className="Text">{title}</h2>
      <ul>
        <li>Good: {good} </li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {total ? positivePercentage : 0}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
