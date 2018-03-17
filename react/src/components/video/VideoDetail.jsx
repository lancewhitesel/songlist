import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  details: {
    marginTop: 10,
    padding: 10,
    border: ['3,', 'solid', '#ddd'],
    borderRadius: 4,
  }
});

const VideoDetail = ({ song, classes }) => {
  const { snippet: { title, description }, id: { videoId } } = song;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={url}
          frameBorder="0"
          className="embed-responsive-item"
          title={title}
        />
      </div>
      <div className={classes.details}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  song: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoDetail);
