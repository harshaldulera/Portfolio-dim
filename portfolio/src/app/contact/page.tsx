"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <div className="w-full flex justify-center items-center my-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="w-full space-y-8 bg-transparent border-gray-600">
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl font-bold text-white">
              Contact me
            </CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <Label className="text-white" htmlFor="name">Name</Label>
              <Input
                id="name"
                className="bg-transparent text-white border-gray-600"
                placeholder="Enter your name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <Label className="text-white" htmlFor="email">Email</Label>
              <Input
                id="email"
                className="bg-transparent text-white border-gray-600"
                placeholder="Enter your email"
                type="email"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-2"
            >
              <Label className="text-white" htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                className="bg-transparent text-white border-gray-600"
                placeholder="Enter the subject"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-2"
            >
              <Label className="text-white" htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[100px] bg-transparent text-white border-gray-600"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button className="hover:bg-white hover:text-black">
                Send message
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
