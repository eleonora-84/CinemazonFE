import { useEffect, useState } from "react";
import Show from "./Show";
import "../../styles/card.css";

const AllShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchShows() {
      const response = await fetch("http://localhost:8080/api/shows/all");
      const data = await response.json();
      const transfData = data.map((s) => {
        return {
          id: s.id,
          day: s.day,
          time: s.time,
          title: s.movie.title,
        };
      });
      setShows(transfData);
    }
    fetchShows();
  }, []);

  return (
    <div className="allShows">
      {shows.map((s, index) => (
        <Show day={s.day} time={s.time} title={s.title} key={index} />
      ))}
    </div>
  );
};
export default AllShows;
