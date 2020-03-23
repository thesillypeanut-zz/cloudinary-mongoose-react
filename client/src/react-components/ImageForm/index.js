import React from "react";
import Button from "@material-ui/core/Button";

// Importing actions/required methods
import { addImage } from "../../actions/image";

import "./styles.css";

/* Component for the Image Form */
class ImageForm extends React.Component {

    render() {
        const { dashboard } = this.props;

        return (
            <React.Fragment>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    addImage(e.target, dashboard);
                }}>
                    <div class="field">
                        <label>Image</label>
                        <input name="image" type="file" />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        className="image-form__submit-button"
                        type="submit"
                    >
                        Upload
                    </Button>
                </form>

                <p className={`image-form__message--${dashboard.state.message.type}`}>
                    {dashboard.state.message.body}
                </p>
            </React.Fragment>
        );
    }
}

export default ImageForm;
