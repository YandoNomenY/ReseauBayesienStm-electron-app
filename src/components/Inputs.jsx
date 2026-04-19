import { Camera, Search, Mic } from "lucide-react";
import micro from "../assets/mic.png";
import cam from "../assets/cam.png";

export const Inputs = () => {
    return(
        <div className="">
            <div className="flex justify-center items-center   rounded-4xl w-[50vw] h-12 bg-white">
                <div className="w-10 p-2">
                    <Search className="cursor-pointer"/>
                </div>
                <input 
                type="text"
                placeholder="Effectuez des recherches sur Google ou saissez un URL"
                className="w-full h-full bg-transparent outline-none text-grey text-lg font-medium overflow-x-auto"
                />
                <div className="flex  justify-around w-20 mr-2 ">
                    <img src={micro} alt="micro" className="w-6 cursor-pointer"/>
                    <img src={cam} alt="micro" className="w-6 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}