import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useDeviceDetect from './hooks/useDeviceDetect';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CBC from './pages/cbc';
import HomePage from './pages/HomePage/HomePage';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import ThyroidProfile from './pages/ThyroidProfile/ThyroidProfile';
import VitaminD from './pages/VitaminD/VitaminD';
import HbA1C from './pages/HbA1C/HbA1C';
import LiverFunction from './pages/LiverFunction/LiverFunction';
import LipidProfile from './pages/LipidProfile/LipidProfile';
import CovidTest from './pages/CovidTest/CovidTest';
import KidneyFunction from './pages/KidneyFunction/KidneyFunction';
import CarouselManager from './pages/CarouselManager/CarouselManager';
import HealthPackageManager from './pages/HealthPackageManager/HealthPackageManager';
import MobileLayout from './layouts/MobileLayout';
import MobileHomePage from './pages/Mobile/HomePage/HomePage';
import MobileTests from './pages/Mobile/Tests/MobileTests';
import MobilePackages from './pages/Mobile/Packages/MobilePackages';
import MobileTestDetails from './pages/Mobile/TestDetails/TestDetails';

function App() {
  const isMobileDevice = useDeviceDetect();

  return (
    <Router>
      <div className="App">
        {isMobileDevice ? (
          <MobileLayout>
            <Routes>
              <Route path="/" element={<MobileHomePage />} />
              <Route path="/tests" element={<MobileTests />} />
              <Route path="/tests/:testId" element={<MobileTestDetails />} />
              <Route path="/packages" element={<MobilePackages />} />
            </Routes>
          </MobileLayout>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tests/cbc" element={<CBC />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/carousel" element={<CarouselManager />} />
              <Route path="/admin/packages" element={<HealthPackageManager />} />
              <Route path="/tests/thyroid-profile" element={<ThyroidProfile />} />
              <Route path="/tests/vitamin-d" element={<VitaminD />} />
              <Route path="/tests/hba1c" element={<HbA1C />} />
              <Route path="/tests/liver-function" element={<LiverFunction />} />
              <Route path="/tests/lipid-profile" element={<LipidProfile />} />
              <Route path="/tests/covid-rt-pcr" element={<CovidTest />} />
              <Route path="/tests/kidney-function" element={<KidneyFunction />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
