/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeinfo.css'

const PokeInfo = () => {

  const params = useParams();

  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    getPokemon(url);
    
  }, [])
  
  console.log(pokemon)

  return (
    <section className='pokeinfo'>
      <header className='pokedex__header'>
          <div className="pokedex__red" > 
            <img src='https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kr-HNDP0HsGnQHkkrTEmw0u-2CdfDWeEuF4INIUZTtgNGTRivDxJ0ArcwBzfUipWub8QBR4q0A8pqh90nBVV7jlzIN-8mOJ65hEiLYUz4V0bigac0EbrRLGXLU94ZbNpkK6ODXSegalSxV4i89Ah7VE4RbWBLmVziFEmGtw60tVyoCnOHUmrXwTo2yFT5XsVxkUIa6aQSCBmqFDGxj9AhCXEdE4A9IbLK51S8JlTl9VQV0PqW5kOhscULECBPK5ggTpbMIKRVM6y~JIIMXbJaFl7mu7KNDHNEea5UAcMT8xAIWNBEhzciTpVvUZZT5Hcy2D4a5DQOSXTqSgqoceacw__' alt='pokeimg'/></div>
          <div className="pokedex__black"></div>
    </header>
      <figure>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
      </figure>
      <span># {pokemon?.id}</span>
      <h2>{pokemon?.name}</h2>
      <ul>
        <li><span>Weight</span><span>{pokemon?.weight}</span></li>
        <li><span>Heigth</span><span>{pokemon?.height}</span></li>
      </ul>
      <div>
        <article>
          <h3>Type</h3>
          <ul>
            {
              pokemon?.types.map(type => (
                <li key={type.type.url}>{type.type.name}</li>
              ))
            }
          </ul>
        </article>
        <article>
          <h3>Skills</h3>
          <ul>
            {
              pokemon?.abilities.map(skill => (
                <li key={skill.ability.url}>{skill.ability.name}</li>
              ))
            }
          </ul>
        </article>
      </div>
      <h2>Stats</h2>
      <ul className='pokeinfo__stats'>
        {
          pokemon?.stats.map(stat => (
            <li key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}/150</span>
            <div className='stats__bar'><div style={{width:`${(stat.base_stat / 150) * 100}%`}} className='stats__prog'></div></div></li>
          ))
        }
      </ul>
      <h2>Movements</h2>
      <ul>
        {
          pokemon?.moves.map(move => (
            <li key={move.move.url}>{move.move.name}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default PokeInfo;
