"use client";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import "../asset/styles/button/game1.scss";

const Valentine: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [buttonSize, setButtonSize] = useState<number>(40);
  const [isClient, setIsClient] = useState<boolean>(false); // Prevents SSR issues
  const messages: string[] = [
    "No",
    "Em chắc chứ?",
    "Thui mà em ấu trĩ quá đấy??",
    "Em nỡ vậy ư?",
    "Thui mà Hương Nê xinh đẹp tuỵt zời!!",
    "Dạo này hở tí là block anh...",
    "Thui nào chọn có đi ❤️",
  ];

  const handleNoClick = () => {
    setIsButtonClicked(true);
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    setButtonSize((prevSize) => prevSize + 5);
  };

  const handleYesClick = () => {
    if (isClient) {
      window.location.href = "/yes_page";
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const checkForUpdates = async () => {
      const currentVersion = "1.0";
      const versionUrl =
        "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

      try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
          console.warn("Could not fetch version information.");
          return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
          alert(updateMessage);
        } else {
          console.log("You are using the latest version.");
        }
      } catch (error) {
        console.error("Error checking for updates:", error);
      }
    };

    checkForUpdates();
  }, [isClient]);

  return (
    <div className="container flex justify-center items-center flex-col">
      <h1 className="font-semibold">Hương Nê còn tình cảm với Nê Thắng không?</h1>
      <div className="buttons mt-4">
        <Button
          className="yes-button font-medium bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          onClick={handleYesClick}
          radius="full"
        >
          Yes
        </Button>
        <Button
          className="no-button font-medium "
          onClick={handleNoClick}
          color="danger"
          style={{
            height: `${buttonSize}px`, // Dynamically set the height
          }}
        >
          {isButtonClicked ? messages[messageIndex] : "No"}
        </Button>
      </div>
      {/* <div className="gif_container">
        <Image src={capooGif} alt="Cute GIF" width={100} height={100} />
      </div> */}
    </div>
  );
};

export default Valentine;
