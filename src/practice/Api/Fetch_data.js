import React, { useState } from 'react'
import Movietemplate from './Movietemplate'

function Fetch_data() {
    const [movie,setmovies] = useState([]);
    const [isLoading,setIsLoading]=useState(false)

            async function dipul(){
                setIsLoading(true)
                const a = await fetch("https://swapi.dev/api/films/");
                const b =  await a.json();
                const c = b.results
               setmovies(c)
               setIsLoading(false)
            }
            
    

  return (
   <>
    
  {isLoading && <p>loading..........</p>}
  {!isLoading && <Movietemplate moviev={movie} />}
   <button onClick={dipul}>change data</button>
   </>
  )
}

export default Fetch_data