import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../app/features/products/productsSlice';
import Card from 'react-bootstrap/Card';
import { generateRandomNumber } from '../functions/functions';

const AllProducts = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const products = state.productsSlice.allProducts;

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className='all-products products mt-4'>
      <div className="container">
        <div className="row g-0">
          {products && products.map((product, i) => (
            <div className="col-12 col-md-4" key={product.id}>
              <div className={(i + 1) % 3 == 0 ? 'card product nb' : 'card product'}>
                <img src={product.images[0]} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <span className='display-6 price'>${product.price} <span className='off'>-{generateRandomNumber(1, 50)}%</span></span>
                    </div>
                    <div className="col-12">
                      <h5 className="card-title text-black-50">{product.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts