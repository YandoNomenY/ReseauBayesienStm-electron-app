import {  Handle, Position } from '@xyflow/react'

export const Node = ({ data }) => {
    return(
        <div className=" border   w-20 h-20 rounded-full flex items-center shadow-lg border-gray-500 justify-center bg-linear-to-r from-5% to-[#f8c630]">
            <h2>{data.label}</h2>
            <Handle type="target" position={Position.Right} className="w-3 h-3 bg-indigo-500!" />
            <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-indigo-500!" />
        </div>
    )
}