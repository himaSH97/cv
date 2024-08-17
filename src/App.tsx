
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/home'));

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "/node_modules/pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {

  return (
    <Suspense fallback={<></>}>
      <Home />
    </Suspense>
  )
}

export default App
