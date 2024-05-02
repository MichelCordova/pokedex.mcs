/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import './styles/pokeCard.css';
import { useNavigate } from 'react-router-dom';


const PokeCard = ({url}) => {

    const [pokemon, getPokemon] = useFetch();

    const navigate = useNavigate();

    useEffect(() => {
        getPokemon(url);
    }, [])
    

    const handlePokemon = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <article onClick={handlePokemon} className='pokecard'>
      <div className={`pokecard__back ${pokemon?.types[0].type.name}`}></div>
      <figure className='pokecard__img'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemonimage" />
      </figure>
      <h3 className='pokecard__name'>{pokemon?.name.toLocaleUpperCase()}</h3>
      <ul className='pokecard__types'>
        {
            pokemon?.types.map(type => (
                <li className={`slot${type.slot}`} key={type.type.url}>{type.type.name}</li>
            ))
        }
      </ul>
      <span>Type</span>
      <hr />
      <ul className='pokecard__stats'>
        {
            pokemon?.stats.map(stat => (
                !stat.stat.name.includes('-') &&
                <li key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}</span></li>
            ))
        }
      </ul>
    </article>
  )
}

export default PokeCard;
