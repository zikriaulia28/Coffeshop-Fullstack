import React, { useEffect, useState } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CardHistory from "./cardHistory";
import { getHistory } from "../../utils/https/transaction";
import { useSelector } from 'react-redux';


function History() {
  const token = useSelector((state) => state.auth.data.token);
  const id = useSelector((state) => state.auth.data.id);
  console.log(id);
  // const controller = useMemo(() => new AbortController(), []);
  const [dataHistory, setDataHistory] = useState([]);
  const fetchDataHistory = async () => {
    try {
      const result = await getHistory(token);
      console.log(result.data.data);
      setDataHistory(result.data.data);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "Coffe Shop - History";
    fetchDataHistory();
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
          <div className="grid grid-cols-4 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 place-items-center gap-5 grid-rows-[auto] card-container">
            {dataHistory.map((product, idx) => (
              <CardHistory
                key={idx}
                prodId={product.product_id}
                transactionId={product.history_id}
                name={product.name}
                image={product.image}
                price={product.price}
                method={product.method}
                created_at={product.created_at}
              // onDelete={handleDelete}
              // qty={product.qty}
              // size={product.size_id}
              />
            ))}
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