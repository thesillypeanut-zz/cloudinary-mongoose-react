/*  Full Dashboard component */
import React from "react";

// Importing components
import Header from "./../Header";
import ImageList from "./../ImageList";
import ImageForm from "./../ImageForm";

class Dashboard extends React.Component {

    state = {
        message: { type: "", body: "" }
    }

    render() {
        return (
            <div className="App">
                {/* Header component with text props. */}
                <Header
                    title="Cloudinary Example"
                    subtitle="Save images to your local MongoDB"
                />

                {/* Image Upload Form */}
                <ImageForm dashboard={this} />

                {/* Images List */}
                <ImageList />
            </div>
        );
    }
}

export default Dashboard;
