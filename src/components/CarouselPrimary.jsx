import { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CarouselPrimaryPH from '../placeholders/CarouselPrimaryPH';
import { getThereProducts } from '../app/features/primary-carousel/primaryCarousel';


const CarouselPrimary = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getThereProducts())
  }, [])

  if (state.primaryCarouselSlice.isLoading) return <CarouselPrimaryPH />

  return (
    <section className="primary-slider">
      <div className="container">
        {state ?
          <Carousel>
            {
              state.primaryCarouselSlice.data && state.primaryCarouselSlice.data.map((product) => (
                <Carousel.Item key={product.id} className="slide">
                  <img
                    className="image-slide d-block w-100"
                    src={product.images[0].replace('640', '1500')}
                    alt={product.title}
                  />
                  <Carousel.Caption className='text-start'>
                    <div className="text">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <Link to={`product/${product.id}`} className="btn btn-outline-light">See more</Link>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            }
          </Carousel>
          :
          ''
        }
      </div>
    </section >
  )
}

export default CarouselPrimary