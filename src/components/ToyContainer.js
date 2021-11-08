import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {
  console.log(toys)
  return (
    <div id="toy-collection">
      {
        (!toys) ? <h2>loading</h2>: null
      }
      {
      toys.map((toy)=>{
        return <ToyCard toy={toy} key={toy.id} setToys={setToys} toys={toys}/>
      })
    }</div>
  );
}

export default ToyContainer;
