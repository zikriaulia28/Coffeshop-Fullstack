import React, { useEffect } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"


function History() {
  useEffect(() => {
    document.title = "Coffe Shop - History";
  }, [])
  return (
    <>
      <Header />
      <main>
        <section className="p-10 xl:px-16 w-full bg-[url(../assets/bg-history.webp)] bg-cover">
          <h1 className="text-center text-3xl text-bgsecondary">Let’s see what you have bought!</h1>
          <p className="text-center text-bgsecondary text">Select item to delete</p>
          <div className="flex justify-end text-bgsecondary gap-4 mb-5">
            <p className="select pointer" id="btnSelect">Select All</p>
            <p className="delete pointer" id="btnDelete">Delete</p>
          </div>
          <div
            className="grid grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 place-items-center gap-5 grid-rows-[auto] card-container">
            <div className="flex rounded-[20px] p-6 h-[126px] w-max  bg-bgsecondary gap-5 card">
              <div
                className="w-[75px] h-[75px] rounded-[50%] bg-150% bg-[position:-17px_-39px] bg-[url('../assets/product-history.webp')]">
              </div>
              <div className="desc">
                <div className="card-title">
                  <h1 className="text-2xl">Veggie tomato mix</h1>
                </div>
                <div className="status">
                  <div className="status-top">
                    <p className="price">IDR 34.000</p>
                  </div>
                  <div className="flex justify-between status-bottom">
                    <p className="txt">Delivered</p>
                    <input type="checkbox" value="1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-[20px] p-6 h-[126px] w-max  bg-bgsecondary gap-5 card">
              <div
                className="w-[75px] h-[75px] rounded-[50%] bg-150% bg-[position:-17px_-39px] bg-[url('../assets/product-history.webp')]">
              </div>
              <div className="desc">
                <div className="card-title">
                  <h1 className="text-2xl">Veggie tomato mix</h1>
                </div>
                <div className="status">
                  <div className="status-top">
                    <p className="price">IDR 34.000</p>
                  </div>
                  <div className="flex justify-between status-bottom">
                    <p className="txt">Delivered</p>
                    <input type="checkbox" value="2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-[20px] p-6 h-[126px] w-max  bg-bgsecondary gap-5 card">
              <div
                className="w-[75px] h-[75px] rounded-[50%] bg-150% bg-[position:-17px_-39px] bg-[url('../assets/product-history.webp')]">
              </div>
              <div className="desc">
                <div className="card-title">
                  <h1 className="text-2xl">Veggie tomato mix</h1>
                </div>
                <div className="status">
                  <div className="status-top">
                    <p className="price">IDR 34.000</p>
                  </div>
                  <div className="flex justify-between status-bottom">
                    <p className="txt">Delivered</p>
                    <input type="checkbox" value="3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-[20px] p-6 h-[126px] w-max  bg-bgsecondary gap-5 card">
              <div
                className="w-[75px] h-[75px] rounded-[50%] bg-150% bg-[position:-17px_-39px] bg-[url('../assets/product-history.webp')]">
              </div>
              <div className="desc">
                <div className="card-title">
                  <h1 className="text-2xl">Veggie tomato mix</h1>
                </div>
                <div className="status">
                  <div className="status-top">
                    <p className="price">IDR 34.000</p>
                  </div>
                  <div className="flex justify-between status-bottom">
                    <p className="txt">Delivered to Table 4</p>
                    <input type="checkbox" value="4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-[20px] p-6 h-[126px] w-max  bg-bgsecondary gap-5 card">
              <div
                className="w-[75px] h-[75px] rounded-[50%] bg-150% bg-[position:-17px_-39px] bg-[url('../assets/product-history.webp')]">
              </div>
              <div className="desc">
                <div className="card-title">
                  <h1 className="text-2xl">Veggie tomato mix</h1>
                </div>
                <div className="status">
                  <div className="status-top">
                    <p className="price">IDR 34.000</p>
                  </div>
                  <div className="flex justify-between status-bottom">
                    <p className="txt">Delivered to Table 5</p>
                    <input type="checkbox" value="5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-[20px] p-6 h-[126px] w-max  bg-bgsecondary gap-5 card">
              <div
                className="w-[75px] h-[75px] rounded-[50%] bg-150% bg-[position:-17px_-39px] bg-[url('../assets/product-history.webp')]">
              </div>
              <div className="desc">
                <div className="card-title">
                  <h1 className="text-2xl">Veggie tomato mix</h1>
                </div>
                <div className="status">
                  <div className="status-top">
                    <p className="price">IDR 34.000</p>
                  </div>
                  <div className="flex justify-between status-bottom">
                    <p className="txt">Delivered to Table 6</p>
                    <input type="checkbox" value="6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-[20px] p-6 h-[126px] w-max  bg-bgsecondary gap-5 card">
              <div
                className="w-[75px] h-[75px] rounded-[50%] bg-150% bg-[position:-17px_-39px] bg-[url('../assets/product-history.webp')]">
              </div>
              <div className="desc">
                <div className="card-title">
                  <h1 className="text-2xl">Veggie tomato mix</h1>
                </div>
                <div className="status">
                  <div className="status-top">
                    <p className="price">IDR 34.000</p>
                  </div>
                  <div className="flex justify-between status-bottom">
                    <p className="txt">Delivered to Table 7</p>
                    <input type="checkbox" value="7" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-[20px] p-6 h-[126px] w-max  bg-bgsecondary gap-5 card">
              <div
                className="w-[75px] h-[75px] rounded-[50%] bg-150% bg-[position:-17px_-39px] bg-[url('../assets/product-history.webp')]">
              </div>
              <div className="desc">
                <div className="card-title">
                  <h1 className="text-2xl">Veggie tomato mix</h1>
                </div>
                <div className="status">
                  <div className="status-top">
                    <p className="price">IDR 34.000</p>
                  </div>
                  <div className="flex justify-between status-bottom">
                    <p className="txt">Delivered to Table 8</p>
                    <input type="checkbox" value="8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-[20px] p-6 h-[126px] w-max  bg-bgsecondary gap-5 card">
              <div
                className="w-[75px] h-[75px] rounded-[50%] bg-150% bg-[position:-17px_-39px] bg-[url('../assets/product-history.webp')]">
              </div>
              <div className="desc">
                <div className="card-title">
                  <h1 className="text-2xl">Veggie tomato mix</h1>
                </div>
                <div className="status">
                  <div className="status-top">
                    <p className="price">IDR 34.000</p>
                  </div>
                  <div className="flex justify-between status-bottom">
                    <p className="txt">Delivered to Table 9</p>
                    <input type="checkbox" value="9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* overlay dan modal */}
          <div className="fixed z-[1] w-full h-full left-0 top-0 bg-overlay hidden" id="overlay"></div>
          <div
            className="flex items-center flex-col justify-center text-center w-[45.5rem] h-[22.25rem] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-bgsecondary z-[2] rounded-[20px] gap-10 hidden"
            id="modal">
            <p className="text-2xl">Are you sure want to delete the <br /> selected items?</p>
            <div className="flex flex-row gap-4">
              <button className="px-5 py-3 bg-bgsecondary border border-secondary rounded-[10px] cursor-pointer"
                id="modalCancel">Cancel</button>
              <button className="px-5 py-3 bg-secondary rounded-[10px] cursor-pointer" id="modalDelete">Delete</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


export default History;