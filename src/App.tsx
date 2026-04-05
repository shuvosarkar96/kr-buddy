import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArcGuide from "./pages/ArcGuide";
import DormitoryRules from "./pages/DormitoryRules";
import Emergency from "./pages/Emergency";
import CampusLife from "./pages/CampusLife";
import Tips from "./pages/Tips";
import NotFound from "./pages/NotFound";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/arc-guide" element={<ArcGuide />} />
      <Route path="/dormitory-rules" element={<DormitoryRules />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/campus-life" element={<CampusLife />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
