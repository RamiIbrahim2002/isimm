// Departments.js
import React from 'react';
import Cataloge_departement from '../Cataloge_departement'
import { useNavigate } from 'react-router-dom';

const Departments = ({ departmentData }) => {
    const navigate = useNavigate();

  const handleCatalogeClickDepartment = (department) => {
    // Handle department click if needed
    console.log('Clicked on department:', department);
    // Programmatically navigate to the department detail page
    navigate(`/departements/${department.name}`);
  };

  return (
    <div>
      <h2>Departments</h2>
      <Cataloge_departement catalogData={departmentData} onClick={handleCatalogeClickDepartment} />
    </div>
  );
};

export default Departments;
