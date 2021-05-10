import { useState } from "react";
import ReactFlow, {
  addEdge,
  ArrowHeadType,
  Controls,
  Handle,
  Position,
  updateEdge,
} from "react-flow-renderer";

import "./BasicNode.scss";

const rootElements = [
  {
    id: "2",
    type: "special",
    position: { x: 100, y: 100 },
    data: {
      title: "Messages",
      message: `Hi, name Lukman Hidayah \n
    Welcome to your first WhatsApp bot password by LandBot`,
      replies: [
        {
          id: "a",
          message: "Send Notification",
        },
        {
          id: "b",
          message: "Talk to us",
        },
      ],
    },
  },
  {
    id: "3",
    type: "special",
    position: { x: 494, y: 287 },
    data: {
      title: "Messages 2",
      message: `Hi, name Lukman Hidayah \n
    Welcome to your first WhatsApp bot password by LandBot`,
      replies: [
        {
          id: "c",
          message: "Send Notification",
        },
        {
          id: "d",
          message: "Talk to us",
        },
      ],
    },
  },
];

const CustomNodeComponent = (props: any) => {
  const { data } = props;
  return (
    <div className="basic-node-container">
      <div className="node-header">
        <h3>{data.title}</h3>
      </div>
      <Handle
        type="target"
        id={props.id}
        position={Position.Left}
        className="node-target"
      />
      <div className="node-content">
        <div className="node-message">
          <p>{data.message}</p>
        </div>

        {data.replies.map((res: any, index: number) => {
          return (
            <div key={index} className="node-replies">
              <p>{res.message}</p>
              <Handle
                type="source"
                // isValidConnection={(connection) =>
                //   connection.source === props.id + res.id
                // }
                onConnect={(params) => console.log("handle onConnect", params)}
                position={Position.Right}
                id={res.id}
                className="node-source"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};
const onLoad = (reactFlowInstance: any) => reactFlowInstance.fitView();

const BasicNode = () => {
  const [elements, setElements] = useState<any>(rootElements);

  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdate = (oldEdge: any, newConnection: any) => {
    console.log(newConnection);
    setElements((els: any) => updateEdge(oldEdge, newConnection, els));
  };

  const onConnect = (params: any) => {
    const handleParams = {
      ...params,
      type: "smoothstep",
      arrowHeadType: "arrow",
    };
    setElements((els: any) => addEdge(handleParams, els));
  };

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        onLoad={onLoad}
        onEdgeUpdate={onEdgeUpdate}
        onConnect={onConnect}
        onNodeDragStop={(test) => console.log(test.pageX, test)}
        snapToGrid
        elements={elements}
        nodeTypes={nodeTypes}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default BasicNode;
