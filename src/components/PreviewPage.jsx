import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowsFullscreen } from "react-icons/bs";
import Design1 from "../assets/Design 1.jpeg"
import Design2 from "../assets/Design 2.jpeg"
import Design3 from "../assets/Design 3.jpeg"
import Design4 from "../assets/Design 4.png"
import Design5 from "../assets/Design 5.png"
import Design6 from "../assets/Design 6.png"
import Design7 from "../assets/Design 7.png"

const listOfImages = [
    {
        id: 1,
        name: "Avatars",
        value: Design1
    },
    {
        id: 2,
        name: "Designers List",
        value: Design2
    },
    {
        id: 3,
        name: "Designer",
        value: Design3
    },
    {
        id: 4,
        name: "Design",
        value: Design4
    },
    {
        id: 5,
        name: "Innovate and Create",
        value: Design5
    },
    {
        id: 6,
        name: "Icons",
        value: Design6
    },
    {
        id: 7,
        name: "Teams",
        value: Design7
    },
]

function PreviewPage() {
    const [currentImage, setCurrentImage] = useState(listOfImages[0])
    const [dropdown, setDropdown] = useState(false)
    const fullscreenRef = useRef(null);

    function handleDropdown() {
        setDropdown((prev)=> !prev)
    }

    const toggleFullscreen = () => {
        const element = fullscreenRef.current;
    
    if (!document.fullscreenElement) {
        // Enter fullscreen
        element.requestFullscreen();
    } else {
        // Exit fullscreen
        document.exitFullscreen();
    }
    };
    return ( 
        <div ref={fullscreenRef}>
            <div className="relative top-6 pr-4 flex justify-between">
                <div>
                    <div onClick={handleDropdown} className="bg-accent absolute cursor-pointer w-fit top-2 left-2 rounded-md items-center px-2 py-1 flex gap-3 ">
                        <span className="text-xs">{currentImage.name}</span> 
                        <IoIosArrowDown />
                    </div>
                    <div className={` ${dropdown ? "block" : "hidden"} bg-accent  absolute top-7 rounded-md list-none w-fit space-y-2 px-2 py-2 mt-2`}>
                        <ul>
                            {listOfImages.map((image) => (
                                <li 
                                onClick={() => {setCurrentImage(image); setDropdown(false)}} 
                                key={image.id} 
                                className={`text-xs cursor-pointer px-2 rounded-sm py-2 hover:bg-blue-500 
                                ${currentImage === image ? "bg-blue-600 text-white" : ""}`}>
                                {image.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div 
                onClick={toggleFullscreen}
                className="p-1 bg-accent cursor-pointer w-fit relative top-2 -right-2 rounded-sm">
                    <BsArrowsFullscreen className=""/>
                </div>
            </div>
            <img src={currentImage.value} alt="" />
            
        </div>
     );
}

export default PreviewPage;