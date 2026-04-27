import { ReactFlow, Background, Controls } from '@xyflow/react';
import { Node } from './Node';
import '@xyflow/react/dist/style.css';

const nodeTypes = {
    custom: Node,
}
const initialNodes = [
    {
      id: 'n1',
      type: 'custom',
      position: { x: 0, y: 0 },
      data: { label: 'Node 1' },
    },
    {
      id: 'n2',
      type: 'custom',
      position: { x: 100, y: 100 },
      data: { label: 'Node 2' },
    },
  ];

  const defaultEdgeOptions = {
    style: { strokeWidth: 3, stroke: '#6366f1' }, 
    type: 'smoothstep', 
    animated: true,     
    markerEnd: {
      type: 'arrowclosed',
      color: '#6366f1',
    },
  };

  const initialEdges = [
    {
        id: 'n1-n2',
        source: 'n1',
        target: 'n2'
    }
  ]

export const Flow = () => {
    return(
        <div className="w-screen h-screen">
            <ReactFlow nodes={initialNodes} nodeTypes={nodeTypes} edges={initialEdges} defaultEdgeOptions={defaultEdgeOptions} fitView>
                <Background color="#cbd5e1" variant="dots" />
                <Controls className="bg-white border-none shadow-md fill-indigo-600"/>
            </ReactFlow>
        </div>
    )
}