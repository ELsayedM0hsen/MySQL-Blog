import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Manu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/post/?cat=${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts?.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <Link className="link" to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
          </Link>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Manu;
