import { CircleMinus, CirclePlus } from "lucide-react";
import React from "react";

interface FloatingControlsProps {
  zoomIn: () => void;
  zoomOut: () => void;
  scale: number;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({
  zoomIn,
  zoomOut,
  scale,
}) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-2 shadow-md rounded-3xl flex space-x-2 z-10 transition-all">
      <div className="flex flex-col justify-between items-center gap-2">
        <button className="  rounded-full hover:hover:opacity-80 " onClick={zoomIn}>
          <CirclePlus />
        </button>
        <p className="align-center">{scale.toFixed(1)}</p>
        <button className=" rounded-full hover:hover:opacity-80 " onClick={zoomOut}>
          <CircleMinus />
        </button>
      </div>
    </div>
  );
};

export default FloatingControls;
