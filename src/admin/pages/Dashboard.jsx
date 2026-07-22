import AdminLayout from "../components/AdminLayout";
import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function Dashboard() {
  const [stats, setStats] = useState({
    totalProperties: 0,
    featuredProperties: 0,
    residentialProperties: 0,
    commercialProperties: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/properties/dashboard/stats`
      );

      setStats(data);
    } catch (error) {
      console.error("Failed to load dashboard stats:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="cards">
        <DashboardCard
          title="Total Properties"
          value={stats.totalProperties}
        />

        <DashboardCard
          title="Featured Properties"
          value={stats.featuredProperties}
        />

        <DashboardCard
          title="Residential Properties"
          value={stats.residentialProperties}
        />

        <DashboardCard
          title="Commercial Properties"
          value={stats.commercialProperties}
        />
      </div>
    </AdminLayout>
  );
}

export default Dashboard;