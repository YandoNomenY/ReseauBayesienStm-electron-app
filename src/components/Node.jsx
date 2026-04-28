import {  Handle, Position } from '@xyflow/react'

export const Node = ({ data, id }) => {
    
    return(
        <div className=" border   size-40 rounded-full flex items-center shadow-lg border-gray-500 justify-center bg-linear-to-r from-5% to-[#f8c630]">
            <h2>{data.label}</h2>
            <Handle id="top"    type="source" position={Position.Top}    className="w-3 h-3 bg-indigo-500!" />
            <Handle id="bottom" type="source" position={Position.Bottom} className="w-3 h-3 bg-indigo-500!" />
            <Handle id="left"   type="source" position={Position.Left}   className="w-3 h-3 bg-indigo-500!" />
            <Handle id="right"  type="source" position={Position.Right}  className="w-3 h-3 bg-indigo-500!" />
            </div>
    )
}