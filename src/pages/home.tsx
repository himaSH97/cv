import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf";

// Text layer for React-PDF.
import "react-pdf/dist/Page/TextLayer.css";
import { useEffect, useState } from "react";
import FloatingControls from "../components/floating-controls";
import { ArrowBigDownDash, LoaderCircle } from "lucide-react";

const bucketUrl = 'https://himash-cv.s3.ap-south-1.amazonaws.com/nipunHimash.pdf';

const Home: React.FC = () => {
  const zoomIn = () => setScale(scale + 0.1);
  const zoomOut = () => setScale(scale - 0.1);
  const [scale, setScale] = useState(1.0);
  const updateScale = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setScale(0.6); 
    } else if (width < 768) {
      setScale(1.0); // Medium screens
    } else {
      setScale(1.0); 
    }
  };

  useEffect(() => {
    updateScale(); // Set initial scale
    window.addEventListener("resize", updateScale); // Update scale on resize

    return () => {
      window.removeEventListener("resize", updateScale); // Cleanup on unmount
    };
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center bg-white">
      <nav className="fixed w-fit top-4 right-4 bg-transparent shadow-md z-10 flex justify-end rounded-full   ">
        <button className="sm:flex justify-center items-center bg-black text-white rounded hover:opacity-80 hidden  transition-all">
          <a href={bucketUrl} download className="  px-4 py-2  ">
            Download PDF
          </a>
        </button>
        <button className="flex justify-center items-center bg-black text-white  hover:opacity-80 rounded-full sm:hidden  transition-all">
          <a href={bucketUrl} download className=" p-1 ">
          <ArrowBigDownDash />
          </a>
        </button>
        
      </nav>

      <Document file={bucketUrl} loading={<div className='animate-spin'><LoaderCircle /></div>}>
        <Page pageNumber={1} renderAnnotationLayer={true} scale={scale} />
        <Page pageNumber={2} renderAnnotationLayer={true} scale={scale} />
      </Document>
      <FloatingControls zoomIn={zoomIn} zoomOut={zoomOut} scale={scale} />
    </div>
  );
};

export default Home;
