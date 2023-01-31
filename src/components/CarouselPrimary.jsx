import { useEffect, useState } from 'react'
import { urlApi } from '../const/const';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const CarouselPrimary = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${urlApi}/products?offset=0&limit=3`)
      .then(res => res.json())
      .then(data => setProducts(data))
      //.then(data => console.log(data))
      .catch(e => console.log('We have an error', e))
  }, [])
  return (
    <section className="primary-slider">
      <div className="container mt-1">
        {products ?
          <Carousel>
            {
              products.map((product) => (
                <Carousel.Item key={product.id} className="slide">
                  <Link to={`product/${product.id}`}>
                    <img
                      className="image-slide"
                      src={product.images[0].replace('640', '1500')}
                      alt={product.title}
                    />
                    <Carousel.Caption>
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              ))
            }
          </Carousel>
          :
          ''}
      </div>
    </section >
  )
}

export default CarouselPrimary