import { gql } from 'graphql-request'
export const GET_ONE_POKE = gql`
query samplePokeAPIquery($ii: Int!) {

   
  pokemon_v2_pokemonspecies(where: {id: {_eq:$ii }}){
   
 
  pokemon_v2_pokemons{
    height,
    name,
    id,
    weight,
    pokemon_v2_pokemontypes{
      pokemon_v2_type{
        name
      }
    },
    pokemon_v2_pokemonabilities{
     
      pokemon_v2_ability{
        name,
        
      }
      
    }
  }
  }
}
`
