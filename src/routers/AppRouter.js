import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from '../components/LandingComponent/Landing'
import NewPost from "../components/LandingComponent/Post/New/NewPost";
import AllPost from "../components/LandingComponent/Post/List/List";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="post/new" element={<NewPost />} />
        <Route path="post/All" element={<AllPost />} />
        {/* <Route path="post" element={<PostView />}>
          
          <Route path="all" element={<LandingComponent />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
