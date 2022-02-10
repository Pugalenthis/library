import { useState } from "react";





export function Createmovie({ movname, movrating, movsummary, deletebuttonindex, imovies, setimovies }) {
  console.log(movname);
  // console.log(mposter);
  console.log(movrating);
  console.log(deletebuttonindex);
  console.log(movsummary);
  console.log(imovies);
  console.log(setimovies);

  let like = 1;
  let unlike = 1;
  const [likeup, setlikeup] = useState(like);
  const [likedown, setlikedown] = useState(unlike);
  return (
    // <div>
    //   <h1></h1>
    //   <img src="https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg"></img>
    //   <p>6</p>
    //   <p>pugal</p>
    // </div>
    <div>
      <h1>{movname}</h1>
      <img alt="name" src="https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg"></img>
      <p>{movrating}</p>
      <p>{movsummary}</p><i onClick={() => {
        const copyimovies = [...imovies];
        copyimovies.splice(deletebuttonindex, 1);
        setimovies(copyimovies);
      }} className="bi bi-trash3-fill"></i>
      <i onClick={() => {
        setlikeup(likeup + 1);
      }} class="bi bi-hand-thumbs-up">{likeup}</i>
      <i onClick={() => {
        setlikedown(likedown + 1);
      }} class="bi bi-hand-thumbs-down">{likedown}</i>
    </div>
  );
}
