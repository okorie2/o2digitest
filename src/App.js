import Logo from "./Assets/SVGs/logo.svg";
import FooterLogo from "./Assets/SVGs/footerlogo.svg";
import BrampEbike from "./Assets/SVGs/BrampEbike.svg";
import SmBike from "./Assets/SVGs/SmBike.svg";
import XsEbike from "./Assets/SVGs/XsEBike.svg";
import Avatar from "./Assets/SVGs/avatar.svg";
import RwEllipse from "./Assets/SVGs/RwEllipse.svg";

import "./App.css";
import Lottie from "react-lottie";
import HeaderLottie from "./Lotties/Header Lottie.json";
import RiderLottie from "./Lotties/Rider Lottie.json";
import Rider from "./Assets/Gifs/rider.gif";

import MdCard from "./Components/Cards/MdCard";
import SmCard from "./Components/Cards/SmCard";
import SearchIcon from "./Assets/SVGs/search.svg";
import ButtonHighlight from "./Components/Buttons/ButtonHighlight";
import Left from "./Assets/SVGs/left.svg";
import Right from "./Assets/SVGs/right.svg";
import LeftPear from "./Assets/SVGs/LeftPear.svg";
import RightPear from "./Assets/SVGs/RightPear.svg";
import EightDots from "./Assets/SVGs/8dotsforcard.svg";
import FourDots from "./Assets/SVGs/4dotsbelow.svg";
import BottomRightArrow from "./Assets/SVGs/bottomrightarrow.svg";
import TenDots from "./Assets/SVGs/10dotsbelow.svg";

function App() {
  const headerLottiedefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeaderLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const riderLottieDefaultoptions = {
    loop: true,
    autoplay: true,
    animationData: RiderLottie,
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
      <div className="v-ellipse"></div>
      <div className="intro">
        <div className="intro-text">
          <h1>Your Bike Electric Update</h1>
          <p>
            Dummy text progressive, and affordable healthcare, accessible on
            mobile and online for everyone
          </p>
          <div className="search-box">
            <div className="search-icon">
              <img src={SearchIcon} alt="search-icon" />
            </div>
            <div className="search-input">
              <input type="search" placeholder="Search Bike or anything " />
            </div>
            <div className="search-button">
              <ButtonHighlight text={"Find"} />
            </div>
          </div>
        </div>
        <div className="intro-header">
          <Lottie
            options={headerLottiedefaultOptions}
            height={411}
            width={411}
          />
        </div>
      </div>
      <div className="leftPear">
        <img src={LeftPear} />
      </div>
      <div className="md-grid-3">
        <MdCard
          title={"Brampoton eBike Kit"}
          price={"$750.00"}
          src={BrampEbike}
        />
        <MdCard
          title={"Brampoton eBike Kit"}
          price={"$750.00"}
          src={BrampEbike}
        />
        <div className="faded-card">
          <MdCard
            title={"Additional eBike Kit"}
            price={"$250.00"}
            src={BrampEbike}
          />
        </div>
      </div>
      <div className="arrows">
        <div className="arrow-left">
          <img src={Left} />
        </div>

        <div className="arrow-right">
          <img src={Right} />
        </div>
      </div>
      <div className="container">
        <h3>Other Type Of Bikes</h3>
        <div className="sm-grid-5">
          <SmCard src={SmBike} alt="Hybrid Bikes" title="Hybrid Bikes" />
          <SmCard src={XsEbike} alt="Fixie Bikes" title="Fixie Bikes" />
          <SmCard src={XsEbike} alt="Folding Bikes" title="Folding Bikes" />
          <SmCard src={XsEbike} alt="Mount Bikes" title="Mount Bikes" />
          <SmCard src={XsEbike} alt="City Bikes" title="City Bikes" />
        </div>
      </div>

      <div className="btm-grd">
        <div className="md-card">
          {/* <p className="card-title">title</p> */}
          <Lottie
            options={riderLottieDefaultoptions}
            height={242}
            width={230}
          />
          <div className="rule"></div>
          <div className="flx">
            <div>
              <p>Price</p>
              <p className="card-price">$750.00</p>
            </div>
            <div>
              <p></p>
              <ButtonHighlight text={"Order"} />
            </div>
          </div>
        </div>
        {/* <MdCard price={"$250.00"} src={Rider} /> */}
        <div className="rightPear">
          <img src={RightPear} width={582.71} />
        </div>
        <div className="txt">
          <h3>Hybrid Bikes</h3>
          <p>
            Dummy Text progressive, and affordable healthcare, accessible on
            mobile and online for everyone. To us, it’s <br />
            not just work. We take pride <br />
            in the solutions we deliver
          </p>
          <button className="btn-outline">Learn more</button>
        </div>
      </div>
      <div className="basic-crd">
        <div className="eightdots">
          <img src={EightDots} alt="eightdots" />
        </div>
        <h3>
          What our cus<span>tom</span>er are saying
        </h3>
        <div className="sm-grid-2">
          <div>
            <div>
              <img src={Avatar} alt="avatar" className="avatar" />{" "}
            </div>
            <div className="sub-title">
              <h4>Edward Newgate</h4>
              <p>Pro-Cycler</p>
            </div>
          </div>
          <div className="txt">
            <p>
              Dummy Text patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>
      <div className="bottomcarousel">
        <div className="fourdots">
          <img src={FourDots} />
        </div>
        <div className="bottomrightarrow">
          <img src={BottomRightArrow} />
        </div>
      </div>
      <div className="tendots">
        <img src={TenDots} />
      </div>
      <div className="footer">
        <div className="ft-grid">
          <div className="txt">
            <div>
              <img src={FooterLogo} alt="logo" />{" "}
            </div>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p>©eBike 2021. All rights reserved</p>
          </div>
          <div>
            <h4>Company</h4>
            <div>
              <p>Product</p>
            </div>
            <div>
              <p>Bike Type</p>
            </div>
            <div>
              <p>About us </p>
            </div>
            <div>
              <p>Contact</p>
            </div>
          </div>
          <div>
            <h4>Help</h4>
            <div>
              <p>Help center</p>
            </div>
            <div>
              <p>Contact support</p>
            </div>
            <div>
              <p>Instructions </p>
            </div>
            <div>
              <p>How it works</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
