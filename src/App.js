import { useEffect } from "react";
import { WorkCheckPage } from "./pages";
import { asciiArt, asciiText } from "./data/data-form";

function App() {
  useEffect(() => {
    console.log(asciiText);
    console.log(asciiArt);
  }, []);

  return <WorkCheckPage />;
}

export default App;
