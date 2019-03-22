import React from "react";

import '../styles/post.css';

const Post = ({username, avatar, image, caption}) => {
    // const username = this.props.username;
    // const avatar = this.props.avatar;
    // const image = this.props.image;
    // const caption = this.props.caption;
    return (
        <article className="post">
            <header>
                <div className="post-user">
                <div className="post-user-avatar">
                    <img src={ avatar } alt={ username } />
                </div>
                <div className="post-user-nickname">
                    <span>{ username }</span>
                </div>
                </div>
            </header>
            <div className="post-image">
                <div className="post-image-bg">
                <img alt={ caption } src={ image } />
                </div>
            </div>
            <div className="post-caption">
                <strong>{ username }</strong> { caption }
            </div>
        </article>
    );
}

export default Post;