import { AiFillStar } from "react-icons/ai"
import{BsFillBagHeartFill } from "react-icons/bs"

export default function Card() {
  return (
    <>
    <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe1" className="card-img"/>
        <div className="card-details">
          <h3 className="card-title">Nike Monarch</h3>
          <section className="card-reviews">
            <AiFillStar className="rating-star"/><AiFillStar className="rating-star"/><AiFillStar className="rating-star"/><AiFillStar className="rating-star"/><AiFillStar className="rating-star"/>
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>Rs.50,000</del> Rs.34,999
            </div>
            <div className="bag">
              <BsFillBagHeartFill/>
            </div>
          </section>
        </div>
    </section>
    </>
  );
}
