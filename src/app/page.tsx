"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import iconGame from "./asset/images/ghost.png";
import iconBoy from "./asset/images/icon-boy.png";
import iconGirl from "./asset/images/icon-girl.png";
import loopyIcon from "./asset/images/loopy.jpg";
import socolaIcon from "./asset/images/love-8258_256.gif";
import vitBackV2 from "./asset/images/vit-b-2.jpeg";
import "./asset/styles/button/button.scss";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure component is mounted before running window-dependent logic
    setTimeout(() => setFadeIn(true), 500);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      if (typeof window === "undefined") return; // Ensure this runs only on the client

      // Create a heart element
      const heart = document.createElement("div");
      heart.classList.add("heart-thu-khoa-ly");

      // Randomly position the heart
      const size = Math.random() * 5 + 30; // Random size between 30px and 80px
      const xPos = Math.random() * window.innerWidth; // Random x position
      const yPos = Math.random() * window.innerHeight; // Random y position

      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.left = `${xPos}px`;
      heart.style.top = `${yPos}px`;

      // Add the heart to the DOM
      document.body.appendChild(heart);

      // Remove heart after animation ends
      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    }, 1000); // Generate a heart every 1 second

    return () => clearInterval(interval);
  }, [isClient]);

  const handleNavigation = (path: string) => {
    if (isClient) {
      window.location.href = path;
    }
  };

  return (
    <>
      <header className="relative bg-gradient-to-r  h-[20vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url(/path/to/your/background-image.jpg)" }}
        ></div>

        <div className="z-10 space-y-4 flex items-center gap-x-2 mt-5">
          <div className="mt-40">
            <h1
              className={`text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text ${
                fadeIn
                  ? "animate__animated animate__fadeIn animate__delay-1s"
                  : ""
              }`}
            >
              My Love Days
            </h1>
            <div className="flex items-center gap-x-9 mt-2">
              <div className="m-auto">
                <Image src={iconBoy} alt="" />
                <p className="text-2xl font-medium text-transparent bg-clip-text mt-2">
                  Thắng Nê
                </p>
              </div>
              <div>
                <p className="text-[80px] font-semibold text-transparent bg-clip-text mt-4">
                  1096
                </p>
                <p className="text-2xl font-medium text-transparent bg-clip-text">
                  Ngày
                </p>
              </div>
              <div className="m-auto">
                <Image src={iconGirl} alt="" />
                <p className="text-2xl font-medium text-transparent bg-clip-text mt-2">
                  Hương Nê
                </p>
              </div>
            </div>
            <p className="text-xl font-medium text-transparent bg-clip-text mt-1">
              Từ 08/03/2022
            </p>
          </div>

          <Image src={socolaIcon} alt="" width={40} height={40} />
        </div>
      </header>

      <Image
        src={vitBackV2}
        alt="Rotating Image"
        className="run-horizontal-path"
      />
      <Image
        src={loopyIcon}
        alt="Rotating Image"
        className="run-horizontal-right"
      />

      <div className="flex justify-center flex-col w-full items-center gap-y-4 mt-36">
        <Button
          className="px-14 py-5 bg-[#06B7DB] text-white font-semibold text-md rounded-full shadow-lg transform transition duration-300 ease-in-out hover:bg-[#09AACD] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 max-w-[250px]"
          onClick={() => handleNavigation("/game1")}
        >
          <span>Chơi trò chơi</span>
          <Image src={iconGame} alt="" width={16} height={16} />
        </Button>
        <Button
          className="px-14 py-5 bg-pink-500 text-white font-semibold text-md rounded-full shadow-lg transform transition duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 max-w-[250px]"
          onClick={() => handleNavigation("/rare_data")}
        >
          <span>Dữ liệu quý</span>
          <span>💖</span>
        </Button>
      </div>
    </>
  );
}
