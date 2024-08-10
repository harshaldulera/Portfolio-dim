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
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function ContactMe() {
  const { toast } = useToast();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e :any) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      return toast({
        title: "Error",
        description: "Please fill out all the fields.",
        className: "bg-red-500 text-white border-none",
      });
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "I'll get back to you as soon as possible.",
          className: "bg-black text-white border-none",
        });
        router.push("/");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred, please try again later.",
        className: "bg-red-500 text-white border-none",
      });
    }
  };

  return (
    <div className="w-full flex justify-center items-center my-10 lg:p-0 p-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <form onSubmit={handleSubmit}>
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
                <Label className="text-white" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  className="bg-transparent text-white border-gray-600"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <Label className="text-white" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  className="bg-transparent text-white border-gray-600"
                  placeholder="Enter your email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                <Label className="text-white" htmlFor="subject">
                  Subject
                </Label>
                <Input
                  id="subject"
                  className="bg-transparent text-white border-gray-600"
                  placeholder="Enter the subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-2"
              >
                <Label className="text-white" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[100px] bg-transparent text-white border-gray-600"
                  value={form.message}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  className="hover:bg-white hover:text-black"
                  type="submit"
                >
                  Send message
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </form>
      </motion.div>
    </div>
  );
}
