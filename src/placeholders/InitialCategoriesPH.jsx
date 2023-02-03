import Placeholder from 'react-bootstrap/Placeholder'
import Card from 'react-bootstrap/Card';;
import img from './../assets/slide-primary-default.jpg'

const InitialCategoriesPH = () => {
  return (
    <div className='container'>
      <Card className="bg-dark text-white">
        <Card.Img src={img} alt="Slide image default" />
        <Card.ImgOverlay>
          <Card.Text>
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} />
            <Placeholder xs={12} size="sm" />
            <Placeholder xs={12} size="xs" />
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default InitialCategoriesPH