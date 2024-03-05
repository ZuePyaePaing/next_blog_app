import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" darkmode">
      <div className=" flex items-center container py-5 md:flex-row flex-col-reverse gap-y-5">
        <div className=" md:w-2/3 w-full flex flex-col items-start gap-y-3">
          <div className=" flex  gap-x-3">
            <div className=" relative w-10 h-10 rounded-full overflow-hidden">
              <Image src={"/p1.jpg"} fill alt="account" />
            </div>
            <h2>ZPPblog</h2>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ducimus
            quae optio labore esse sequi perferendis culpa, ullam voluptatum!
            Minus quo reiciendis eos unde rem tenetur qui omnis impedit dicta.
          </p>
          <div className=" flex gap-x-2 items-center ">
            <FaFacebookSquare size={25} color="#1877F2" />
            <FaInstagramSquare size={25} color="#E4405F" />
            <FaYoutubeSquare size={25} color="#FF0000" />
            <FaLinkedin size={25} color="#0077B5" />
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <table className=" w-full flex items-start flex-col">
            <thead className="w-full">
              <tr className=" flex justify-between w-full items-start">
                <th>Links</th>

                <th>Tags</th>

                <th>Social</th>
              </tr>
            </thead>
            <tbody className=" w-full">
              <tr className=" flex justify-between w-full items-start">
                <Link href={"/"}>
                  <td className=" self-start">Homepage</td>
                </Link>
                <Link href={"/"}>
                  <td className=" self-start">Style</td>
                </Link>
                <Link href={"/"}>
                  <td className=" self-start">Facebook</td>
                </Link>
              </tr>
              <tr className=" flex justify-between w-full items-start">
                <Link href={"/"}>
                  <td className=" self-start">Blog</td>
                </Link>
                <Link href={"/"}>
                  <td className=" self-start">Fanshion</td>
                </Link>
                <Link href={"/"}>
                  <td className=" self-start">Instragram</td>
                </Link>
              </tr>
              <tr className=" flex justify-between w-full items-start">
                <Link href={"/"}>
                  <td className=" self-start">About</td>
                </Link>
                <Link href={"/"}>
                  <td className=" self-start">Coding</td>
                </Link>
                <Link href={"/"}>
                  <td className=" self-start">Youtube</td>
                </Link>
              </tr>
              <tr className=" flex justify-between w-full">
                <Link href={"/"}>
                  <td className=" self-start">Contact</td>
                </Link>
                <Link href={"/"}>
                  <td className=" self-start">Travel</td>
                </Link>
                <Link href={"/"}>
                  <td className=" self-start">Linkein</td>
                </Link>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
