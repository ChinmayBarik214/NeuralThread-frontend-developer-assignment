import './HomePage.css'
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <section className="banner">
      <h1 className='banner__heading'>NeuralThread</h1>
      <p className='banner__content'>Press the button below to visit our landing page</p>
      <Link to='/landing-page'>
        <button class="btn btn--slide">
          Landing page
        </button>
      </Link>
    </section>
  )
}

export default HomePage