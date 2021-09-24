import { useState, useEffect } from "react";
import "../css/style.css"


const TwoDogs = ():JSX.Element => {


    const [link1, setLink1] = useState("https://warm-brushlands-45153.herokuapp.com/lbCx")
    const [link2, setLink2]= useState("https://warm-brushlands-45153.herokuapp.com/lbCx")

    const handleVoteDog = async (link: string) => {
      const url = new URL(link)
      const breedName = url.pathname.split("/")[2]
      const imageLink = link
        try {
           await fetch("https://guarded-savannah-68799.herokuapp.com/", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                  breed: breedName,
                  exampleImage: imageLink,
                })
              })
              console.log(breedName)
              console.log(imageLink)
        }
         catch (err) {
          console.error(err);
        }
        getLinks()
      };


    const getLinks = async () => {
        try {
          const response = await fetch("https://dog.ceo/api/breeds/image/random");
          const jsonData1 = await response.json();
            setLink1(jsonData1.message)
        } catch (err) {
          console.error(err);
        }
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const jsonData2 = await response.json();
              setLink2(jsonData2.message)
          } catch (err) {
            console.error(err);
          }
      };

      if (link1 === "https://warm-brushlands-45153.herokuapp.com/lbCx"){
        return(
            <div>
                <button className = "bigButtonGet" onClick = {()=>getLinks()}>GET ME DOGS!!</button>
                <div className ="doggoPics">
                    <img className = "doggoPic" src = {link1} alt ="doggo" width ="300"/>
                    <img className = "doggoPic" src = {link2} alt ="doggo" width ="300"/>
                </div>
            </div>
    )}
    else {
        return (
            <div>
            <div className ="doggoPics">
                <img className = "doggoPic" src = {link1} alt ="doggo" width ="300"/>
                <img className = "doggoPic" src = {link2} alt ="doggo" width ="300"/>
            </div>
            <div className ="buttons">
            <button className = "button" onClick = {()=>handleVoteDog(link1)}>Updog this vote</button>
            <button className = "button" onClick = {()=>handleVoteDog(link2)}>Updog this vote</button>
            </div>
        </div>
            )}
      }


export default TwoDogs;