import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ArcGuide from "./pages/ArcGuide";
import DormitoryRules from "./pages/DormitoryRules";
import Emergency from "./pages/Emergency";
import Help from "./pages/Help";

import NotFound from "./pages/NotFound";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />

      <Route path="/arc-guide" element={<ArcGuide />} />
      <Route path="/dorm-rules" element={<DormitoryRules />} />
      <Route path="/emergency" element={<Emergency />} />

      <Route path="/help" element={<Help />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;