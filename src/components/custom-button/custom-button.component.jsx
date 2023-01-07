import React from "react";

import "./custom-button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function CustomButton({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`${BUTTON_TYPE_CLASSES[buttonType]} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
