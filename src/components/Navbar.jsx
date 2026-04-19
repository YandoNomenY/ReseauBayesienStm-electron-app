import { ArrowLeft, ArrowRight, Blocks, ChevronDown, Download, EllipsisVertical, LoaderPinwheel, RotateCcw, Star, X } from "lucide-react"
import cookies from "../assets/cookies.png"

export const Navbar = () => {
    const arrowDown = ">"
    return(
        <>
            <div className="w-full h-auto ">
                {/* Espace pour les onglets */}
                <div className="flex  bg-[#445760]">
                    <div className="bg-[#1b292f] w-10 h-10 flex justify-center items-center rounded-br-lg pl-1.5 pr-2 ">
                        <button className="text-white  flex justify-center cursor-pointer items-center w-7 h-7 rounded-lg bg-[#445760] hover:bg-[#51656e]">
                            <ChevronDown />
                        </button>
                    </div>
                    <div className="flex justify-baseline bg-[#1b292f] rounded-bl-xl rounded-br-xl">
                        <div className=" rounded-lg w-50 h-8 bg-[#445760]  mt-2">
                            <div className="flex ">
                                <div className="flex justify-start gap-2 pt-1 mx-1 items-center w-42">
                                    <LoaderPinwheel color="white" size={16} />
                                    <h1 className="text-white text-sm">Nouvel onglet</h1>
                                </div>
                                <button className="pt-1">
                                    <X className=" cursor-pointer  size-5 p-0.5 rounded-full hover:bg-[#404f56]" size={15} color="white"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full">
                        <div className="w-full  bg-[#1b292f] h-9.5 rounded-bl-lg">

                        </div>
                    </div>

                </div>
                {/* Espace outils et barre de lien */}
                <div className="">
                    <div className=" flex w-full bg-[#1b292f] h-10">
                        <div className="flex w-full h-full bg-[#445760]  rounded-tl-lg ">
                            <div className="flex   w-full h-full">
                                <div className=" w-30 flex justify-between items-center pl-2">
                                    <div className="cursor-pointer size-8 flex justify-center items-center rounded-full hover:bg-[#404f56]"><ArrowLeft size={18} color="white"/></div>
                                    <div className="cursor-pointer size-8 flex justify-center items-center rounded-full hover:bg-[#404f56]"><ArrowRight size={18} color="white"/></div>
                                    <div className="cursor-pointer size-8 flex justify-center items-center rounded-full hover:bg-[#404f56]"><RotateCcw size={18} color="white"/></div>
                                </div>
                                <div className="ml-2  rounded-4xl border-2 border-blue-500 flex items-center h-full ">
                                    <div className=" flex justify-center items-center w-[78vw] h-9 bg-[#1b292f]  rounded-3xl">
                                        <div className=" size-6 flex justify-center items-center rounded-full bg-[#404f56]">
                                            <p className="text-white font-bold text-lg">G</p>
                                        </div>
                                        <div className="">
                                            <input type="text"
                                               
                                                placeholder="Effectuez des recherches sur Google ou saissez un URL"
                                                className="text-white w-[73.5vw] mx-2 outline-0 "
                                            />
                                        </div>
                                        <div className="cursor-pointer size-5 flex justify-center items-center rounded-full hover:bg-[#404f56]">
                                            <Star color="white" size={15}/>
                                        </div>

                                    </div>
                                </div>
                                <div className=" w-full h-full flex justify-center items-center">
                                    <div className="flex  mx-2 justify-between h-7.2 items-center w-18  rounded-4xl hover:border border-gray-500">
                                       <div className="size-7 cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-500 ">
                                            <img src={cookies} className="size-5" />
                                       </div>
                                       <div className="size-7 cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-500 ">
                                            <Blocks size={16} color="white"/>
                                       </div>
                                    </div>
                                    <div className="flex justify-around border-l-3 border-[#1b292f] w-full ">
                                        <div className="flex size-7 justify-center items-center rounded-full hover:bg-gray-500 cursor-pointer">
                                            <Download color="white" size={18} />
                                        </div>
                                        
                                        <div className="size-7 cursor-pointer flex justify-center items-center rounded-full bg-cyan-400">
                                            <p className="text-white text-sm ">A</p>
                                        </div>
                                        <div className="size-7 cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-500">
                                            <EllipsisVertical color="white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}