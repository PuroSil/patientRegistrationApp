import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [patients, setPatients] = useState([]);

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
    </div>
  );
}

export default App;
