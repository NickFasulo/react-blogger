import React from 'react';
import Button from './Button';

const BlogItem = ({
  onDelete,
  blog: { title, author, subject, article, objectId },
}) => {
  return (
    <div>
      <div className="ui card" style={{ width: '75%', padding: '20px' }}>
        <div className="content">
          <div className="header">{title}</div>
          <br />
          <div className="meta" style={{ fontWeight: 'bold', color: '3b3b3b' }}>
            Author: {author}
          </div>
          <br />
          <div className="meta" style={{ fontWeight: 'bold', color: '3b3b3b' }}>
            Subject: {subject}
          </div>
          <hr />
          <div className="description">{article}</div>
        </div>
        <Button
          className="ui primary button"
          style={{ margin: '10px 15px' }}
          onClick={() => {
            return console.log(`BlogID: ${objectId}`);;
          }}
        >
          Update
        </Button>
        <Button
          className="ui primary button"
          style={{ margin: '10px 15px' }}
          onClick={() => {
            return onDelete(objectId);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BlogItem;
