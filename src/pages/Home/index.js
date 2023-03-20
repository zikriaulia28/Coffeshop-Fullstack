/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React, { Component, Fragment } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import withSearchParams from "../../utils/wrapper/withSearchParams"
import styles from "../../styles/home.module.css"


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <section className={`${styles["container-home"]}`}>
            <div className={`${styles["home-wrapper"]}`}>
              <h1 className="title">Start Your Day with <br /> Coffee and Good Meals</h1>
              <p className="desc">We provide high quality beans, good taste, and healthy <br /> meals made by love just for you.
                Start your
                day with us <br /> for a bigger smile!</p>
              <button className="get pointer">Get Started</button>
            </div>
          </section>
          <section className="container-benefit">
            <div className="card">
              <div className="staff">
                <div className="img">
                  <img fetchpriority="low" src="./assets/people.svg" alt="icon" />
                </div>
                <div className="txt">
                  <p className="number">90+</p>
                  <p className="name">Staff</p>
                </div>
              </div>
              <div className="stores">
                <div className="img">
                  <img fetchpriority="low" src="./assets/location.svg" alt="icon" />
                </div>
                <div className="txt">
                  <p className="number">30+</p>
                  <p className="name">Stores</p>
                </div>
              </div>
              <div className="customers">
                <div className="img">
                  <img fetchpriority="low" src="./assets/love.svg" alt="icon" />
                </div>
                <div className="txt">
                  <p className="number">800+</p>
                  <p className="name">Customers</p>
                </div>
              </div>
            </div>
            <div className="benefit-wrapper">
              <div className="img"><img src="./assets/benefit.webp" alt="benefit" /></div>
              <div className="benefit">
                <h1 className="title">We Provide Good Coffee <br /> and Healthy Meals</h1>
                <p className="desc">You can explore the menu that we provide with fun and <br /> have their own taste and make your
                  day better.</p>
                <ul className="benefit-list">
                  <li>
                    <div className="container-img">
                      <img src="./assets/check-list.svg" alt="checklist" />
                    </div>
                    <p>High quality beans</p>
                  </li>
                  <li>
                    <div className="container-img">
                      <img src="./assets/check-list.svg" alt="checklist" />
                    </div>
                    <p>Healthy meals, you can request the ingredients</p>
                  </li>
                  <li>
                    <div className="container-img">
                      <img src="./assets/check-list.svg" alt="checklist" />
                    </div>
                    <p>Chat with our staff to get better experience for ordering</p>
                  </li>
                  <li>
                    <div className="container-img">
                      <img src="./assets/check-list.svg" alt="checklist" />
                    </div>
                    <p>Free member card with a minimum purchase of IDR 200.000.</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="container-favorite">
            <h1 className="title">Here is People’s Favorite</h1>
            <p className="desc">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
            <div className="card-favorite">
              <div className="card-wrapper">
                <div className="card-top">
                  <div className="img style-img1">
                  </div>
                  <h2 className="name">Hazelnut Latte</h2>
                  <div className="fav-list">
                    <ul>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>HazelnutSyrup</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Wanilla Whipped Cream</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Ice / Hot</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Sliced Banana on Top</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="price">IDR 25.000</div>
                  <button className="order pointer">Order Now</button>
                </div>
              </div>
              <div className="card-wrapper">
                <div className="card-top">
                  <div className="img style-img2">
                  </div>
                  <h2 className="name">Pinky Promise</h2>
                  <div className="fav-list">
                    <ul>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>1 Shot of Coffee</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Vanilla Whipped Cream</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Chocolate Biscuits</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Strawberry Syrup</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Sliced strawberry on Top</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="price">IDR 30.000</div>
                  <button className="order pointer">Select</button>
                </div>
              </div>
              <div className="card-wrapper">
                <div className="card-top">
                  <div className="img style-img3">
                  </div>
                  <h2 className="name">Chicken Wings</h2>
                  <div className="fav-list">
                    <ul>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Wings</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Drum Sticks</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Mayonaise and Lemon</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Hot Fried</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Secret Recipe</p>
                      </li>
                      <li>
                        <div className="img-fav">
                          <img fetchpriority="low" src="./assets/checklist.svg" alt="checklist" />
                        </div>
                        <p>Buy 1 Get 1 only for Dine in</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="price">IDR 40.000</div>
                  <button className="order pointer">Select</button>
                </div>
              </div>
            </div>
          </section>
          <section className="container-partner">
            <div className="partner-wrapper">
              <h1 className="title">Visit Our Store in the <br /> Spot on the Map Below</h1>
              <p className="desc">See our store in every city on the spot and spen your good day there. See <br /> you soon!</p>
              <div className="map"><img fetchpriority="low" src="./assets/map.svg" alt="map" /></div>
            </div>
          </section>
          <section className="container-testimoni">
            <div className="partners">
              <h2 className="title-partner">Our Partner</h2>
              <ul className="sponsor">
                <li><img fetchpriority="low" src="./assets/netflix.webp" alt="netflix" /></li>
                <li><img fetchpriority="low" src="./assets/reddit.webp" alt="reddit" /></li>
                <li><img fetchpriority="low" src="./assets/amazon.webp" alt="amazon" /></li>
                <li><img fetchpriority="low" src="./assets/discord.webp" alt="discord" /></li>
                <li><img fetchpriority="low" src="./assets/spotify.webp" alt="spotify" /></li>
              </ul>
            </div>
            <h1 className="title">Loved by Thousands of <br /> Happy Customer</h1>
            <p className="desc">These are the stories of our customers who have visited us with great <br /> pleasure.</p>
            <div className="card-wrapper">
              <div className="card">
                <div className="header">
                  <div className="profile">
                    <div className="img">
                      <img fetchpriority="low" src="./assets/testi1.webp" alt="profile" />
                    </div>
                    <div className="txt">
                      <h2>Viezh Robert</h2>
                      <p>Warsaw, Poland</p>
                    </div>
                  </div>
                  <div className="rate">
                    <p>4.5</p>
                    <div className="container-star">
                      <img fetchpriority="low" src="./assets/star.svg" alt="star" />
                    </div>
                  </div>
                </div>
                <div className="card-desc">
                  <p>“Wow... I am very happy to spend my whole <br /> day here. the Wi-fi is good, and the coffee and <br />
                    meals
                    tho. I like it here!! Very recommended!"</p>
                </div>
              </div>
              <div className="card">
                <div className="header">
                  <div className="profile">
                    <div className="img">
                      <img fetchpriority="low" src="./assets/testi2.webp" alt="profile" />
                    </div>
                    <div className="txt">
                      <h2>Yessica Christy</h2>
                      <p>Shanxi, China</p>
                    </div>
                  </div>
                  <div className="rate">
                    <p>4.5</p>
                    <div className="container-star">
                      <img fetchpriority="low" src="./assets/star.svg" alt="star" />
                    </div>
                  </div>
                </div>
                <div className="card-desc">
                  <p>“I like it because I like to travel far and still can <br />
                    make my day better just by drinking their <br />
                    Hazelnut Latte"</p>
                </div>
              </div>
              <div className="card">
                <div className="header">
                  <div className="profile">
                    <div className="img">
                      <img fetchpriority="low" src="./assets/testi3.webp" alt="profile" />
                    </div>
                    <div className="txt">
                      <h2>Kim Young Jou</h2>
                      <p>Seoul, South Korea</p>
                    </div>
                  </div>
                  <div className="rate">
                    <p>4.5</p>
                    <div className="container-star">
                      <img fetchpriority="low" src="./assets/star.svg" alt="star" />
                    </div>
                  </div>
                </div>
                <div className="card-desc">
                  <p>“This is very unusual for my taste, I haven’t <br /> liked coffee before but their coffee is the <br /> best!
                    and yup,
                    you have to order the chicken <br /> wings, the best in town!</p>
                </div>
              </div>
            </div>
            <div className="pagination">
              <div className="left">
                <div className="page-active"></div>
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
              </div>
              <div className="right">
                <div className="btn arrow-left">
                  <div className="btn-circle">
                    <img fetchpriority="low" src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </div>
                <div className="btn arrow-right">
                  <div className="btn-circle">
                    <img fetchpriority="low" src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-promo">
              <div className="promoLeft">
                <h2 className="titlePromo">Check our promo <br /> today!</h2>
                <p className="descPromo">Let's see the deals and pick yours!</p>
              </div>
              <div className="promoRight">
                <button className="seePromo pointer">See Promo</button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </ Fragment>
    );
  }
}


export default withSearchParams(Home);