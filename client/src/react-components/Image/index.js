import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import "./styles.css";

class Image extends React.Component {
  render() {
    const { image } = this.props;

    return (
      <div className="image">
        <img src={image.image_url} />
      </div>
    );
  }
}

export default Image;
