import React from "react";
import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

function HomePage(props) {
  console.log(
    "🚀 ~ file: homepage.component.jsx ~ line 7 ~ HomePage ~ props",
    props
  );

  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default HomePage;
