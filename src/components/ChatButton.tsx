"use client";

import { useState } from "react";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    console.log("Chat opened");
    // Open your chat component here
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-28 right-10 z-[9999] h-[450px] w-[350px] rounded-xl bg-white shadow-2xl">
          <div className="flex items-center justify-between rounded-t-xl bg-blue-600 p-4 text-white">
            <h2 className="font-semibold">AI Chat</h2>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xl"
            >
              ×
            </button>
          </div>

          <div className="flex h-[390px] items-center justify-center">
            <p className="text-gray-500">How can I help you?</p>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Open chat"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 shadow-2xl transition-transform hover:scale-105"
      >
        {/* Your SVG goes here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M21.7548 5.74252C21.4258 6.51551 21.1989 7.34158 21.0865 8.20406H6.56408V29.0326L7.7003 27.8964H32.8205V18.5678C33.6973 18.34 34.5239 17.9883 35.282 17.5342V30.3579H9.90863L4.10254 36.164V5.74252H21.7548Z"
            fill="#FBFBFB"
          />

          <path
            d="M31.1394 3.44444C31.2887 5.19796 31.7497 6.46368 32.5224 7.32746C33.3107 8.25415 35.1578 8.85488 36.5945 8.90117V10.2986C35.1575 10.3449 33.3105 10.9454 32.5224 11.8723C31.7499 12.7361 31.2887 14.0005 31.1394 15.7537H29.742C29.5927 14.0005 29.1314 12.7361 28.359 11.8723C27.5709 10.9454 25.7238 10.3449 24.2868 10.2986V8.90117C25.7236 8.85488 27.5707 8.25415 28.359 7.32746C29.1317 6.46368 29.5927 5.19796 29.742 3.44444H31.1394Z"
            fill="#FBFBFB"
          />

          <path
            d="M36.5945 5.2922H34.7484V3.44444H36.5945V5.2922Z"
            fill="#FBFBFB"
          />
        </svg>
      </button>
    </>
  );
}
