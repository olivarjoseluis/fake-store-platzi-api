import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { defineRange } from "../app/features/products/productsSlice";
import { useGetProductsByRangeQuery } from "../store/apis/productsApi";

function submitRange(range) {
  console.log(range);

}

const FiltersProducts = () => {
  const dispatch = useDispatch();
  const [range, setRange] = useState({ minimum: '', maximum: '' });
  //useGetProductsByRangeQuery(range);
  const [isError, setIsError] = useState(false);

  const handleRange = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      return;
    }
    setRange({ ...range, [e.target.name]: value });
  }

  const handleSubmitRange = () => {
    dispatch(defineRange(range));
    //submitRange(range)
  }

  return (
    <div className='filters-products'>
      <div className="row g-0">
        <div className="col-12">
          <label className="form-label">Price range</label>
          <div className="input-group input-group-sm  mb-3">
            <input name="minimum" type="text" onChange={e => handleRange(e)} value={range.minimum} className="form-control" placeholder="Minimum" aria-describedby="basic-addon1" />
            <input name="maximum" type="text" onChange={e => handleRange(e)} value={range.maximum} className="form-control" placeholder="Maximum" aria-describedby="basic-addon1" />
            <button onClick={handleSubmitRange}><FontAwesomeIcon icon={faChevronCircleRight} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiltersProducts