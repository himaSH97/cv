
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/home'));

import { pdfjs } from "react-pdf";

// @ts-expect-error This does not exist outside of polyfill which this is doing
if (typeof Promise.withResolvers === 'undefined') {
  if (window)
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      window.Promise.withResolvers = function () {
          let resolve, reject;
          const promise = new Promise((res, rej) => {
              resolve = res;
              reject = rej;
          });
          return { promise, resolve, reject };
      };
}

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
