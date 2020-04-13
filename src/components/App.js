import React, { Component } from 'react';
import blogs from '../data/data';
import Blogs from './Blogs';
import Search from './Search';
import CreateBlog from './CreateBlog';
import './App.css';

// let searchIt = (term) => (item) =>
//   item.subject.toLowerCase().includes(term.toLowerCase());

class App extends Component {
  constructor() {
    super();
    this.state = {
      blogs,
      searchTerm: '',
    };
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id) {
    const updatedBlogs = this.state.blogs.filter(
      (item) => item.objectId !== id
    );
    this.setState({ blogs: updatedBlogs });
    console.log(`Delete item with id: `, id);
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      console.log(this.state.searchTerm);
    });
  };

  handleCreateBlogSubmit = (event, blog) => {
    event.preventDefault();
    let updatedBlogs = [blog, ...this.state.blogs];
    this.setState(
      {
        blogs: updatedBlogs,
      },
      () => {
        console.log(this.state.blogs);
      }
    );
  };

  render() {
    return (
      <div
        style={{
          marginTop: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Search
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        />
        <CreateBlog handleCreateBlogSubmit={this.handleCreateBlogSubmit} />
        <Blogs
          blogs={this.state.blogs}
          searchTerm={this.state.searchTerm}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
