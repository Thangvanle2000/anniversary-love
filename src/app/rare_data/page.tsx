"use client";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import "../asset/styles/button/button.scss";
import "../asset/styles/button/game1.scss";

import { Accordion, AccordionItem } from "@heroui/react";

const list = [
  {
    title: "Orange",
    img: "/img-rabbit.jpg",
    price: "Cute",
  },
  {
    title: "Tangerine",
    img: "/sen-2.jpg",
    price: "Xing",
  },
  {
    title: "Tangerine",
    img: "/sen-1.jpg",
    price: "Xing hơn",
  },
  {
    title: "Raspberry",
    img: "/sen-3.jpg",
    price: "Xing hơn nữa",
  },
  {
    title: "Lemon",
    img: "/sen-4.jpg",
    price: "Xing đẹp tuỵt zời",
  },
];
const list1 = [
  {
    title: "Orange",
    img: "/loopy.jpg",
    price: "Cute",
  },
  {
    title: "Tangerine",
    img: "/moment-4.JPG",
    price: "Xing",
  },
  {
    title: "Tangerine",
    img: "/moment-3.JPG",
    price: "Xing hơn",
  },
  {
    title: "Tangerine",
    img: "/moment-1.JPG",
    price: "Xing hơn nữa",
  },
  {
    title: "Raspberry",
    img: "/moment-2.JPG",
    price: "Xing đẹp tuỵt zời",
  },
];
const list2 = [
  {
    title: "Orange",
    img: "/birthday.jpg",
    price: "Cute",
  },
  {
    title: "Tangerine",
    img: "/birthday-5.jpg",
    price: "Bánh",
  },
  {
    title: "Tangerine",
    img: "/birthday-1.jpg",
    price: "Xing",
  },
  {
    title: "Tangerine",
    img: "/birthday-2.png",
    price: "Xing hơn",
  },
  {
    title: "Raspberry",
    img: "/birthday-4.jpg",
    price: "Xing đẹp tuỵt zời",
  },
];
const list3 = [
  {
    title: "Orange",
    img: "/food.jpg",
    price: "Cute",
  },
  {
    title: "Tangerine",
    img: "/food-4.png",
    price: "Ngon",
  },
  {
    title: "Tangerine",
    img: "/food-5.png",
    price: "Ngon hơn",
  },
  {
    title: "Tangerine",
    img: "/food-1.png",
    price: "Ngon tuỵt",
  },
  {
    title: "Raspberry",
    img: "/food-3.png",
    price: "Ngon tuỵt zời",
  },
];
const RarePage: React.FC = () => {
  return (
    <div className="">
      <div className="question-block flex-col flex items-center w-full justify-center mt-5">
        <p className="text-4xl font-medium text-transparent bg-clip-text">
          Q&A
        </p>
        <div className="w-[30%]">
          <Accordion defaultExpandedKeys={["theme"]}>
            <AccordionItem
              key="theme"
              aria-label="Theme"
              indicator={
                <Image src={"/icon-first.png"} alt="" width={30} height={30} />
              }
              title="Khoảnh khắc đầu tiên gặp nhau"
            >
              {`
                  Anh nhớ cuộc gặp mặt đầu tiên là tầm tháng 2 thì phải... Anh đi ra chỗ hẹn bị công an tóm :)) Nhưng anh vẫn thấy vui vì đã gặp đúng người`}
            </AccordionItem>
            <AccordionItem
              key="impressive"
              aria-label="Theme"
              indicator={
                <Image
                  src="/icon-impressed.png"
                  alt=""
                  width={30}
                  height={30}
                />
              }
              title="Ấn tượng ban đầu"
            >
              Chắc là ấn tượng về sự xinh đẹp, rất chăm nấu cơm và lúc nào cũng
              buồn ngủ của em.
            </AccordionItem>
            <AccordionItem
              key="memory"
              aria-label="memory"
              indicator={
                <Image src="/icon-memories.png" alt="" width={30} height={30} />
              }
              title="Kỷ niệm đáng nhớ"
            >
              Chắc là kỉ niệm đẩy xe cho em ra chỗ sửa... Mệt xỉu😆 Tự nhiên nhớ
              lại lúc quên ko đưa em qua cầu mà tội lỗi quá!
            </AccordionItem>
            <AccordionItem
              key="proud"
              aria-label="proud"
              indicator={
                <Image src="/icon-proud.png" alt="" width={30} height={30} />
              }
              title="Điều tự hào"
            >
              Đương nhiên là tự hào Hương Nê đã có bước chuyển mình thành
              công... Làm cô gõ đầu trẻ. Anh biết em đã cố gắng rất nhìuu :3
            </AccordionItem>
            <AccordionItem
              key="shy"
              aria-label="Anchor"
              indicator={
                <Image src={"/icon-shy.png"} alt="" width={30} height={30} />
              }
              title="Lần ngại ngùng nhất"
            >
              {`Chắc là hôm trước qua xem em đánh bi a... Thật sự lúc ấy anh tò mò vì em có chơi bi a bao giờ đâu :> Không biết em đánh thế nào. Và đương nhiên anh không biết chơi :)) Ngại thật sự đấy
`}
            </AccordionItem>
            <AccordionItem
              key="changed"
              aria-label="Sun"
              indicator={
                <Image src="/icon-change.png" alt="" width={30} height={30} />
              }
              title="Sự thay đổi của bản thân"
            >
              Khoảng thời gian vừa rồi anh cũng nhận ra những cái sai của mình
              và thay đổi, sống tử tế hơn :3
            </AccordionItem>
            <AccordionItem
              key="emotion"
              aria-label="Sun"
              indicator={
                <Image src="/icon-emotion.png" alt="" width={30} height={30} />
              }
              title="Cảm xúc hiện tại"
            >
              Kiểu anh xem phim dạo này chả hiểu sao toàn là kịch bản quay lại
              với người cũ ấy, gì mà thước phim lãng mạn có choi gu gì em bảo
              này, our belove summer, plankton... Chắc thông điệp từ vũ trụ :3
            </AccordionItem>
            <AccordionItem
              key="talk"
              aria-label="Sun"
              indicator={
                <Image src="/icon-talk.png" alt="" width={30} height={30} />
              }
              title="Muốn nói"
            >
              Thực sự là anh muốn xin lỗi vì những điều ngu ngốc trước kia đã
              làm, và mong có thể sửa lại những sai lầm trong quá khứ... Mong em
              cho anh cơ hội sửa saii
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="text-center">
        <p className="text-4xl font-medium text-transparent bg-clip-text m-auto w-full mt-4">
          Người đẹp bên đầm sen
        </p>
        <b className="font-medium text-base bg-clip-text text-transparent mt-4">
          (Hôm ấy còn tặng anh hoa súng nữa :3)
        </b>
      </div>

      <div className="flex items-center justify-center gap-x-5 mt-8 m-auto">
        {list.map((item, index: number) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                alt="HeroUI Fruit Image with Zoom"
                src={item?.img}
                width={120}
                className="object-fill"
              />
            </CardBody>
            <CardFooter className="text-small justify-center">
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-5">
        <p className="text-4xl font-medium text-transparent bg-clip-text m-auto w-full mt-4">
          Vi vu cùng Hương Nê
        </p>
        <b className="font-medium text-base bg-clip-text text-transparent mt-4">
          (Hương Nê đi mảnh và có tôi :3)
        </b>
      </div>
      <div className="flex items-center justify-center gap-x-5 mt-8 m-auto">
        {list1.map((item, index: number) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                alt="HeroUI Fruit Image with Zoom"
                src={item?.img}
                width={120}
                className="object-fill"
              />
            </CardBody>
            <CardFooter className="text-small justify-center">
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-5">
        <p className="text-4xl font-medium text-transparent bg-clip-text m-auto w-full mt-4">
          Sinh nhậtttt
        </p>
        <b className="font-medium text-base bg-clip-text text-transparent mt-4">
          (Cô ấy toàn chê tôi chụp xấu thuii :3)
        </b>
      </div>
      <div className="flex items-center justify-center gap-x-5 mt-8 m-auto">
        {list2.map((item, index: number) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                alt="HeroUI Fruit Image with Zoom"
                src={item?.img}
                width={120}
                className="object-fill"
              />
            </CardBody>
            <CardFooter className="text-small justify-center">
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-5">
        <p className="text-4xl font-medium text-transparent bg-clip-text m-auto w-full mt-4">
          Ăn cả thế giới
        </p>
        <b className="font-medium text-base bg-clip-text text-transparent mt-4">
          (Cô ấy ăn ít như mèo ý :3)
        </b>
      </div>
      <div className="flex items-center justify-center gap-x-5 mt-8 m-auto">
        {list3.map((item, index: number) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                alt="HeroUI Fruit Image with Zoom"
                src={item?.img}
                width={120}
                className="object-fill"
              />
            </CardBody>
            <CardFooter className="text-small justify-center">
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RarePage;
