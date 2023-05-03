import React from 'react'
import { useEffect,useState } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

const Search = ({setdetaildata}) => {
    const top_search = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"20px"
    }
    const [name, setname] = useState();
    const [alluser,setuserdata] = useState([]);

    // useEffect(() => {   
    //     const getData = async () => {
    //           const res = await fetch(`https://api.github.com/search/users?q=${name}`);
    //           const data = await res.json();
    //           setuserdata(data.items);
    //       }
    //       // call the function
    //       getData()
    //         // make sure to catch any error
    //         .catch(console.error);
    //     // console.log(alluser);
    // }, [name])

    const set_data = ()=>{
        const fetchData = async () => {
          if(name == ''){
                        return;
                    }
                    else{
            const res = await fetch(`https://api.github.com/search/users?q=${name}`);
            const data = await res.json();
            setuserdata(data.items); 
                    }  
            
          }
          // call the function
          fetchData()
            // make sure to catch any error
            .catch(console.error);
        // console.log(alluser)
        // alert();
    }

  return (
    <div>
      <Navbar />
        <div style={top_search}>
            <input type="text" placeholder="search github username name" onChange={(e)=>{setname(e.target.value)}} style={{padding:"10px",width:"40%"}}/>
            <button id="btn_search" style={{borderRadius:"none"}} onClick={set_data}>Search</button>
        </div>
        <div style={{display:"flex",flexWrap:"wrap",padding:"35px"}}>
        {name == '' ? <h2> I am waiting your search username ...</h2> : alluser.map((e)=>{
            return(
              <Link to='/details'>
              <div style={{width:"20%"}} onClick={()=>setdetaildata(e)}>
                    <img src={e.avatar_url} alt="img" style={{width:"200px"}} />
                    <h3>{e.login}</h3>
                    </div>
              </Link>
                
            )
        })}
       
        </div>
        
    </div>
  )
}

export default Search