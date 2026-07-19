import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ScrollProgress from "./Components/ScrollProgress/ScrollProgress";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import Services from "./pages/Services";

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import AddProperty from "./admin/pages/AddProperty";
import AdminProperties from "./admin/pages/AdminProperties";
import EditProperty from "./admin/pages/EditProperty";
import ProtectedRoute from "./admin/components/ProtectedRoute";

function AppContent() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && (
        <>
          <ScrollProgress />
          <Navbar />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />

        <Route path="/admin/login" element={<Login />} />
        <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/add-property"
  element={
    <ProtectedRoute>
      <AddProperty />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/properties"
  element={
    <ProtectedRoute>
      <AdminProperties />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/edit-property/:id"
  element={
    <ProtectedRoute>
      <EditProperty />
    </ProtectedRoute>
  }
/>
      </Routes>

      {!isAdminPage && (
        <>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;