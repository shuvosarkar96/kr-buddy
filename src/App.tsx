import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Index from "./pages/Index";
import ArcGuide from "./pages/ArcGuide";
import DormitoryRules from "./pages/DormitoryRules";
import Emergency from "./pages/Emergency";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Language from "./pages/Language";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

const App = () => (
  <HashRouter>
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Index />} />
        <Route path="/arc-guide" element={<ArcGuide />} />
        <Route path="/dorm-rules" element={<DormitoryRules />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/language" element={<Language />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  </HashRouter>
);

export default App;