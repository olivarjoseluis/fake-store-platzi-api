import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "bootstrap";
import { useState } from "react"

const FiltersProducts = () => {
  const [range, setRange] = useState({ minimum: '', maximum: '' });
  const [isError, setIsError] = useState(false);

  const handleRange = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      return;
    }
    setRange({ ...range, [e.target.name]: value });
  }

  const handleSubmitRange = () => {
    console.log('Test');
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