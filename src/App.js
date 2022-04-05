import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.components";
import Projects from "./routes/projects/projects.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
