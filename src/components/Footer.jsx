import { faStoreAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faFacebookF, faTwitch, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-2 col-brand">
            <div className="footer-brand p-4 d-flex flex-column align-items-center justify-content-center">
              <FontAwesomeIcon icon={faStoreAlt} />
              <p>Fake Store</p>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <h5 className="text-white px-4 mt-4">Write us!</h5>
            <ul className="p-4 links m-0">
              <li><Link className="text-white" to={'/'}>Lorem ipsum dolor sit adipisicing elit.</Link></li>
              <li><Link className="text-white" to={'/'}>Lorem ipsum dolor si elit.</Link></li>
              <li><Link className="text-white" to={'/'}>Lorem ipsum dolor adipisicing elit.</Link></li>
              <li><Link className="text-white" to={'/'}>Lorem ipsum dolor elit.</Link></li>
              <li><Link className="text-white" to={'/'}>Lorem ipsum dolor sit ametng.</Link></li>
              <li><Link className="text-white" to={'/'}>Lorem ipsum dolor sit amet consectetur.</Link></li>
              <li><Link className="text-white" to={'/'}>Lorem adipisicing elit. Dolorum?</Link></li>
              <li><Link className="text-white" to={'/'}>Lorem ipsum adipisicing elit.</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-5">
            <h5 className="text-white mt-4">Follow us!</h5>
            <ul className="py-4 px-0 social-network d-flex">
              <li><Link className="text-white" to={'/'}><FontAwesomeIcon icon={faFacebookF} /></Link></li>
              <li><Link className="text-white" to={'/'}><FontAwesomeIcon icon={faInstagram} /></Link></li>
              <li><Link className="text-white" to={'/'}><FontAwesomeIcon icon={faLinkedin} /></Link></li>
              <li><Link className="text-white" to={'/'}><FontAwesomeIcon icon={faTwitch} /></Link></li>
              <li><Link className="text-white" to={'/'}><FontAwesomeIcon icon={faWhatsapp} /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer