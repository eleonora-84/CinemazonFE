import "../../styles/show.css";
import MyOffCanvas from "./MyOffCanvas";

const SingleShow = (props) => {

  return (
    <div className="buy">
      {/* <h2>{props.movie.title}</h2> */}
      <h2>Acquista il tuo biglietto</h2>
        <MyOffCanvas />
      </div>
  );
};
export default SingleShow;
