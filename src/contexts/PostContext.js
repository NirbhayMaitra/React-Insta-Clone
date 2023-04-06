import React, { useContext, useState, useEffect, createContext} from "react";
import { getAllPost } from "../services/http-services";

export const PostList = createContext();
export default function PostContext({children}){

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        // debugger
        getAllPost().then(response =>{
            setPosts(response.result)
            console.log(response.result);
        })
    }, [])

    return <PostList.Provider value={{
        posts: posts,
        addPosts: (post) =>{
            const latestPost = [post, ...posts]
            setPosts(latestPost)
        }
    }}>
        {children}
    </PostList.Provider>

}