
import { H } from 'highlight.run';
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



H.init('neyw8vvg', {
	serviceName: "frontend-app",
	tracingOrigins: true,
  disableConsoleRecording:false,
	networkRecording: {
		enabled: true,
		recordHeadersAndBody: true,
		urlBlocklist: [
			"https://www.googleapis.com/identitytoolkit",
			"https://securetoken.googleapis.com",
		],
	},
});

var userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.info(userTimezone);

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
