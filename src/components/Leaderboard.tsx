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

  return (
    <section className="link-list">
      {dogs && (
        <div>
       <button className = "bigButtonLeaders" onClick={() => getDogs()}>Fetch me the leaderboard</button>
        <div className = "leaderboard">
          <h2>Dog Board</h2>
          <ol>
            {dogs.map((dog, index) => (
              <li key={index}>
               <h3>{dog.breed}: {dog.vote_count}</h3>
              </li>
            ))}
          </ol>
        </div>
        </div>
      )}
    </section>
  );
}