/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { fetchCities } from '../services/api';
import CityList from '../components/CitiList';
import { Container, Heading } from '../components/StyledComponents';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities().then((data) => {
      setCities(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return <Container>
            <Heading>City List</Heading>
            <CityList cities={cities} />
        </Container>
};

export default Home;
