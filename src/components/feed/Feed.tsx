"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { CirclePlus, Heart } from "lucide-react";
import { Input } from "../ui/input";
import { createClient } from "@supabase/supabase-js";
import { createFeedPostAction, updatefeedPostAction } from "@/actions";

interface FeedPostProps {
  user: { id: string; name: string; email: string };
  profileInfo: {
    role: string;
    recruiterInfo: { name: string; companyName: string };
    _id: string;
    name: string;
    email: string;
    userId: string;
    candidateInfo: {
      name: string;
      email: string;
      userId: string;
    };
    jobApplications: { jobId: string; status: string }[];
  };
  allFeedPost: {
    userId: string;
    userName: string;
    message: string;
    image: string;
    likes: [
      {
        reactorUserId: string;
        reactorUserName: string;
      }
    ];
  }[];
}
const Feed = ({ user, profileInfo, allFeedPost }: FeedPostProps) => {
  // Supabase connection
  const supabaseUrl = "https://wzapditlogmdsweecqnx.supabase.co";
  const supabaseKey =
    process.env.SUPABASE_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6YXBkaXRsb2dtZHN3ZWVjcW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMjI2MjgsImV4cCI6MjA1NDU5ODYyOH0.aA3AXtW_b6DwmK4UJE8OdVWGRfRx3liUYxYmgbLzpPI";
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [showPostDialog, setShowPostDialog] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    imageURL: "",
  });
  const [imageData, setImageData] = useState<File | null>(null);

  async function handleFileOnChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    event.preventDefault();
    // console.log(event.target.files, "new log");
    if (event.target.files) {
      setImageData(event.target.files[0]);
    }
  }

  async function handleFetchImagePublicUrl(getData: { path: string }) {
    const { data } = supabase.storage
      .from("job-board-public")
      .getPublicUrl(getData?.path);

    console.log(data);
    if (data) {
      setFormData({ ...formData, imageURL: data?.publicUrl });
    }
  }
  async function handleUploadImageToSupabase() {
    if (!imageData) return;
    const { data, error } = await supabase.storage
      .from("job-board-public")
      .upload(`/public/images/${imageData?.name}/${new Date()}`, imageData, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log(data, error);
    if (data) handleFetchImagePublicUrl(data);
  }

  async function handelSavedFeedPost() {
    await createFeedPostAction(
      {
        userId: user?.id,
        userName:
          profileInfo?.candidateInfo?.name || profileInfo?.recruiterInfo?.name,
        message: formData?.message,
        image: formData?.imageURL,
        likes: [],
      },
      "/feed"
    );
    setShowPostDialog(false);
    setFormData({
      message: "",
      imageURL: "",
    });
  }

  async function handleUpdateFeedPostLikes(getCurrentFeedPost: any) {
    const cpyLikesFromCurrentFeedPostItem = [...getCurrentFeedPost?.likes];
    const indexOfCurrentUser = cpyLikesFromCurrentFeedPostItem.findIndex(
      (item) => item.reactorUserId === user?.id
    );
    if (indexOfCurrentUser === -1) {
      cpyLikesFromCurrentFeedPostItem.push({
        reactorUserId: user?.id,
        reactorUserName:
          profileInfo?.candidateInfo?.name || profileInfo?.recruiterInfo?.name,
      });
    } else {
      cpyLikesFromCurrentFeedPostItem.splice(indexOfCurrentUser, 1);
    }

    getCurrentFeedPost.likes = cpyLikesFromCurrentFeedPostItem;
    await updatefeedPostAction(getCurrentFeedPost, "/feed");
  }

  useEffect(() => {
    if (imageData) {
      handleUploadImageToSupabase();
    }
  }, [imageData]);

  console.log(allFeedPost, "allFeedPost");
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between dark:border-white border-b pb-6 pt-24">
          <h1 className="text-4xl font-bold dark:text-white tracking-tight text-gray-900">
            Explore Feed
          </h1>
          <div className="flex items-center ">
            <Button
              onClick={() => setShowPostDialog(true)}
              className="flex h-11 items-center justify-center px-5"
            >
              Add New Post
            </Button>
          </div>
        </div>
        <div className="py-12 w-full flex flex-col">
          <div className=" w-full flex flex-col gap-5 text-gray-700">
            {allFeedPost && allFeedPost.length > 0
              ? allFeedPost.map((feedPostItem, index) => (
                  <div
                    key={index}
                    className="group relative  p-4 md:p-6 flex flex-col shadow-md  hover:-translate-y-1 bg-gray-100 hover:bg-white hover:shadow-lg hover:shadow-gray-600/10 transition-all duration-200 ease-linear gap-2 border border-gray-100  rounded-lg md:flex-row "
                  >
                    <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                      <img
                        src={feedPostItem?.image}
                        alt="Post"
                        className=" aspect-[16/9] object-cover object-top transition duration-500 group-hover:scale-105 "
                      />
                    </div>
                    <div className="sm:p-2 sm:pl-0 sm:w-4/6 ">
                      <span className="mt-4 mb-2 inline-block font-medium text-gray-500 sm:mt-0">
                        {feedPostItem?.userName}
                      </span>
                      <h3 className="mb-4 text-2xl md:text-3xl font-bold text-gray-900 ">
                        {feedPostItem?.message}
                      </h3>
                      <div className="flex gap-2 items-center ">
                        <Heart
                          size={25}
                          fill={
                            feedPostItem?.likes?.length > 0
                              ? "#000000"
                              : "#ffffff"
                          }
                          className="cursor-pointer"
                          onClick={() =>
                            handleUpdateFeedPostLikes(feedPostItem)
                          }
                        />
                        <span className="font-semibold text-xl">
                          {feedPostItem?.likes?.length}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              : "No Post Found"}
          </div>
        </div>
      </div>
      <Dialog
        open={showPostDialog}
        onOpenChange={() => {
          setShowPostDialog(false);
          setFormData({
            message: "",
            imageURL: "",
          });
        }}
      >
        <DialogContent className="h-fit">
          <Textarea
            name="message"
            value={formData?.message}
            onChange={(event) =>
              setFormData({
                ...formData,
                message: event.target.value,
              })
            }
            placeholder="What do you want to talk about?"
            className="border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 h-[200px] !text-2xl placeholder:text-2xl"
          />
          <div className="flex gap-5 items-center justify-between">
            <Label htmlFor="imageURL">
              <CirclePlus />
              <Input
                onChange={handleFileOnChange}
                className="hidden"
                id="imageURL"
                type="file"
              />
            </Label>
            <Button
              onClick={handelSavedFeedPost}
              disabled={formData?.imageURL === "" && formData?.message === ""}
              className="flex w-40 h-11 items-center justify-center px-5 disabled:opacity-60 "
            >
              Post
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Feed;
