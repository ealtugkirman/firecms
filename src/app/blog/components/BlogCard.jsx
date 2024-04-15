import React from "react";
import Image from "next/image";
import PostImage from "../../../../public/services/1.jpg";
import authorImage from "../../../../public/services/1.jpg";

const BlogCard = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2  grid-rows-2 md:grid-rows-1">
      <div>
        <Image width={500} height={500} src={PostImage} />
      </div>
      <div className="grid-cols-1">
        <h1>Blog Title</h1>
        <p>Blog Desc</p>
        <div>
          <Image width={50} height={50} src={authorImage} />
          <p>Author Name</p>
        </div>
        <p>Time Stampt</p>
      </div>
    </div>
  );
};

export default BlogCard;
