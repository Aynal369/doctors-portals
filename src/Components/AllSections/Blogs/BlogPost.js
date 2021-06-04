import React from "react";

const BlogPost = ({ blog }) => {
  return (
    <div className="col-md-4">
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div className="d-flex  align-items-center">
          <img className="mx-3" src={blog.authorImg} alt="" width="60" />
          <div>
            <h6>{blog.author}</h6>
            <p className="m-0">{blog.date}</p>
          </div>
        </div>
        <div className="card-body">
          <h4 className="text-lowercase">{blog.title}</h4>
          <p className="card-text mt-4">{blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
