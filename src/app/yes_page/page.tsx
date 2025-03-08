import capooGif from "../asset/images/capoo-gif.gif";
import '../asset/styles/button/game1.scss'
import Image from "next/image";

const YesPage: React.FC = () => {
  return (
    <div className="flex text-center justify-center items-center">
      <h1>Anh ấy đã thật sự biết hối lỗi và hiểu chuyện hơn rồi... Bạn hãy cho anh ấy một cơ hội!! ❤️</h1>
      <div className="gif_container">
        <Image src={capooGif} alt="Cute GIF" width={100} height={100} />
      </div>
    </div>
  );
};

export default YesPage;
