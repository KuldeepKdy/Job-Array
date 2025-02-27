"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { CirclePlus } from "lucide-react";
import { Input } from "../ui/input";
import { createClient } from "@supabase/supabase-js";

const Feed = () => {
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
      .upload(`/public/${imageData?.name}`, imageData, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log(data, error);
    if (data) handleFetchImagePublicUrl(data);
  }

  useEffect(() => {
    if (imageData) {
      handleUploadImageToSupabase();
    }
  }, [imageData]);

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between border-b pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
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
