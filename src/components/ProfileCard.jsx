import "./ProfileCard.css";
// eslint-disable-next-line react/prop-types
const ProfileCars = ({ ele }) => {
  // eslint-disable-next-line react/prop-types
  const { title, twiter, dis, img } = ele;
  return (
    <div className="ProfileCard">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <h4 className="heading">{title}</h4>
      <h6>{twiter}</h6>
      <p>{dis}</p>
    </div>
  );
};

export default ProfileCars;
