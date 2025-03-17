import React from 'react';
import './GroupPostTile.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

const GroupPostTile = ({ post, onExpand }) => {
  return (
    <Card className="post_tile">
      <div className="post_tile-header">
        <div className="post_tile-thumbnail">{post.Media}</div>
        <div className="post_tile-title">
          <h3>{post.Title}</h3>
        </div>
      </div>
      <div className="post_tile-body">
        <div className="post_tile-metrics">
          <span className="post_tile-rating">+{post.Rating}</span>
        </div>
        <Button onClick={onExpand} className="post_tile-button">
          Expand
        </Button>
      </div>
    </Card>
  );
};

export default GroupPostTile;
