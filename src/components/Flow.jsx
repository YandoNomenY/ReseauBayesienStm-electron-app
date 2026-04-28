import { ReactFlow, Background, applyNodeChanges, applyEdgeChanges, useInternalNode } from '@xyflow/react';
import { Node } from './Node';
import '@xyflow/react/dist/style.css';
import { InitialNode } from '../utilities/InitialNode';
import { InitialEdges } from '../utilities/InitialEdges';
import { useCallback, useState } from 'react';
 


const nodeTypes = {
    custom: Node,
}



  const defaultEdgeOptions = {
    style: { strokeWidth: 3, stroke: '#faee9f' }, 
    type: 'bezier', 
    animated: true,     
    markerEnd: {
      type: 'arrowclosed',
      color: '#faee9f',
    },
  };



export const Flow = () => {
    const [nodes, setNodes] = useState(InitialNode);
    const [edges, setEdges] = useState(InitialEdges);

    // EVENT HANDLERS
    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapShot) => applyNodeChanges(changes, nodesSnapShot)),
    [],
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapShot) => applyEdgeChanges(changes, edgesSnapShot)),
    [],
    );
    return(
        <div className="w-screen h-screen">
            <ReactFlow 
            nodes={nodes} 
            nodeTypes={nodeTypes} 
            edges={edges} 
            defaultEdgeOptions={defaultEdgeOptions} 
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            connectionMode='loose'
            >
                <Background color="#cbd5e1" variant="dots" />
                {/* <Controls /> */}
            </ReactFlow>
        </div>
    )
}