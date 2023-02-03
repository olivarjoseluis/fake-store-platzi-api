import AllProducts from "../components/AllProducts"
import FiltersProducts from "../components/FiltersProducts"

const ProductsPage = () => {
  return (
    <div className='products'>
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-2">
            <FiltersProducts />
          </div>
          <div className="col-12 col-md-10">
            <AllProducts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage