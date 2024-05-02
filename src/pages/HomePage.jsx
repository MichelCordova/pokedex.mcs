import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setTrainer } from '../store/slices/trainer.slice';
import { useNavigate } from 'react-router-dom';
import './styles/homepage.css'

const HomePage = () => {

    const dispatch = useDispatch(); 

    const navigate = useNavigate();

    const textInput = useRef();

    const handleSubmit = (event) =>{
      event.preventDefault();
      dispatch(setTrainer(textInput.current.value.trim()));
      textInput.current.value = '';
      navigate('/pokedex')
    }

  return (
    <>
    <div className='home__container'>
        <img src='https://th.bing.com/th/id/R.c31fa44fd920efa7809db7ac1b0be4a2?rik=cnZq66vuNNeEyQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-0V4itR_v87M%2fUtsCF-ehNYI%2fAAAAAAAABjU%2fUEQ5Jiy_85o%2fs1600%2fpokedex-3d-logo.png&ehk=an1lacOQj51DzZekJ3qDaaleR8ssIF9jOsaG8Qh8I24%3d&risl=&pid=ImgRaw&r=0' alt='pokeimg'/>
      
        <h1 className='home__title'><span>Hi Trainer!</span></h1>
        <h2 className='home__title home-title2' >To start give your name</h2>
        <form className='home__form' onSubmit={handleSubmit}>
            <input className='home__input' ref={textInput} type="text" />
            <button className='home__button'>Start</button>
        </form>
        
    </div>
    <footer className='home__footer'>
          <div className="home__red"></div>
          <div className="home__black"></div>
    </footer>
    </>
  )
}

export default HomePage;
