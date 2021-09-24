import "../css/style.css"
import { useEffect, useState } from "react";

type IDog = {
  breed: string,
  example_image: string,
  vote_count: number
};

export default function Leaders(): JSX.Element {

  const [dogs, setDogs] = useState<IDog[]>();

  const getDogs = async () => {
    try {
      const response = await fetch(
        "https://guarded-savannah-68799.herokuapp.com/"
      );
      const jsonData = await response.json();
      setDogs(jsonData.dogData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);


    const [topDogs, setTopDogs] = useState<IDog[]>();
  
    const getTopDogs = async () => {
      try {
        const response = await fetch(
          "https://guarded-savannah-68799.herokuapp.com/top"
        );
        const jsonData = await response.json();
        setTopDogs(jsonData.dogData);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getTopDogs();
    }, []);
  
    function getAll () {
      getDogs();
      getTopDogs()
    }

  return (
    <section>
      {dogs && topDogs && (
        <div>
        <button className = "bigButtonLeaders" onClick={() => getAll()}>Fetch me the leaderboard</button>
      <section className = "leaders">
        <div className = "leadersLeft">
            <h2>Dog Board</h2>
           <ol>
             {dogs.map((dog, index) => (
              <li key={index}>
               <h3>{dog.breed}: {dog.vote_count}</h3>
              </li>
            ))}
          </ol>
        </div>
      <div className = "leadersRight">
        <h2>Top Dogs</h2>
        <ol>
          {topDogs.map((dog, index) => (
            <li key={index}>
              <h1>{dog.breed}:{dog.vote_count}</h1>
             <img src={dog.example_image} alt ="top doggo" width = "90%"/>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </div>
    )}
    </section>
  );
}