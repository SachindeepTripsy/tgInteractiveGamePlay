import {
  Routes,
  Route,
  // useNavigationType,
  // useLocation,
} from "react-router-dom";
import Component from "./pages/Component";
import Component1 from "./pages/Component1";
import Component2 from "./pages/Component2";
import Component3 from "./pages/Component3";
import Component4 from "./pages/Component4";
import Component5 from "./pages/Component5";
import Component6 from "./pages/Component6";
import Component7 from "./pages/Component7";
import Component8 from "./pages/Component8";
import Component9 from "./pages/Component9";
import Component10 from "./pages/Component10";
import Component11 from "./pages/Component11";
import Component12 from "./pages/Component12";
import Component13 from "./pages/Component13";
import Component14 from "./pages/Component14";
import Component15 from "./pages/Component15";
import Component16 from "./pages/Component16";
import Component17 from "./pages/Component17";
import Component18 from "./pages/Component18";
import Component19 from "./pages/Component19";
import Component20 from "./pages/Component20";
import Component21 from "./pages/Component21";
import Component22 from "./pages/Component22";
import Component23 from "./pages/Component23";
import Component24 from "./pages/Component24";
import Component25 from "./pages/Component25";
import Component26 from "./pages/Component26";
import Component27 from "./pages/Component27";
import Component28 from "./pages/Component28";
// import { useEffect } from "react";
import CompletedBasic from "./pages/CompletedBasic";

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/14":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/29":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/23":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/28":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/27":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/25":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/24":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/18":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/22":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/21":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/20":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/19":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/17":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/16":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/15":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/13":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/12":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/11":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/9":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/6":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/5":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/10":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/8":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/7":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/4":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/3":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/2":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/1":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Component28 />} />
      <Route path="/14" element={<Component1 />} />
      <Route path="/29" element={<Component2 />} />
      <Route path="/23" element={<Component3 />} />
      <Route path="/28" element={<Component4 />} />
      <Route path="/27" element={<Component5 />} />
      <Route path="/25" element={<Component6 />} />
      <Route path="/24" element={<Component7 />} />
      <Route path="/18" element={<Component8 />} />
      <Route path="/22" element={<Component9 />} />
      <Route path="/21" element={<Component10 />} />
      <Route path="/20" element={<Component11 />} />
      <Route path="/19" element={<Component12 />} />
      <Route path="/17" element={<Component13 />} />
      <Route path="/16" element={<Component14 />} />
      <Route path="/15" element={<Component15 />} />
      <Route path="/13" element={<Component16 />} />
      <Route path="/12" element={<Component17 />} />
      <Route path="/11" element={<Component18 />} />
      <Route path="/9" element={<Component19 />} />
      <Route path="/6" element={<Component20 />} />
      <Route path="/5" element={<Component21 />} />
      <Route path="/10" element={<Component22 />} />
      <Route path="/8" element={<Component23 />} />
      <Route path="/7" element={<Component24 />} />
      <Route path="/4" element={<Component25 />} />
      <Route path="/3" element={<Component26 />} />
      <Route path="/2" element={<Component27 />} />
      <Route path="/1" element={<Component />} />
      <Route path="/30" element={<CompletedBasic/> }/>
    </Routes>
  );
}
export default App;
