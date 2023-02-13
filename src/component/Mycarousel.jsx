import Carousel from "react-bootstrap/Carousel";

const Mycarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/500/430"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/500/430"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/500/430"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Mycarousel;
