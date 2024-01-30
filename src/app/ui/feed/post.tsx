// Post.tsx
import React from "react";
import { getRandomUsers } from "@/app/actions/getRandomUsers";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

import { TextField, InputAdornment } from "@mui/material";
interface PostSchema {
  id: string;
  user: string;
  caption: string;
  image: string;
  likes: number;
}
interface User {
  name: string;
  profileImage: string;
  job: string;
  email: string;
}


export default async function Post({ post, postUser }: { post: PostSchema; postUser: User }) {
  function handlePostComment() {
    console.log("Commenting");
  }
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex gap-2 items-center p-2">
        <Image
          src={postUser.profileImage}
          width={35}
          height={35}
          alt={postUser.name}
          className="rounded-full object-cover filter hover:brightness-110 transition duration-200 ease-out border-2 border-red-500 p-[1px]"
          loading="lazy"
          placeholder="blur"
          blurDataURL={"/icons/rolling.svg"}
        />
        <p className="font-bold"> {postUser.name}</p>
        <div className="flex-grow" />
        <MoreHorizIcon />
      </div>
      {/* Post Image */}
      <img src={post.image} alt="" className="object-cover w-full" />
      {/* Post Actions */}
      <div className="flex items-center w-[100%] p-1 gap-1">
        <FavoriteBorderIcon className="btn" />
        <ChatBubbleOutlineIcon className="btn" />
        <div className="flex-grow" />
        <BookmarkBorderIcon className="btn" />
      </div>
      {/* Post Caption */}

      <p className="truncate px-2">
        <span className="font-bold mr-2"> {postUser.name}</span> {post.caption}
      </p>

      {/* Post Comments */}
      {/* Post Input */}
      <TextField
        id="outlined-multiline-static"
        multiline
        placeholder="Add a comment..."
        classes={{ root: "w-full p-2" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SentimentSatisfiedIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <button className="text-blue-400 font-bold">Post</button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
