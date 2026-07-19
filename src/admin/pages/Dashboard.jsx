import AdminLayout from "../components/AdminLayout";
import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";
import axios from "axios";

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
        "http://localhost:5000/api/properties/dashboard/stats"
      );

      setStats(data);

    } catch (error) {
      console.log(error);
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
          title="Featured"
          value={stats.featuredProperties}
        />

        <DashboardCard
          title="Residential"
          value={stats.residentialProperties}
        />

        <DashboardCard
          title="Commercial"
          value={stats.commercialProperties}
        />

      </div>

    </AdminLayout>
  );
}

export default Dashboard;