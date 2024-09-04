import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handelScroll = () => {
      if (window.screenY === 0) {
        setIsTopOfPage(true);
      }
      if (window.screenY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <div className="h-[3000px] px-6 lg:px-14">
      <Navbar isTopOfPage={isTopOfPage} />
    </div>
  );
}

export default App;
