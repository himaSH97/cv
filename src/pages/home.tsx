import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf";

// Text layer for React-PDF.
import "react-pdf/dist/Page/TextLayer.css";
import { useState } from "react";
import FloatingControls from "../components/floating-controls";

const Home: React.FC = () => {
  const zoomIn = () => setScale(scale + 0.1);
  const zoomOut = () => setScale(scale - 0.1);
  const [scale, setScale] = useState(1.0);

  return (
    <div className=" flex flex-col justify-center items-center">
      <nav className="fixed w-fit top-4 right-4 bg-red-300 shadow-md z-10 flex justify-end rounded-xl ">
        <button className="flex justify-center items-center bg-black text-white rounded hover:bg-blue-200   transition-all">
          <a href="/cv/nipunHimash.pdf" download className="  px-4 py-2  ">
            Download PDF
          </a>
        </button>
      </nav>

      <Document file="/cv/nipunHimash.pdf">
        <Page pageNumber={1} renderAnnotationLayer={true} scale={scale} />
        <Page pageNumber={2} renderAnnotationLayer={true} scale={scale} />
      </Document>
      <FloatingControls zoomIn={zoomIn} zoomOut={zoomOut} scale={scale} />
    </div>
  );
};

export default Home;
