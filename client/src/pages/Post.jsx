import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Menu from "../components/Manu";
import { AuthContext } from "../context/authContext";

const Post = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/post/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          <img src={post?.userImg} alt="" />
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{getText(post.desc)}</p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Post;
