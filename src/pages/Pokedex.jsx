/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import './styles/pokedex.css'
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelect from '../components/pokedex/PokeSelect';
import PokePages from '../components/pokedex/PokePages';


const Pokedex = () => {

  const [page, setPage] = useState(1);

  const [selectValue, setSelectValue] = useState('');

  const [inputValue, setInputValue] = useState('');

  const [pokemons, getPokemons, getType] = useFetch();

  const trainer = useSelector(store => store.trainer);

  useEffect(() => {
    if (selectValue) {
      getType(selectValue);
    } else{
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
      getPokemons(url);
    }
  }, [selectValue])
  
  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.toLowerCase().trim());
    textInput.current.value = '';
    setPage(1);
  }

  //console.log(pokemons);

  const pokeSearch = (poke) =>{
    const perName = poke.name.includes(inputValue);
    return perName;
  }


  const quantity = 20
  const total = Math.ceil(pokemons?.results.filter(pokeSearch).length / 20)
  const pagination = () =>{
    const end = quantity * page;
    const start = end - quantity;
    return pokemons?.results.filter(pokeSearch).slice(start,end);
  }

  return (
    <section className='pokedex'>
      <header className='pokedex__header'>
          <div className="pokedex__red" > 
            <img src='https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kr-HNDP0HsGnQHkkrTEmw0u-2CdfDWeEuF4INIUZTtgNGTRivDxJ0ArcwBzfUipWub8QBR4q0A8pqh90nBVV7jlzIN-8mOJ65hEiLYUz4V0bigac0EbrRLGXLU94ZbNpkK6ODXSegalSxV4i89Ah7VE4RbWBLmVziFEmGtw60tVyoCnOHUmrXwTo2yFT5XsVxkUIa6aQSCBmqFDGxj9AhCXEdE4A9IbLK51S8JlTl9VQV0PqW5kOhscULECBPK5ggTpbMIKRVM6y~JIIMXbJaFl7mu7KNDHNEea5UAcMT8xAIWNBEhzciTpVvUZZT5Hcy2D4a5DQOSXTqSgqoceacw__' alt='pokeimg'/></div>
          <div className="pokedex__black"></div>
    </header>
      <h2 className='pokedex__title'><span> Welcome {trainer},</span> here you can find your favorite pokemon</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input ref={textInput} type="text" />
          <button>Search</button>
        </form>
        <PokeSelect
          setSelectValue={setSelectValue}/>
      </div>
      <PokePages
        page={page}
        setPage={setPage}
        total={total}
      />
      <div className='pokedex__container'>
        {
          pagination()?.map((poke) => (
            <PokeCard
            key={poke.url}
            url={poke.url}/>
          ))
        }
      </div>
    </section>
  )
}

export default Pokedex;
