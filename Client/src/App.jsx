import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data))
  },[]);

  return (
    <>
      <h1>React frontend</h1>
      <div>
        {data ? <h1>{data.message}</h1> : <p>Loading..</p>}
      </div>
    </>
  );
}

export default App
