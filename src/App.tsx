
import { lazy, Suspense } from 'react';
import './App.css'
const Home = lazy(() => import('./pages/home'));

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  )
}

export default App
