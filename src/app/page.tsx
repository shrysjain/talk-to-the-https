"use client";

import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import Head from "next/head";

const Home = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      window.location.href = `/${decodeURIComponent(url)}`;
    }
  };

  return (
    <>
      <Head>
        <title>Talk to the HTTPS</title>
        <meta
          name="description"
          content="Transform articles into interactive chat experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-white">
        <div className="p-10 bg-zinc-800 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Talk to the HTTPS 🤖
          </h1>
          <p className="mb-4 text-center">
            Enter a URL to transform any website into an interactive chatbot
            experience.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Enter URL"
              aria-label="Website URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              fullWidth
              color="primary"
              size="lg"
              className="bg-zinc-800 text-white"
            />
            <Button type="submit" color="primary" size="lg" className="w-full">
              Start Chatting
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
