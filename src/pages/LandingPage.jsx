import './LandingPage.css'
import sineLogo from '../images/sineLogo.png'

import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <section className="hero">
      <div className="hero__main">
        <h1 className='main__heading'>COMING SOON</h1>
        <p className='main__content main__content--semiBold'>Associated and backed by</p>
        <img src={sineLogo} height={100} />
        <p className='main__content main__content--bold'>NeuralThread</p>
        <p className='main__content'>Unleashing the Future of Textile Design with</p>
        <p className='main__content main__content--semiBold'>AI Pattern Generation</p>
        
        <div className='main__form'>
          <p className='form__header'>SEND MESSAGE</p>
          <input className='form__input form__input--left' placeholder='Your Name'/>
          <input className='form__input form__input--right' placeholder='Phone Number'/>
          <input className='form__input' placeholder='Email id'/>
          <textarea className='form__input form__msg' placeholder='Message'/>
        </div>
      </div>
      <div className="hero__imgs">def</div>
    </section>
  )
}

export default LandingPage