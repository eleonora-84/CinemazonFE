import { useEffect, useState } from "react";
import Show from "./Show";
import "./showcard.css";

const AllShows = () => {
  const [shows, setShows] = useState([]);
  const [day, setDay] = useState("");
  let singleDay = new Array();

  
  // const checkDay = () => {
  //   shows.map((s) => {
  //     if(singleDay.includes(s.day)){

  //     } else {
  //       singleDay.push(s.day);
  //       console.log(singleDay);
  //       return singleDay;
  //     }
  //   })
  // }

  useEffect(() => {
    async function fetchShows() {
      fetch("http://localhost:8080/api/shows/all")
        .then((response) => response.json())
        .then((data) => setShows(data))
        .then(
          shows.map((s) => {
            return {
              id: s.id,
              day: s.day,
              time: s.time,
              title: s.movie.title,
            };
          })
        )
        // .then(
        //   shows.map((s) => {
        //     if(singleDay.includes(s.day)){
        //       console.log(typeof singleDay)
        //     } else {
        //       singleDay.push(s.day);
        //       return singleDay;
        //     }
        //   }
        //   )
        // )
        .then(console.log(shows))
        .then(console.log(singleDay))
        .then();
    }
    setDay("all");
    fetchShows();
  }, []);


  return (
    <div>
      <div className="filterByDay">
        Filtra per giorno: 
        <select
          name="allDays"
          className="allDays"
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="all">Scegli il giorno</option>
          {shows.map((s, index) => (
            <option key={index} value={s.day}>
              {s.day}
            </option>
          ))}
          
        </select>

      </div>
      <div className="allShows">
        {shows.map((s, index) => {
          if (s.day == day) {
            return (
              <Show
                day={s.day}
                time={s.time}
                title={s.movie.title}
                key={index}
              />
            );
          } else if (day === "all") {
            return (
              <Show
                day={s.day}
                time={s.time}
                title={s.movie.title}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default AllShows;
