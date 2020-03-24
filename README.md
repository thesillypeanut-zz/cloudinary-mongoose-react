# Cloudinary-Mongoose-React

This example demonstrates how to:

-   connect your React frontend to Express backend, MongoDB and the [Cloudinary](https://cloudinary.com/) API
-   upload images to the Cloudinary server and your local MongoDB
-   delete images from the Cloudinary server and your local MongoDB

Refer to this [tutorial](https://cloudinary.com/blog/build_the_back_end_for_your_own_instagram_style_app_with_cloudinary) for more advanced functionalities such as:

- [Progress and Preview](https://cloudinary.com/blog/build_the_back_end_for_your_own_instagram_style_app_with_cloudinary#progress_and_preview)
- [Incoming](https://cloudinary.com/blog/build_the_back_end_for_your_own_instagram_style_app_with_cloudinary#incoming_transformation) and [Eager](https://cloudinary.com/blog/build_the_back_end_for_your_own_instagram_style_app_with_cloudinary#eager_transformation) image transformations
- and more

## Setup
Start your local Mongo database.  For example, in a separate terminal window:

```
# create and run local Mongo database in the root directory of the repo
mkdir mongo-data
mongod --dbpath mongo-data
```

Then, in the root directory of the repo, run:
```
# install server dependencies in the root directory
npm install

# install frontend dependencies in the client directory
cd client
npm install
```

Alternatively, you can run `npm run setup` in the root directory which runs a script to execute all the above commands (not including starting the mongo database, since it should be run in a separate window). This is a shortcut command defined in [package.json](package.json).

### Cloudinary Account

Register for a free account [here](https://cloudinary.com/users/register/free). In `server.js`, replace the placeholder strings in lines 24-26 using your credentials found on your Cloudinary dashboard.

## Development

During development, run the following commands to build your React app and start the Express server.  You should re-run these commands for your app to reflect any changes in the code. Make sure mongo is still running on a separate terminal.

```
# build the React app
cd client
npm run build

# go back to the root directory
cd ..

# run the server
node server.js
```

Alternatively, you can run `npm run build-run` in the root directory which runs a script to execute all the above commands. This is a shortcut command defined in [package.json](package.json).
