import React from 'react';

const EpisodesName = ({episodeName}) =>{
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
                <td>{element.name}</td>
                <td>{element.air_date}</td>
                <td>{element.episode}</td>
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