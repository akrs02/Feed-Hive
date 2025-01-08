import {useEffect, useState} from 'react';
import axios from "axios";
import Feed from './Feed';

function App() {
  const [articles,setArticles]=useState([]);

  async function getArticles(){
    try{
      const res=await axios.get("http://localhost:4000/");
      setArticles(res.data);
    }catch(error)
    {
      console.log(error);
    }
  }
  useEffect(()=>{getArticles()
  },[])
  
  return (
    <>
      <h1 className='Heading'>Feed-Hive</h1>
      <h2 className='Heading'>Good Morning, Ayush</h2>
      <div className="Content">
        <img src="https://gamerant.com/public/build/images/gr-logo-full-colored-light.svg?v=3.0" className="Logo"/>
      {articles.map((items,index)=>{
        return <Feed
        key={index}
        title={items.item.title}
        link={items.item.link}
        date={items.item.pubDate}
        />
      })}
      </div>
      </>
  )
}

export default App
