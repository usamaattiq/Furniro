import menu from "./menu.svg";
import "./App.css";
import frame from "./frame.svg";
import leftBig from "./leftBig.svg";
import exit from "./exit.svg";
import { Header } from "./components/Header";
import left1 from "./left1.svg";
import left2 from "./left2.svg";
import left3 from "./left3.svg";
import left4 from "./left4.svg";
import arrow from "./arrow.svg";
import line from "./line.svg";
import account from "./account.svg";
import search from "./search.svg";
import heart from "./heart.svg";
import shop from "./shop.svg";

import { FaStar } from "react-icons/fa";

// import star from <FontAwesomeIcon icon="fa-solid fa-star" />

function App() {
  const heading = "this is my heading";
  return (
    <>
      {/* <Header title={heading} /> */}

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        <div className="container">
          <a href="">
            <img src={frame} alt="" />
          </a>
          <img className="menuBtn" src={menu} alt="" />

          <div className="menu">
            <img className="exitBtn" src={exit} alt="" />
            <ul className="menuBar">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>

          <ul className="menuFeature">
            <li>
              <a href="">
                <img src={account} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={search} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={heart} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={shop} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section className="section1">
        <div className="home">
          <p className="p1">Home</p>
          <img src={arrow} alt="" />
          <p className="p1">Shop</p>
          <img src={arrow} alt="" />
          <img src={line} alt="" />
          <p className="asgaard">Asgaard Sofa</p>
        </div>
      </section>

      <section className="section2">
        <div className="container">
          <div className="left_col">
            <ul>
              <li>
                <a href="">
                  <img src={left1} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={left2} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={left3} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={left4} alt="" />
                </a>
              </li>
            </ul>
            <img className="leftBig" src={leftBig} alt="" />
          </div>

          <div className="right_col">
            <p className="productName">Asgaard Sofa</p>
            <p className="price">Rs.250,000.00</p>
            <div className="star">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
            </div>
            <p className="desc">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <p className="s">Size</p>
            <div className="size">
              <button className="sizeBtn">L</button>
              <button className="sizeBtn">XL</button>
              <button className="sizeBtn">XS</button>
            </div>
            <p>Color</p>
            <div className="color">
              <button className="color1"></button>
              <button className="color2"></button>
              <button className="color3"></button>
            </div>

            <div className="row">
              <div className="count">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>

              <button className="addToCart">
                <p>Add To Cart</p>
              </button>

              <button className="compare">
                <p>Compare</p>
              </button>
            </div>
            <hr className="line" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
