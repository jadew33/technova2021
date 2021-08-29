import icon from "../assets/icon.svg";
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__left">
        <img src={icon} />
        <h1>AniPals</h1>
      </div>
      <div className="nav__right">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <div>
          <i className="fas fa-hand-holding-usd" />
          Donate
        </div>
      </div>
    </div>
  );
};

export default Nav;
