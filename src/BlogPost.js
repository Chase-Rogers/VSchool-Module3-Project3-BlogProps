import React from "react";

const BlogPost = (props) => {
    console.log(props);
    return (
        <div className="blog-post">
            <h3>{props.title}</h3>
            <h4>{props.subTitle}</h4>
            <p>
                Posted by <span>{props.author}</span> on {props.date}
            </p>
        </div>
    );
};

export default BlogPost;
