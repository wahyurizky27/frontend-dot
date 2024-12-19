import React from 'react';
import { City } from '../types/City';
import styled from 'styled-components';

interface CityListProps {
  cities: City[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: #0070f3;
  color: white;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const CityList: React.FC<CityListProps> = ({ cities }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeader>City Name</TableHeader>
          <TableHeader>Province</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {cities.map((city, index) => (
          <TableRow key={index}>
            <TableCell>{city.city_name}</TableCell>
            <TableCell>{city.province}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default CityList;
