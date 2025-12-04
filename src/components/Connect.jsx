import Interface from "./Interfaces";
import JoshuaGuo from "../assets/Joshua.png";
import { LuCopy } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

function Connect() {
  const [copyState, setCopyState] = useState(false)
  const textToCopy = "hello@interfaces.supply"
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
      setCopyState(true)
      setTimeout(() => {
      setCopyState(false);
    }, 2000);
    })
  }

  return (
    <div className="space-y-10" id="contact">
      <div className="space-y-8 border-b border-b-accent pb-8">
        <Interface></Interface>
        <h1 className="md:text-5xl text-4xl font-bold">Let's Connect</h1>
        <p className="font-medium text-brand">
          I'd love to hear from you! Whether you have questions about the
          Interfaces Design System or <br className="lg:block hidden"/>
          want to discuss how it can benefit your projects, feel free to reach
          out.
        </p>
      </div>
      <div className="space-y-8">
        <div className="flex gap-4">
          <img
            className="size-12 rounded-full border border-accent"
            src={JoshuaGuo}
            alt=""
          />
          <div className="flex flex-col">
            <header className="font-medium">Joshua Guo</header>
            <p className="text-brand text-sm">Creator, Interfaces</p>
          </div>
        </div>
        <p className="font-medium text-brand">
            "Thank you for your interest in the Interfaces Design System. I'm dedicated to creating elegant, <br className="lg:block hidden"/>
            functional design solutions that elevate your projects and streamline your workflow."
        </p>
        <div onClick={handleCopy} className=" hover:animate-none hover:scale-[1.1] cursor-pointer px-3 py-2 text-sm font-medium border border-accent w-fit">
          {copyState ?
          <div className="flex gap-2">
            <span>Copied</span>
            <IoMdCheckmark className="text-white text-xl"/>
          </div> 
          : 
          <div className="flex gap-2">
            <span>
            hello@interfaces.supply
            </span>
            <LuCopy className="text-white text-xl"/>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Connect;
