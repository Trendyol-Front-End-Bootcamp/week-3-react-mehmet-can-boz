import React from 'react';

const EpisodesName = ({episodeName}) =>{
    return(
      <>
      <h3>Episodes</h3>
      <table>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Season</th>
          </tr>
      {
        episodeName.map(element =>{
          return(
              <tr>
                <td>{element.name}</td>
                <td>{element.air_date}</td>
                <td>{element.episode}</td>
              </tr>
          )
        })
      }
    </table>
      </>
    )
}
export default EpisodesName;