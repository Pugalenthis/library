import { useState } from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Createmovie } from "./Createmovie";

export function Getmovie() {
  const initialmovies = [
    {
      mname: "jaibhim",
      mposter: "https://www.livelaw.in/h-upload/2021/11/03/1600x960_403473-jai-bhim.jpg",
      mrating: "6",
      msummary: "One of the exceptional, outstanding movies of Hot Chocolate, Hot Shot, Actor Suriya (Younger Killer Looks). Court drama that is so thoroughly astonishing & engaging right from the start of the movie. Distinctively unique, even from the very first 5-10 minutes. Definitely from the lines of  I am getting used to the recent cinematic legal works such as Nerkonda Paarvai, Ponmagal Vandhal etc,",
    },
    {
      mname: "mudhal ne mudivum nee",
      mposter: "https://i.ytimg.com/vi/sXUYrC5WgFI/maxresdefault.jpg",
      mrating: "8",
      msummary: "One of the exceptional, outstanding movies of Hot Chocolate, Hot Shot, Actor Suriya (Younger Killer Looks). Court drama that is so thoroughly astonishing & engaging right from the start of the movie. Distinctively unique, even from the very first 5-10 minutes. Definitely from the lines of  I am getting used to the recent cinematic legal works such as Nerkonda Paarvai, Ponmagal Vandhal etc,",
    },
  ]


  // function createmovie() {
  //   console.log(imovies);
  //   console.log(moviename);
  //   console.log(movieposter);
  //   console.log(movierating);
  //   console.log(moviesummary);
  //   console.log(moviename);
  // }
  const [imovies, setimovies] = useState(initialmovies);
  const [moviename, setmoviename] = useState("");
  const [movieposter, setmovieposter] = useState("");
  const [movierating, setmovierating] = useState("");
  const [moviesummary, setmoviesummary] = useState("");
  return (
    <div>
      {/* <input placeholder="enter movie name"
              
            ></input> */}
      {/* <FormControl>
        <InputLabel onChange={(event) => {
          setmoviename(event.target.value);
        }} htmlFor="component-outlined">enter movie name</InputLabel>
        <OutlinedInput
          id="component-outlined"

          label="Name" />
      </FormControl> */}
      <input placeholder="enter movie url"
        onChange={(event) => {
          setmoviename(event.target.value);
        }}
      ></input>

      <br></br>
      <input placeholder="enter movie url"
        onChange={(event) => {
          setmovieposter(event.target.value);
        }}
      ></input>
      <br></br>

      <input
        onChange={(event) => {
          setmovierating(event.target.value);
        }}
      ></input>      <br></br>
      <input
        onChange={(event) => {
          setmoviesummary(event.target.value);
        }}
      ></input>
      <br></br>
      <button
        onClick={() => {
          const newmovie = {
            mname: moviename,
            mposter: movieposter,
            mrating: movierating,
            msummary: moviesummary,
          };
          setimovies([...imovies, newmovie]);
          console.log(imovies);
          console.log(newmovie);
        }
          // createmovie(moviename, movieposter, movierating, moviesummary)
        }
      >
        Submit
      </button>

      {imovies.map((value, index) => {
        return <Createmovie
          movname={value.mname}
          // mposter={value.mposter}
          movrating={value.mrating}
          movsummary={value.msummary}
          deletebuttonindex={index}
          imovies={imovies}
          setimovies={setimovies} />;


      })}
    </div>

  );
}
