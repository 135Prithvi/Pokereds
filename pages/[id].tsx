import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { GetStaticProps } from 'next/types'
import graphQLClient from '../graphQL/graphQLClient'
import { GET_ONE_POKE } from '../graphQL/quir'
// import img from 'next/img'
const PokePage = ({ data, pid }: any) => {
 

  return (
    <>
      <div className="mt-10  overflow-hidden">
        <div className=" max-w-sm sm:max-w-none  ">
          <a className="border- mx-2 flex h-full w-full flex-col items-center  justify-center">
            <div className="  flex items-center justify-center  ">
              <img
                className="sm:aspect-auto  sm:h-36 sm:w-36"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pid ? pid : ''
                }.png`}
                alt=""
              />
              <ArrowForwardIcon className="hidden sm:block " />
              <img
                className="sm:aspect-auto sm:h-36 sm:w-36"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
                  pid ? pid : ''
                }.png`}
                alt=""
              />
              <ArrowForwardIcon className="hidden sm:block " />
              <img
                className="sm:aspect-auto sm:h-36 sm:w-36"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                  pid ? pid : ''
                }.png`}
                alt=""
              />
              <ArrowForwardIcon className="hidden sm:block" />
              <img
                className="sm:aspect-auto sm:h-36 sm:w-36"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${
                  pid ? pid : ''
                }.png`}
                alt=""
              />
            </div>
          </a>
          <div className="mt-10 grid justify-center ">
            <h5 className="mx-3 mb-5  text-center text-2xl font-medium">
              {(data && data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].name).toUpperCase()}
            </h5>
            <a className=" flex flex-col  space-y-3 sm:flex-row sm:space-y-1">
              <span className={`w-full p-3 font-sans text-base sm:mx-3 sm:w-auto sm:p-5 sm:text-xl ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'grass' && 'bg-emerald-300'} ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'fire' && 'bg-rose-400'} ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'water' && 'bg-blue-300'} rounded-full`}>
                {' '}
                Height : {data.height} <strong>m</strong>
              </span>
              <span className={`w-full p-3 font-sans text-base sm:mx-3 sm:w-auto sm:p-5 sm:text-xl ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'grass' && 'bg-emerald-300'} ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'fire' && 'bg-rose-400'} ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'water' && 'bg-blue-300'} rounded-full`}>
                {' '}
                Weight : {data.weight} <strong>Kgs</strong>
              </span>

              <span className={`w-full p-3 font-sans text-base sm:mx-3 sm:w-auto sm:p-5 sm:text-xl ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'grass' && 'bg-emerald-300' } ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'fire' && 'bg-rose-400'} ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'water' && 'bg-blue-300' } rounded-full`}>
                Ability : {data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemonabilities[0].pokemon_v2_ability.name},{' '}
                {data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemonabilities[1].pokemon_v2_ability.name}
              </span>
              <span className={`w-full p-3 font-sans text-base sm:mx-3 sm:w-auto sm:p-5 sm:text-xl ${   data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'grass' && 'bg-emerald-300' } ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'fire' && 'bg-rose-400'} ${data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name == 'water' && 'bg-blue-300' } rounded-full`} >
                Types : {data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0] && data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
                {/* {data.types[1] && ',' + data.types[1].type.name} */}
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default PokePage

// export async function getServerSideProps(_context: any) {
//   const pid = _context.query.id
//   const URL = `${process.env.GET_ONE_PokeApi}${pid}`
//   const response = await fetch(URL)
//   const data = await response.json()
//   // console.log(data);

//   return { props: { data, pid } }
// }
export async function getServerSideProps(_context: any) {
  const pid = _context.query.id
  const variables = {
    ii: pid,
  }
  const data = await graphQLClient.request(GET_ONE_POKE,variables);
console.log(data);

  return {
    props: { data,pid}
  };
}