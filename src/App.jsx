import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MysteryPage from "./MysteryPage";
import PersonA from "./PersonA";
import PersonB from "./PersonB";
import PersonC from "./PersonC";
import PersonD from "./PersonD";
import FinalPage from "./FinalPage";

function App() {
  return (
    <Router basename="/my-mystery-game">
      <Routes>
        <Route path="/" element={<MysteryPage />} />
        <Route path="/personA" element={<PersonA />} />
        <Route path="/personB" element={<PersonB />} />
        <Route path="/personC" element={<PersonC />} />
        <Route path="/personD" element={<PersonD />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
