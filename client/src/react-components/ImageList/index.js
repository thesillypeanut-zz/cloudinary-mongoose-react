import React from "react";
import { uid } from "react-uid";
import Button from "@material-ui/core/Button";

import Image from "../Image";

// Importing actions/required methods
import { getImages } from "../../actions/image";

import "./../../App.css";
import "./styles.css";

/* Component for the List of Images */
class ImageList extends React.Component {

    // image list state
    state = {
        imageList: []
    }

    render() {
        const { dashboard } = this.props;

        return (
            <React.Fragment>
                <Button
                    onClick={() => getImages(this)}
                    className="image-list__button app__horizontal-center"
                    variant="contained"
                >
                    Show Images
                </Button>

                <div class="ui grid container">
                    <div class="ui three column centered grid">
                        {this.state.imageList.map(image => (
                            <Image
                                key={uid(
                                    image
                                )} /* unique id required to help React render more efficiently when we delete images. */
                                image={image}
                                dashboard={dashboard}
                                imageList={this}
                            />
                        ))}
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default ImageList;
