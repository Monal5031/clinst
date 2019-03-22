import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    render() {
        const postList = this.props.posts.length ? (
            this.props.posts.map(
                post => <Post username={post.username} avatar={post.avatar} image={post.image} caption={post.caption} key={post.id}/>
            )
        ) : (
            <p>No posts to show</p>
        );

        return (
            <div className="posts">
                { postList }
            </div>
        );
    }
}

export default Posts;