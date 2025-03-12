"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { desVariants, tagVariants, titleVariants } from "@/utils/animations";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="mt-20 w-full">
      <div className=" lg:grid w-full lg:grid-cols-5 py-14">
        <div className="grid gap-4 pb-4 text-left col-span-3 lg:pb-0 lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
            <div className="flex flex-col gap-0.5">
              <Link href="/" className="py-1 hover:underline">
                Home
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Membership
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Feed
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Jobs
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Account
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Development
            </h2>
            <div className="flex flex-col gap-0.5">
              <Link href="/" className="py-1 hover:underline">
                Documentation
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Reference
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Changelog
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Status
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
            <div className="flex flex-col gap-0.5 ">
              <Link href="/" className="py-1 hover:underline">
                Instagram
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Twitter
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Linkedin
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Fecebook
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="col-span-2"
        >
          <p className="pb-6 text-xl font-semibold">Stay Updated</p>
          <div className="relative   lg:max-w-sm">
            <Input
              type="name"
              id="first name"
              placeholder="Email Address"
              className="h-14"
            />
            <Button className="absolute flex items-center justify-center text-white rounded-full h-10 px-4 text-sm top-2 right-2 ">
              Subscribe
            </Button>
          </div>
          <p className="pt-4 leading-relaxed text-gray-500">
            By subscribing to our newsletter, you agree to receive emails from
            us. Your personal data will be stored and processed in accordance
            with our Privacy Policy and you can unsubscribe at any time.
          </p>
        </motion.div>
      </div>
      {/* Copyright  */}
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="py-10 border-t border-gray-200  w-full flex items-center "
      >
        <div className=" w-full text-gray-900 text-center lg:justify-between lg:flex">
          <div className="pb-4 lg:pb-0">
            <p>&copy; 2025 Job Array. All Rights Reserved</p>
          </div>
          <div className=" flex gap-8">
            <Link className=" hover:underline" href="/">
              Privacy
            </Link>
            <Link className=" hover:underline" href="/">
              Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
