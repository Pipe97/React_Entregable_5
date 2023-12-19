import "../css/Home.css";
import InputName from "../components/InputName";
import FooterHome from "../components/FooterHome";

const Home = () => {
  return (
    <div className="pokedex__home-container">
      <div className="container-info">
        <div className="logo-container">
          <img src="/logo-pokedex.png" alt="pokedex" />
        </div>

        <div className="container_text">
          <h1 className="home__title">¡Hola entrenador!</h1>
          <h2 className="home__description">
            Para poder comenzar, dame tu nombre
          </h2>
        </div>
        <InputName />
      </div>
      <FooterHome />
    </div>
  );
};

export default Home;
