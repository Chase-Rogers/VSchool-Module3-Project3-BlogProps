import React from "react";
import posts from "./posts";
import BlogPost from "./BlogPost";

const BlogList = () => {
    const blogComponent = posts.map((post) => (
        <BlogPost
            key={post.id}
            title={post.title}
            subTitle={post.subTitle}
            author={post.author}
            date={post.date}
        />
    ));

    return (
        <div className="blog-list">
            {blogComponent}
            <button>Older Posts</button>
            <hr />
        </div>
    );
};

export default BlogList;
