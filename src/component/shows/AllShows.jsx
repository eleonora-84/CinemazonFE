import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Show from "./Show";
import "./showcard.css";

const fetchShows = async () => {
  return fetch("http://localhost:8080/api/shows/all/sorted")
}

export async function showsLoader(){
  const shows = await fetchShows()
    .then(res => res.json());
    console.log(shows);
    return shows;
}

const AllShows = () => {
  const showsData = useLoaderData();
  const [shows, setShows] = useState(showsData);
  const [day, setDay] = useState("all");

  const uniqueDays = Array.from(new Set(shows.map(s => s.day)));

  return (
    <div>
      <div className="filterByDay">
        <select
          name="allDays"
          className="allDays"
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="all">Scegli il giorno</option>
          {uniqueDays.map((d) => {
            return <option key={d} value={d}>
              {d}
            </option>
          })}
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
