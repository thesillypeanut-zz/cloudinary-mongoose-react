import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Input from "../Input";

// Importing actions/required methods
import { updateStudentForm, addStudent } from "../../actions/student";
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
                        className="student-form__submit-button"
                        type="submit"
                    >
                        Upload
                    </Button>
                </form>
                <p className={`student-form__message--${dashboard.state.message.type}`}>
                    {dashboard.state.message.body}
                </p>
            </React.Fragment>
            // <React.Fragment>
            //     <Grid className="student-form" container spacing={4}>
            //         {/* Inputs to add student */}
            //         <Input
            //             name="name"
            //             value={name}
            //             onChange={e => updateStudentForm(this, e.target)}
            //             label="Student Name"
            //         />

            //         <Input
            //             name="year"
            //             value={year}
            //             onChange={e => updateStudentForm(this, e.target)}
            //             label="Year"
            //         />

            //         <Grid
            //             className="student-form__button-grid"
            //             item
            //             xl={2}
            //             lg={2}
            //             md={12}
            //             s={12}
            //             xs={12}
            //         >
            //             <Button
            //                 variant="contained"
            //                 color="primary"
            //                 onClick={() => addStudent(this, dashboard)}
            //                 className="student-form__submit-button"
            //             >
            //                 Add Student
            //             </Button>
            //         </Grid>
            //     </Grid>

            //     <p className={`student-form__message--${dashboard.state.message.type}`}>
            //         {dashboard.state.message.body}
            //     </p>
            // </React.Fragment>
        );
    }
}

export default ImageForm;
