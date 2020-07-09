import React from "react";
import Proptypes from "prop-types";

const Alert = ({ message, success }) => {
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

export default Alert;
