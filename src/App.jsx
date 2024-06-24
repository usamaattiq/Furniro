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

// http://jsonblob.com/1254787910447521792

import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

// import star from <FontAwesomeIcon icon="fa-solid fa-star" />

function App() {
  const [productData, setProductData] = useState();

  const heading = "this is my heading";

  useEffect(() => {
    fetch("https://jsonblob.com/api/jsonBlob/1254787910447521792").then(
      async (res) => {
        const abc = await res.json();
        setProductData(abc);
        // Ratings(abc.rating);
        // console.log(abc);
      }
    );
  }, []);

  const Ratings = (length) => {
    let stars = [];
    for (let index = 1; index <= 5; index++) {
      stars.push(
        <FaStar size={18} color={index <= length ? "#FFC700" : "#cccccc"} />
      );
    }
    return stars;
  };

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
            <p className="productName">{productData?.title}</p>
            <p className="price">{productData?.price}</p>
            <div className="rating">
              <div className="star">
                {Ratings(productData?.rating)}
                {/* <FaStar size={18} color="#FFC700" />
                <FaStar size={18} color="#FFC700" />
                <FaStar size={18} color="#FFC700" />
                <FaStar size={18} color="#FFC700" />
                <FaStar size={18} color="#FFC700" /> */}
                {/* {FaStar({
                  size: 18,
                  color: "#FFC700",
                })} */}
              </div>
              <img src={line} alt="" />
              <div className="reviews">
                <a href="">{productData?.reviews?.length} Customer Reviews</a>
              </div>
            </div>
            <p className="desc">{productData?.short_description}</p>
            <p className="s">Size</p>
            <div className="size">
              <button className="sizeBtn">L</button>
              <button className="sizeBtn">XL</button>
              <button className="sizeBtn">XS</button>
            </div>
            <p className="c">Color</p>
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
