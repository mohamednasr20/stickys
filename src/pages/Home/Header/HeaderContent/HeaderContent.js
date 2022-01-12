import React from 'react';
import { Button } from 'react-bootstrap';
import './headerContent.css';

const HeaderContent = () => {
  return (
    <div className="headerContent">
      <h1>The best damn chicken finger</h1>
      <p>
        <span className="text-warning bg-dark">STICKY’S WAS CREATED </span>
        <span className="text-warning bg-dark">OUT OF A LOVE FOR </span>
        <span className="text-warning bg-dark"> CHICKEN FINGERS</span>
      </p>
      <Button className="btn" variant="warning">
        START YOUR ORDER
      </Button>
    </div>
  );
};

export default HeaderContent;
