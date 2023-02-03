import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getThereCategories } from '../app/features/categories/sliceCategories';
import InitialCategoriesPH from '../placeholders/InitialCategoriesPH';
import Card from 'react-bootstrap/Card';

const InitialCategories = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getThereCategories())
  }, [])
  if (state.categoriesSlice.isLoading) return <InitialCategoriesPH />

  return (
    <section className='initial-categories'>
      <div className="container">
        <div className="row g-0">
          <h2 className='text-center'>Categories</h2>
          {state.categoriesSlice.thereCategories && state.categoriesSlice.thereCategories.map((category, i) => (
            <div className="col-12 col-md-4" key={category.id}>
              <Link to={`/category/${category.id}`}>
                <Card className={(i + 1) % 3 == 0 ? 'text-white nb' : 'text-white'}>
                  <Card.Img src={category.image} alt="Card image" />
                  <Card.ImgOverlay className='d-flex flex-column-reverse text-center layout-opacity'>
                    <Card.Title>{category.name}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </div>
          ))}
          <p className='text-center mt-4'>
            <Link to={'categories'} className="btn btn-primary btn-lg">See more</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default InitialCategories