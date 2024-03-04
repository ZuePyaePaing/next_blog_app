import Image from "next/image";

const Card = () => {
  return (
    <div className=" flex md:flex-row flex-col items-center gap-4 ">
      <div className="md:w-1/3 w-full">
        <Image
          src={"/p1.jpg"}
          width={350}
          height={450}
          alt="photo"
          layout="responsive"
        />
      </div>
      <div className=" md:w-2/3 w-full">
        <p className=" font-bold text-sm dark:text-[#ccc9c9] text-primary">
          4.03.2024 - <span className=" text-red-600">CULTURER</span>
        </p>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p className=" dark:text-[#ccc9c9] text-primary">
          Lorem ipsum, dolor sit amet consectetur apdipisicing elit. Sint, in
          non cupiditate laudantium accusantium illo maiores accusamus natus
          suscipit quibusdam?
        </p>
        <button className=" btn">Read More</button>
      </div>
    </div>
  );
};

export default Card;
