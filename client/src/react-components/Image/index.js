import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { deleteImage } from "../../actions/image";

import "./styles.css";

class Image extends React.Component {
  render() {
    const { image, dashboard, imageList } = this.props;

    return (
      <Card>
        <CardActionArea>

          <CardMedia
            image={image.image_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Uploaded on:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {image.created_at}
            </Typography>
          </CardContent>

        </CardActionArea>

        <CardActions>

          <Button onClick={() => deleteImage(image.image_id, dashboard, imageList)} size="small" color="primary">
            Remove
          </Button>

        </CardActions>
      </Card>
    );
  }
}

export default Image;
