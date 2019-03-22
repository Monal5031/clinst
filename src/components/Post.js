import React from "react";

import '../styles/post.css';

const Post = ({username, avatar, imageURL, caption, likes}) => {
    // const username = this.props.username;
    // const avatar = this.props.avatar;
    // const image = this.props.image;
    // const caption = this.props.caption;
    
    return (
        <article className="post">
            <header>
                <div className="post-user">
                <div className="post-user-avatar">
                    <img src={ avatar } alt="I" />
                </div>
                <div className="post-user-nickname">
                    <span>{ username }</span>
                </div>
                </div>
            </header>
            <div className="post-image">
                <div className="post-image-bg">
                <img alt={ caption } src={ imageURL } />
                </div>
            </div>
            <div className="post-caption">
                <strong>Likes</strong> { likes }
            </div>
        </article>
    );
}

export default Post;