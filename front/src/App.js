import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [patients, setPatients] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/api/getPatients");
        return setPatients(response.data)
      } catch (err) {
        return console.error(err);
      }
    }
    fetchData();
  }, []);

  console.log("patients: ", patients)
  return (
    <div className="App">
      <ul>
        {patients && patients.map(item => (
          <li key={item._id}>
            {item.firstName}
          </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
