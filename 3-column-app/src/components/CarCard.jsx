const CarCard = ({ car }) => {
  return (
    <article className="car-card" style={{ backgroundColor: car.color }}>
      <figure className="car-figure">
        <img alt={`${car.title}_logo`} src={car.icon} className="car-icon" />
      </figure>
      <h2 className="car-title">{car.title.toUpperCase()}</h2>
      <p className="car-desc">{car.desc}</p>
      <a className="car-link" style={{ color: car.color }} href="#">
        Learn More
      </a>
    </article>
  );
};

export default CarCard;
