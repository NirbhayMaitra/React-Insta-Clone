import { React, useContext, useState } from "react";
import "./List.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../../images/icon (1).svg";
import Camera from "../../../../images/camera.png";
import Heart from "../../../../images/heart.png";
import Share from "../../../../images/share.png";
// import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import Button from 'react-bootstrap/Button';
import Unsplash from "../../../../images/unsplash.jpg";

import Header from "../Header/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PostList } from "../../../../contexts/PostContext";

export default function AllPost() {
  const {posts} = useContext(PostList);
  return (
    <>
      <Header />

      <div className="list-post-container">
        {posts.length==0?<h3>No posts Available...</h3> : posts.map(post=>{
          return <div key={post._id}>
        <div className="row m-3" >
          {/* debugger; */}
          <div className="col-12" >

            <Card className="post-card">
              <Card.Header className="card-header">
                <div>
                  <h4>{post.name}</h4>
                  <label>{post.location}</label>
                </div>
                <div>
                  <span className="dot">&#9679;&#9679;&#9679;</span>
                </div>
              </Card.Header>
              <Card.Body className="card-body">
                <img src={`https://insta-clone-nirbhay.onrender.com/${post.image}`} alt="home_img"/>
                </Card.Body>
                <Card.Footer className="card-footer">
                <div className="wrapper">
                  <div className="col-5">
                    <img src={Heart} alt="heart_icon" />
                    <img src={Share} alt="share_icon" />
                    <p>{post.likes}</p>
                  </div>
                  <div className="col-5">
                    <span className="dot">{post.date}</span>
                  </div>
                  </div>

                  <div>
                    <h3 style={{textAlign: "center"}}>{post.description}</h3>
                  </div>
                </Card.Footer>
              
            </Card>
          </div>
        </div>
        </div>
        })}
      </div>
    </>
  );
}
