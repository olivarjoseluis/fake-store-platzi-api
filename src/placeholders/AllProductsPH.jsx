import React from 'react'

const AllProductsPH = () => {
  let cardsPlaceholders = [];
  for (let i = 0; i < 6; i++) {
    cardsPlaceholders.push(
      <div className="col-12 col-md-4" key={i}>
        <div className='card product' aria-hidden="true">
          <span className="placeholder col-12 card-img-top"></span>
          <div className="card-body">
            <div className="row">
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7 display-6"></span>
              </p>
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className='all-products products mt-4'>
        <div className="container">
          <div className="row g-0">
            {cardsPlaceholders}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProductsPH