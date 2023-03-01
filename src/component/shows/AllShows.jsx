import { useEffect, useState } from "react";
import Show from "./Show";
import "./showcard.css";

const AllShows = () => {
  const [shows, setShows] = useState([]);
  const [day, setDay] = useState("");

  useEffect(() => {
    async function fetchShows() {
      fetch("http://localhost:8080/api/shows/all/sorted")
        .then((response) => response.json())
        .then((data) => setShows(data))
        .then(
          shows.map((s) => {
            return {
              id: s.id,
              day: s.day,
              time: s.time,
              title: s.movie.title,
            }
          })
        )
    }
    setDay("all");
    fetchShows();
  }, []);

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
