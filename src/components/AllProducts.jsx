import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { generateRandomNumber } from '../functions/functions';
import AllProductsPH from '../placeholders/AllProductsPH';
import { useGetProductsQuery } from '../store/apis/productsApi';

const AllProducts = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data: products = [] } = useGetProductsQuery(currentPage);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setParams({ ...params, currentPage: currentPage });

  if (isLoading) return <AllProductsPH />

  return (
    <div className='all-products products mt-4'>
      <div className="container">
        <div className="row g-0">
          {products.map((product, i) => (
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
          <div className="col-12">
            <nav aria-label="navigation products">
              <ul className="pagination justify-content-center">
                <li className={currentPage == 1 ? `page-item disabled` : `page-item`}>
                  <button className="page-link" onClick={prevPage}>&laquo; Prev</button>
                </li>
                <li className="page-item">
                  <button className="page-link" onClick={nextPage}>Next &raquo;</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProducts