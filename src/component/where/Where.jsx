import "./where.css";

const Where = () => {
  return (
    <div className="where">
      <h2>COME RAGGIUNGERCI</h2>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=studio%20ghibli%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Where;
