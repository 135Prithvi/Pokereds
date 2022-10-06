import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function SearchList({ query, Data }: any) {
  return (
    <div className={`container mt-2 h-auto overflow-y-auto `}>
      <div className="mx-2 sm:mx-4 ">
        <div className="container">
          <div className=" my-5 space-y-5 text-center sm:grid sm:grid-cols-2 sm:gap-x-8  sm:gap-y-5 sm:space-y-0">
            {Data.filter((pokemon: any, _index: any) => {
              if (query === '') {
                return pokemon
              }
              if (!pokemon?.name.toLowerCase().includes(query.toLowerCase()))
                return null

              return { pokemon, _index }
            }).map((pokemon: any, _index: any) => (
              <div className="" key={_index}>
                <Link
                  href="/[id]"
                  as={`/${pokemon?.url
                    .replace(/\/$/, '')
                    .replace('https://pokeapi.co/api/v2/pokemon/', '')}`}
                  key={pokemon?.name}
                >
                  <div className=" max-w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
                    <a>
                      <Image
                        className="m-auto rounded-lg "
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.url
                          .replace(/\/$/, '')
                          .replace(
                            'https://pokeapi.co/api/v2/pokemon/',
                            ''
                          )}.png`}
                        alt=""
                        width={`120`}
                        height={`120`}
                      />
                    </a>
                    <div className="pb-5 pr-5 pl-5">
                      <a>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {pokemon?.name}
                        </h5>
                      </a>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
