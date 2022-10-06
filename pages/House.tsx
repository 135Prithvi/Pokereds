import { GetStaticProps } from 'next'
import graphQLClient from '../graphQL/graphQLClient'
import { GET_ONE_POKE } from '../graphQL/quir'

// export const getStaticProps: GetStaticProps = async (context) => {
//   const variables = {
//     ii: 5,
//   }
//   const data = await graphQLClient.request(GET_ONE_POKE,variables);
// console.log(data);

//   return {
//     props: { data,}
//   };
// }
export default function House() {
  // console.log(data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].weight);
  // console.log(data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemonabilities[0].pokemon_v2_ability.name);
  // console.log(data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name);
  return (
    <div className="bg-[url('https://www.tailwindtoolbox.com/templates/header.png')] bg-cover bg-fixed leading-normal tracking-normal text-indigo-400 ">
      <div className="h-full">
        {/* <!--Nav--> */}
        {/* eslint-disable @next/next/no-img-element */}
        {/* eslint-disable react/no-unescaped-entities */}

        {/* <!--Main--> */}

        <div className="container mx-auto flex flex-col flex-wrap items-center pt-24 md:flex-row md:pt-36">
          {/* <!--Left Col--> */}
          <div className="flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-2/5">
            <h1 className="my-4 text-center text-3xl font-bold leading-tight text-white opacity-75 md:text-left md:text-5xl">
              Main
              <span className="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Hero Message
              </span>
              to sell yourself!
            </h1>
            <p className="mb-8 text-center text-base leading-normal md:text-left md:text-2xl">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>

            <form className="mb-4 w-full rounded-lg bg-gray-900 px-8 pt-6 pb-8 opacity-75 shadow-lg">
              <div className="mb-4">
                <label
                  className="mb-2 block py-2 font-bold text-blue-300"
                  htmlFor="emailaddress"
                >
                  Signup for our newsletter
                </label>
                <input
                  className="w-full transform appearance-none rounded border p-3 leading-tight text-gray-700 shadow transition duration-300 ease-in-out hover:scale-105 focus:ring"
                  id="emailaddress"
                  type="text"
                  placeholder="you@somewhere.com"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  className="transform rounded bg-gradient-to-r from-purple-800 to-green-500 py-2 px-4 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:from-pink-500 hover:to-green-500 focus:ring"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          {/* <!--Right Col--> */}
          <div className="w-full overflow-hidden p-12 xl:w-3/5">
            {/*  eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              className="mx-auto w-full -rotate-6 transform transition duration-700 ease-in-out hover:rotate-6 hover:scale-105 md:w-4/5"
              src="https://www.tailwindtoolbox.com/templates/macbook.svg"
            />
          </div>

          <div className="mx-auto md:pt-16">
            <p className="pb-8 text-center font-bold text-blue-400 lg:pb-6">
              Download our app:
            </p>
            <div className="fade-in flex w-full justify-center pb-24 md:justify-start lg:pb-0">
              {/*  eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src="https://www.tailwindtoolbox.com/templates/App%20Store.svg"
                className="h-12 transform pr-12 duration-300 ease-in-out hover:scale-125"
              />
              {/*  eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src="https://www.tailwindtoolbox.com/templates/Play%20Store.svg"
                className="h-12 transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
          </div>

          {/* <!--Footer--> */}
          <div className="fade-in w-full pt-16 pb-6 text-center text-sm md:text-left">
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="#"
            >
              &copy; App 2020
            </a>
            - Template by
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="https://www.tailwindtoolbox.com"
            >
              TailwindToolbox.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
