import React from 'react';

const Grid = ({header,children}) => (
  <div className="cards">
    <h1>{header}</h1>
    <div className="card">
      {children}
    </div>
  </div>
)

export default Grid;