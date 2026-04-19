export const Card = ({image, titre}) => {
    return(
        <div className="flex flex-col gap-4 justify-center rounded-lg items-center cursor-pointer  w-30 h-30 hover:bg-[#27282831] ">
            <div className="w-12 h-12  flex justify-center items-center rounded-full bg-[#1b292f]">
                <img src={image} alt="" className="size-7 " />
            </div>
            
            <p className="text-white text-sm">{titre}</p>
        </div>
    )
}