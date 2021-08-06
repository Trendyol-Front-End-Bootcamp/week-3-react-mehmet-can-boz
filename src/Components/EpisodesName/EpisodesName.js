import React from 'react';

const EpisodesName = ({ episodeName }) => { 
  return(
    <>
      <h3>Episodes</h3>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Season</th>
        </tr>
      </thead>
      <tbody>
        {
          episodeName.map(element =>{
            return(
              <tr key={element.id}>
                <td id="episodeName">{element.name}</td>
                <td id="episodeDate">{element.air_date}</td>
                <td id="episodeSeason">{element.episode}</td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
     </>
    )
}

export default EpisodesName;