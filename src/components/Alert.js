import React from "react";
import Proptypes from "prop-types";
import "../styles/Alert.css";

const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <>
      <div className={`Alert alert-${success ? "success" : "error"}`}>
        {message}
      </div>
    </>
  );
};

Alert.propTypes = {
  message: Proptypes.string.isRequired,
  success: Proptypes.bool,
};
Alert.defaultProps = {
  success: false,
};
export default Alert;
