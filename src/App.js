import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import FundManager from './pages/FundManager';
import NetspendPatternLibrary from './pages/NetspendPatternLibrary';
import CustomCardCreator from './pages/CustomCardCreator';
import Wayblazer from './pages/Wayblazer';
import MagicStaff from './pages/MagicStaff';
import CPay from './pages/CPay';
import SpotMe from './pages/SpotMe';
import Wellsmith from './pages/Wellsmith';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fund-manager" element={<FundManager />} />
      <Route path="/ns_pattern_library" element={<NetspendPatternLibrary />} />
      <Route path="/custom_card_creator" element={<CustomCardCreator />} />
      <Route path="/wayblazer" element={<Wayblazer />} />
      <Route path="/magicstaff" element={<MagicStaff />} />
      <Route path="/cpay" element={<CPay />} />
      <Route path="/spotme" element={<SpotMe />} />
      <Route path="/wellsmith" element={<Wellsmith />} />
    </Routes>
  );
}

export default App;

