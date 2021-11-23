import './card.css';
export default function Card(props) {
    let addBook = ()=>{
        props.handleCart(props.bookData);
    }
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100 cardbody">
          <spam>
           {props.bookData.img}
           </spam>
          <div className="card-body">
            <h4 className="card-title">
              {props.bookData.bookName}
            </h4>
            <h5>{props.bookData.currency}{props.bookData.price}</h5>
            <p className="card-text">
             {props.bookData.author}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">★ ★ ★ ★ ☆</small>
            <button className="btn btn-success" onClick={addBook}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
