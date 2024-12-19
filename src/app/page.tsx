/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { fetchCities } from './services/api';
import CityList from './components/CitiList';
import { Container, Heading } from './components/StyledComponents';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [showList, setShowList] = useState(false);

  // Check login status
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/auth');
    }
  }, [router]);

  const handleShowList = () => {
    setLoading(true);
    fetchCities().then((data) => {
      setCities(data);
      setLoading(false);
      setShowList(true);
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/auth");
  };

  return (
    <Container>
      <Heading>City List</Heading>
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#ff4d4f",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Logout
      </button>

      {!showList && (
        <button onClick={handleShowList} style={{ marginBottom: "20px" }}>
          Show City List
        </button>
      )}

      {loading && <h2>Loading...</h2>}
      {showList && !loading && <CityList cities={cities} />}
    </Container>
  );
}
