//import logo from "./logo.svg";
import "./App.css";
import './card.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import { useState } from "react";
function App() {
  let bookDetails = [
    {
      id: 1,
      img: (
        <img
          className="card-img-top"
          src="http://placehold.it/700x400"
          alt=""
        />
      ),
      bookName: "The Inner Engineering",
      currency: <i class="fas fa-rupee-sign" />,
      price: 178,
      author: "by Sadhguru",
    },

    {
      id: 2,
      img: (
        <img
          className="card-img-top"
          src="http://placehold.it/700x400"
          alt=""
        />
      ),
      bookName: "Death: An Inside Story",
      currency: <i class="fas fa-rupee-sign" />,
      price: 189,
      author: "by Sadhguru",
    },

    {
      id: 3,
      img: (
        <img
          className="card-img-top"
          src="http://placehold.it/700x400"
          alt=""
        />
      ),
      bookName: "Emotion & Relationships",
      currency: <i class="fas fa-rupee-sign" />,
      price: 178,
      author: "by Sadhguru",
    },

    {
      id: 4,
      img: (
        <img
          className="card-img-top"
          src="http://placehold.it/700x400"
          alt=""
        />
      ),
      bookName: "Don’t Polish Your Ignorance …It May Shine",
      currency: <i class="fas fa-rupee-sign" />,
      price: 185,
      author: "by Sadhguru",
    },

    {
      id: 5,
      img: (
        <img
          className="card-img-top"
          src="http://placehold.it/700x400"
          alt=""
        />
      ),
      bookName: "Of Mystics & Mistakes",
      currency: <i class="fas fa-rupee-sign" />,
      price: 185,
      author: "by Sadhguru",
    },

    {
      id: 6,
      img: (
        <img
          className="card-img-top"
          src="http://placehold.it/700x400"
          alt=""
        />
      ),
      bookName: "Pebbles Of Wisdom",
      currency: <i class="fas fa-rupee-sign" />,
      price: 140,
      author: "by Sadhguru",
    },
  ];

  const [cart, setCart] = useState([]);
  let addToCart = (book) => {
    setCart([...cart, book]);
  };
  let removeCart = (item) => {
    setCart(cart.filter((obj) => obj.id !== item.id));
  };
  return (
    <div className="container-fluid bg-info">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4">Shop Name</h1>
          <div className="list-group ">
            {cart.map((item) => {
              return (
                <>
                  <div className="list-group-item addBook">
                    {item.bookName}
                    <button
                      className="btn btn-danger button"
                      onClick={() => {
                        removeCart(item);
                      }}
                    >
                      remove
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {bookDetails.map((book) => {
              return <Card bookData={book} handleCart={addToCart}></Card>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

