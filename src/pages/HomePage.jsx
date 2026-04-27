import { homeStyles as hstyle } from "../utilities/styles"

import { Flow } from "../components/Flow"


export const HomePage = () => {
    return(
        <div className="bg-linear-to-r from-violet-500 to-fuchsia-500 h-screen flex items-center">
            {/* LEFT TAB */}
            <div className="">
                <div className="  rounded-2xl ml-5 bg-linear-to-l from-violet-600 to-fuchsia-600  shadow-lg">
                    <div className="w-60 h-120 ">

                    </div>
                </div>
            </div>

            {/* WORK SPACE */}
            <div className="">
                <Flow />
            </div>
        </div>
    )
}