import { useState, useEffect } from 'react'

const Home = () => {

  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data))
  },[]);
  /*
<div className='bg-red-800'>
                {data ? <h1>{data.message}</h1> : <p>Loading..</p>}
            </div>
  */
  
    return(
        <div className='flex justify-center pt-10 text-white'>
            <div className='px-20 py-10 w-10/12 h-[75vh] border-solid border-2 border-slate-900 bg-slate-800 shadow-xl rounded-t-3xl flex flex-col items-center'>
                <h1 className='bg-blue-700 text-center text-3xl w-3/4 h-auto rounded-t-lg p-3'>Tracking</h1>
                <h1>helo</h1>
                
                
            </div>
        </div>
        
    );
};

export default Home;