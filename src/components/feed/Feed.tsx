"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { CirclePlus } from "lucide-react";
import { Input } from "../ui/input";

const Feed = () => {
  const [showPostDialog, setShowPostDialog] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    imageURL: "",
  });
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between border-b pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Explore Feed
          </h1>
          <div className="flex items-center ">
            <Button className="flex h-11 items-center justify-center px-5">
              Add New Post
            </Button>
          </div>
        </div>
      </div>
      <Dialog
        open={showPostDialog}
        onOpenChange={() => {
          setShowPostDialog(false);
        }}
      >
        <DialogContent className="h-[540px]">
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
            className="border-none outline-none focus-visible:ring-offset-0 h-[200px] text-[25px]"
          />
          <div className="flex gap-5 items-center justify-between">
            <Label htmlFor="imageURL">
              <CirclePlus />
              <Input className="hidden" id="imageURL" type="file" />
            </Label>
            <Button>Post</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Feed;
