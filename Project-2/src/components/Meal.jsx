import React, { useEffect, useState } from "react";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("indian");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data.meals);
      setMealData(data.meals);
    };
    fetchDataFromApi();
  }, [area]);

  const submitHandler = async(e) => {
    e.preventDefault();
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
      );
      const data = await api.json();
      console.log(data.meals);
      setMealData(data.meals);
      setInputData("");
    };
  return (
    <>
      <div className="mb-10 flex items-center justify-center gap-10 mt-10 font-bold">
        <button
          onClick={() => setArea("Indian")}
          className=" border-2 border-[#2EB5AE] text-[#2EB5AE] px-4 py-1 rounded cursor-pointer"
        >
          Indian
        </button>
        <button
          onClick={() => setArea("Canadian")}
          className="border-2 border-[#2066E2] text-[#2066E2] px-4 py-1 rounded cursor-pointer "
        >
          Canadian
        </button>
        <button
          onClick={() => setArea("American")}
          className="border-2 border-[#6C6E6E] text-[#6C6E6E] px-4 py-1 rounded cursor-pointer "
        >
          American
        </button>
        <button
          onClick={() => setArea("Thai")}
          className="border-2 border-[#0D573A] text-[#0D573A] px-4 py-1 rounded cursor-pointer "
        >
          Thai
        </button>
        <button
          onClick={() => setArea("British")}
          className="border-2 border-[#013522] text-[#013522] px-4 py-1 rounded cursor-pointer"
        >
          British
        </button>
        <button
          onClick={() => setArea("Russian")}
          className="border-2 border-[#804E01] text-[#804E01] px-4 py-1 rounded cursor-pointer"
        >
          Russian
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center gap-10"
      >
        <input
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          type="search"
          className="border-2 border-white rounded px-1 w-90 py-2 focus:outline-none bg-zinc-900"
        />
    
      </form>
      <div className="flex items-center p-20 gap-20 justify-center flex-wrap">
        {mealData.map((data, index) => {
          return (
            <div key={index} className="">
              <div className="">
                <img
                  src={data.strMealThumb}
                  alt=""
                  className="w-62 rounded-xl border-2 border-blue-500 border-solid"
                />
                <h1 className="w-52 text-center mt-2">{data.strMeal}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Meal;
