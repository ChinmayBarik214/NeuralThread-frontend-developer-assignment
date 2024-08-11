import './LandingPage.css'
import sineLogo from '../images/sineLogo.png'
import faceSplitImg from '../images/faceSplit2.jpeg'
import ufoImg from '../images/ufo.jpg'
import cityImg from '../images/city.jpg'
import floralbgImg from '../images/floralbg.jpg'
import recordImg from '../images/record.jpg'

function LandingPage() {
  return (
    <section className="hero">
      <div className="hero__main">
        <h1 className='main__heading'>COMING SOON</h1>
        <p className='main__content main__content--semiBold'>Associated and backed by</p>
        <img src={sineLogo} alt='SINE logo' height={100} />
        <p className='main__content main__content--bold'>NeuralThread</p>
        <p className='main__content'>Unleashing the Future of Textile Design with</p>
        <p className='main__content main__content--semiBold'>AI Pattern Generation</p>

        <div className='main__form'>
          <p className='form__header'>SEND MESSAGE</p>
          <input className='form__input form__input--left' placeholder='Your Name' />
          <input className='form__input form__input--right' placeholder='Phone Number' />
          <input className='form__input' placeholder='Email id' />
          <textarea className='form__input form__msg' placeholder='Message' />
          <button className='form__cutout'>SEND</button>
          <button className='form__submit' type='submit'>SEND</button>
        </div>
      </div>
      <div className="hero__imgs">
        <div className="imgs">
          <img className='img img--left' src={faceSplitImg} alt='' height={140} width={200} />
          <img className='img img--right' src={ufoImg} alt='' height={140} width={200} style={{objectPosition: 'top'}} />
          <img className='img img--left' src={cityImg} alt='' height={140} width={200} style={{objectPosition: '0 -80px'}} />
          <img className='img img--right' src={floralbgImg} alt='' height={140} width={200} />
          <img className='img img--center' src={recordImg} alt='' height={140} width={200} />
        </div>
      </div>
    </section>
  )
}

export default LandingPage