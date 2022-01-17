import Logo from "./Assets/SVGs/logo.svg";
import BrampEbike from "./Assets/SVGs/BrampEbike.svg";
import SmBike from "./Assets/SVGs/SmBike.svg";

import "./App.css";
import Lottie from "react-lottie";
import HeaderLottie from "./Lotties/Header Lottie.json";
import MdCard from "./Components/Cards/MdCard";
import SmCard from "./Components/Cards/SmCard";
function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeaderLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="nav">
        <div>
          {" "}
          <img src={Logo} alt="logo" />{" "}
        </div>

        <div>Product</div>
        <div>Bike Type</div>
        <div>About us</div>
        <div>Testimonials</div>
        <div>Contact</div>
      </div>

      <div className="intro">
        <div className="intro-text">
          <h1>Your Bike Electric Update</h1>
          <p>
            Dummy text progressive, and affordable healthcare, accessible on
            mobile and online for everyone
          </p>
          <input type="search" placeholder="Search Bike or anything" />
        </div>
        <div className="intro-header">
          <Lottie options={defaultOptions} height={411} width={411} speed={2} />
        </div>
      </div>

      <div className="md-grid-3">
        <MdCard />
        <MdCard />
        <MdCard />
      </div>
      <div className="container">
        <h3>Other Type Of Bikes</h3>
        <div className="sm-grid-5">
          <SmCard />
          <SmCard />
          <SmCard />
          <SmCard />
          <SmCard />
        </div>
      </div>
    </div>
  );
}

export default App;
