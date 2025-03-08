import capooGif from "../asset/images/capoo-gif.gif";
import '../asset/styles/button/game1.scss'
import Image from "next/image";

const YesPage: React.FC = () => {
  return (
    <div className="flex text-center justify-center items-center">
      <h1>Anh đã chờ đợi từ rất lâu rồi... Anh ấy vẫn đang đợi bạn đó!! ❤️</h1>
      <div className="gif_container">
        <Image src={capooGif} alt="Cute GIF" width={100} height={100} />
      </div>
    </div>
  );
};

export default YesPage;
