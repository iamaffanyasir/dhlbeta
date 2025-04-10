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

// Kidney Function Test Components
import BloodUrea from './pages/Tests/BloodUrea/BloodUrea';
import SerumCreatinine from './pages/Tests/SerumCreatinine/SerumCreatinine';
import Bun from './pages/Tests/Bun/bun';
import BunCreatinineRatio from './pages/Tests/BunCreatinineRatio/BunCreatinineRatio';
import UricAcid from './pages/Tests/UricAcid/UricAcid';
import SerumCalcium from './pages/Tests/SerumCalcium/SerumCalcium';
import InorganicPhosphorus from './pages/Tests/InorganicPhosphorus/InorganicPhosphorus';
import Sodium from './pages/Tests/Sodium/sodium';
import Potassium from './pages/Tests/Potassium/potassium';
import Chloride from './pages/Tests/Chloride/chloride';

// Liver Function Test Components
import BilirubinTotal from './pages/Tests/BilirubinTotal/BilirubinTotal';
import BilirubinDirect from './pages/Tests/BilirubinDirect/BilirubinDirect';
import BilirubinIndirect from './pages/Tests/BilirubinIndirect/BilirubinIndirect';
import Sgot from './pages/Tests/Sgot/sgot';
import Sgpt from './pages/Tests/Sgpt/sgpt';
import Sap from './pages/Tests/Sap/sap';
import Ggt from './pages/Tests/Ggt/ggt';
import TotalProtein from './pages/Tests/TotalProtein/TotalProtein';
import Globulin from './pages/Tests/Globulin/globulin';
import AgRatio from './pages/Tests/AgRatio/AgRatio';

// Other Test Components
import BloodSugarFasting from './pages/Tests/BloodSugarFasting/BloodSugarFasting';
import UrineAnalysis from './pages/Tests/UrineAnalysis/UrineAnalysis';
import CarouselManager from './pages/CarouselManager/CarouselManager';
import HealthPackageManager from './pages/HealthPackageManager/HealthPackageManager';
import MobileLayout from './layouts/MobileLayout';
import MobileHomePage from './pages/Mobile/HomePage/HomePage';
import MobileTests from './pages/Mobile/Tests/MobileTests';
import MobilePackages from './pages/Mobile/Packages/Packages';
import MobileTestDetails from './pages/Mobile/TestDetails/TestDetails';
import AboutUs from './pages/Mobile/AboutUs/AboutUs';
import Reports from './pages/Mobile/Reports/Reports';

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
              <Route path="/about" element={<AboutUs />} />
              <Route path="/reports" element={<Reports />} />
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
              
              {/* Kidney Function Test Routes */}
              <Route path="/tests/blood-urea" element={<BloodUrea />} />
              <Route path="/tests/serum-creatinine" element={<SerumCreatinine />} />
              <Route path="/tests/bun" element={<Bun />} />
              <Route path="/tests/bun-creatinine-ratio" element={<BunCreatinineRatio />} />
              <Route path="/tests/uric-acid" element={<UricAcid />} />
              <Route path="/tests/serum-calcium" element={<SerumCalcium />} />
              <Route path="/tests/inorganic-phosphorus" element={<InorganicPhosphorus />} />
              <Route path="/tests/sodium" element={<Sodium />} />
              <Route path="/tests/potassium" element={<Potassium />} />
              <Route path="/tests/chloride" element={<Chloride />} />

              {/* Liver Function Test Routes */}
              <Route path="/tests/bilirubin-total" element={<BilirubinTotal />} />
              <Route path="/tests/bilirubin-direct" element={<BilirubinDirect />} />
              <Route path="/tests/bilirubin-indirect" element={<BilirubinIndirect />} />
              <Route path="/tests/sgot" element={<Sgot />} />
              <Route path="/tests/sgpt" element={<Sgpt />} />
              <Route path="/tests/sap" element={<Sap />} />
              <Route path="/tests/ggt" element={<Ggt />} />
              <Route path="/tests/total-protein" element={<TotalProtein />} />
              <Route path="/tests/globulin" element={<Globulin />} />
              <Route path="/tests/ag-ratio" element={<AgRatio />} />

              {/* Other Test Routes */}
              <Route path="/tests/blood-sugar-fasting" element={<BloodSugarFasting />} />
              <Route path="/tests/urine-analysis" element={<UrineAnalysis />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
