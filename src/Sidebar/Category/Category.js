import "./Category.css";
import Input from "../../Components/input";

function Category({ handleChange }) {
  return (
    <>
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>Sneakers
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>Slides
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>Sandales
        </label>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>Loafers
        </label>
      </div>
    </div>

    </>
  );
}

export default Category;