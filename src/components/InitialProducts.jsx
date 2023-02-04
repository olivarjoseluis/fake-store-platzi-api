import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getSixProducts } from "../app/features/products/sixProductsSlice";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import InitialCategoriesPH from "../placeholders/InitialCategoriesPH";

const InitialProducts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getSixProducts());
  }, [])

  if (state.sixProductsSlice.isLoading) return <InitialCategoriesPH />

  return (
    <section className="initial-products">
      <div className="container">
        <div className="row g-0">
          <h2 className='text-center'>Products</h2>
          {state.sixProductsSlice.sixProducts && state.sixProductsSlice.sixProducts.map((product, i) => (
            <div className="col-12 col-md-4" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <Card className={(i + 1) % 3 == 0 ? 'text-white nb' : 'text-white'}>
                  <Card.Img src={product.images[0]} alt="Card image" />
                  <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-end text-center layout-opacity'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="display-6">${product.price}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </div>
          ))}
          <p className='text-center mt-4'>
            <Link to={'products'} className="btn btn-primary btn-lg">See more</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default InitialProducts