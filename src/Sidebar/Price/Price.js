import "./Price.css";



export default function Price() {
  return (
  <>
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>Rs 5k - Rs 10k
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>Rs 10k - Rs 25k
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>Rs 25k - Rs 50k
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />  
          <span className="checkmark"></span>Rs 50k - Rs 100k
        </label>
    </div>
    </>
  )
}
