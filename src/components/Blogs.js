import React from 'react';
import BlogItem from './BlogItem';
import { searchIt } from '../services/search';

const Blogs = (props) => {
  return (
    <div>
      {props.blogs.filter(searchIt(props.searchTerm)).map((blog, idx) => {
        return (
          <BlogItem onDelete={props.onDelete} blog={blog} />
          // <div
          //   className="ui card"
          //   key={blog.objectId}
          //   style={{ width: '75%', padding: '20px' }}
          // >
          //   <div className="content">
          //     <div className="header">{blog.title}</div>
          //     <br />
          //     <div className="meta">Author: {blog.author}</div>
          //     <br />
          //     <div className="meta">Subject: {blog.subject}</div>
          //     <hr />
          //     <div className="description">{blog.article}</div>
          //   </div>
          //   <button
          //     className="ui primary button"
          //     style={{ margin: '10px 15px' }}
          //     onClick={() => {
          //       return props.onDelete(blog.objectId);
          //     }}
          //   >
          //     Delete
          //   </button>
          // </div>
        );
      })}
    </div>
  );
};

export default Blogs;
