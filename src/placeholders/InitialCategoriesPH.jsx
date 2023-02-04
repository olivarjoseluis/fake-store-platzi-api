import Placeholder from 'react-bootstrap/Placeholder'
import Card from 'react-bootstrap/Card';;
import img from './../assets/slide-primary-default.jpg'



const InitialCategoriesPH = () => {
  let cardsPlaceholder = [];
  for (let i = 0; i < 6; i++) {
    cardsPlaceholder.push(
      <div className="col-12 col-md-4" key={i}>
        <div className='card product-placeholder' aria-hidden="true">
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className='initial-categories'>
      <div className="container">
        <div className="row g-0">
          <h2 className='text-center'>Categories</h2>
          {cardsPlaceholder}
        </div>
      </div>
    </section>
  )
}

export default InitialCategoriesPH