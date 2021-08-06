import React from 'react';

const Search= ({gendereventHandler,statusEventHandler})=>(
  <div className="search">
    <div>
      <h3 id="gender-filter">Gender Filter</h3>
      <select name="gender" id="genderSearch" onChange={gendereventHandler}>
        <option value=""></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
    <div>
      <h3 id="status-filter">Status Filter</h3>
      <select name="status" id="statusSarch" onChange={statusEventHandler}>
        <option value=""></option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  </div>
)

export default Search;