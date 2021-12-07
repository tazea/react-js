import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="headerBackground">
        <img className="headerImg" src="../assets/Header/drifting-car-min.jpg" alt="Podium" />
      </div>
      <div className="headerText">
        <h1>Podium</h1>
        <p>
          Cutting Edge Race Simulation Solutions. Innovation, development and consistent
          high-quality are top priorities of our team.
        </p>
      </div>
    </div>
  );
};

export default Header;
