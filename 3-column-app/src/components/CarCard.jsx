const CarCard = ({ color }) => {
  return (
    <div className="car-card" style={{ backgroundColor: color }}>
      <figure className="car-figure">
        <img
          alt="icon"
          src="https://dummyimage.com/100/"
          className="car-icon"
        />
      </figure>
      <h1 className="car-h1">CAR</h1>
      <p className="car-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam
        totam eaque eveniet quasi voluptatem nulla placeat sequi natus dolorem
        atque ipsa deserunt, excepturi commodi ipsum numquam id adipisci nemo!
      </p>
      <a className="car-link" style={{ color: color }}>
        Learn More
      </a>
    </div>
  );
};

export default CarCard;
