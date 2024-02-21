import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Manu"

const Post = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://media.licdn.com/dms/image/D4D35AQH-T2zsaN0mNQ/profile-framedphoto-shrink_200_200/0/1706704277316?e=1709146800&v=beta&t=puz9CPVu-LfCJHf9S9EnnTWT61zyvAa0VSOpFW3goxU"
            alt=""
          />
          <div className="info">
            <span>elsayed</span>
            <p>Posted 'moment(post.date).fromNow()'</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>"post.title"</h1>
        <p
        // dangerouslySetInnerHTML={{
        //   __html: DOMPurify.sanitize(post.desc),
        // }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi
          similique eaque expedita in vel quis corrupti, dolores nostrum officia
          ad doloremque nesciunt consequuntur perferendis, distinctio ipsum
          ducimus impedit amet. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Iste quasi similique eaque expedita in vel quis
          corrupti, dolores nostrum officia ad doloremque nesciunt consequuntur
          perferendis, distinctio ipsum ducimus impedit amet. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Iste quasi similique eaque
          expedita in vel quis corrupti, dolores nostrum officia ad doloremque
          nesciunt consequuntur perferendis, distinctio ipsum ducimus impedit
          amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          quasi similique eaque expedita in vel quis corrupti, dolores nostrum
          officia ad doloremque nesciunt consequuntur perferendis, distinctio
          ipsum ducimus impedit amet.
        </p>
      </div>
      <Menu  />
    </div>
  );
};

export default Post;
