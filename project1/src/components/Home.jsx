import React, { useState } from "react";
import { movies } from "../data.js";

const Home = () => {
  const [movieList, setMovieList] = useState(movies);
  
  const filterByCategory = (cat)=>{
     if(cat === "All"){
           setMovieList(movies);
     }
     else
       setMovieList(movies.filter((data)=>data.category == cat ));
  }



  return (
    <>
    <div className="mb-10 flex items-center justify-center gap-10 mt-10 font-bold">
        <button  onClick={()=> filterByCategory("All")} className=" border-2 border-[#2EB5AE] text-[#2EB5AE] px-4 py-1 rounded cursor-pointer">All</button>
        <button onClick={()=> filterByCategory("Action")} className="border-2 border-[#2066E2] text-[#2066E2] px-4 py-1 rounded cursor-pointer ">Action</button>
        <button onClick={()=> filterByCategory("Thriller")} className="border-2 border-[#6C6E6E] text-[#6C6E6E] px-4 py-1 rounded cursor-pointer ">Thriller</button>
        <button onClick={()=> filterByCategory("Animation")} className="border-2 border-[#0D573A] text-[#0D573A] px-4 py-1 rounded cursor-pointer ">Animation</button>
        <button onClick={()=> filterByCategory("Horror")} className="border-2 border-[#013522] text-[#013522] px-4 py-1 rounded cursor-pointer">Horror</button>
        <button onClick={()=> filterByCategory("Drama")} className="border-2 border-[#804E01] text-[#804E01] px-4 py-1 rounded cursor-pointer">Drama</button>
        <button onClick={()=> filterByCategory("Sci-Fi")} className="border-2 border-[#26C1DD] text-[#26C1DD] px-4 py-1 rounded cursor-pointer">Sci - Fi</button>
      </div>
    <div className="min-h-screen w-full flex items-center justify-center flex-wrap gap-20">
      
      {movieList.map((data) => {
        return (
          <div key={data.id}>
            <div className="w-52">
              <img
                className="h-{100%} w-[100%] rounded-2xl border-2 border-amber-500"
                src={data.poster_path}
                alt=""
              />
              <div className="text-md flex flex-col items-center font-semibold">
                <h1 className="mt-2">{data.title}</h1>
                <h1 className="mt-2">{data.release_date}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Home;
