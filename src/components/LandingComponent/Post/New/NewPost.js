import { React, useContext, useState } from "react";
import "./NewPost.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../../images/icon (1).svg";
import Camera from "../../../../images/camera.png";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { addNewPost } from "../../../../services/http-services";
import { Navigate, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import { PostList } from "../../../../contexts/PostContext";
// import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const listNavigation = useNavigate();
  const { addPost } = useContext(PostList);

  const [formData, setFormData] = useState({
    image: null,
    name: "",
    location: "",
    desciption: "",
  });

  function captureForm(event) {
    // debugger
    event.preventDefault();
    const formValues = new FormData(event.target);
    formValues.append("date", new Date().toDateString());
    formValues.append("likes", 0);
    formValues.append("id", "" + new Date().getTime());

    addNewPost(formValues).then(res => {
      if (res.status === "Success") {
        addPost(res.result);
        setFormData({
          image: null,
          name: "",
          location: "",
          desciption: "",
        });
        listNavigation("../../post/all");
      } else {
        console.log("Failed to Post Data:-");
      }
    });
  }

  return (
    <>
      <Header />

      <div className="new-post-container">
        <Card>
          <Card.Body>
            <Form onSubmit={captureForm}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  name="Image"
                  type="file"
                  required
                  accept="image/*"
                  onChange={(e) => {
                    setFormData((previous) => {
                      return { ...previous, image: e.target.files[0] };
                    });
                  }}
                />
              </Form.Group>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="Author name"
                  name="author"
                  placeholder="Enter name"
                  required
                  // value={formData.name}
                  onChange={(pre) => {
                    return { ...pre, name: pre.target.value };
                  }}
                />
                <Form.Control
                  aria-label="Location"
                  name="location"
                  placeholder="Enter Location"
                  required
                  onChange={(pre) => {
                    return { ...pre, location: pre.target.value };
                  }}
                />
              </InputGroup>
              <Form.Control
                size="lg"
                type="text"
                name="description"
                placeholder="Description"
                onChange={(pre) => {
                  return { ...pre, name: pre.target.value };
                }}
              />
              <div className="btn-container">
                <Button variant="primary" type="submit" className="">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
