import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import type { NextPage } from 'next'
// import Search from "../components/Search";
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/future/image'
const Search = dynamic(() => import('../components/Search'), {
  ssr: false,
})
const Home: NextPage = ({ data }: any) => {
  const [pokes, setPokes] = useState(data.results)
  const [fetchurl, setfetchurl] = useState(
    'https://pokeapi.co/api/v2/pokemon?&limit=39&offset=8'
  )

  // This function will scroll the window to the top
  // console.log();
  async function getMorePost() {
    const res = await fetch(`${fetchurl}`)
    const newPokes = await res.json()
    console.log(newPokes)
    setPokes(pokes.concat(newPokes.results))
    setfetchurl(newPokes.next)
  }

  return (
    <div className="mx-auto max-w-md px-8 py-8 sm:max-w-xl lg:max-w-6xl lg:px-12">
      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3"></div>

      <div className="container">
        <Search Data={pokes} />
      </div>

      <InfiniteScroll
        dataLength={pokes.length}
        next={getMorePost}
        hasMore={pokes.length < 999}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div className=" my-5 grid  grid-cols-1 gap-6 text-center  sm:grid-cols-2 xl:grid-cols-2">
          {pokes.map((pokemon: any, _index: any) => {
            return (
              <Link href="/[id]" as={`/${_index + 1}`} key={pokemon?.name}>
                <div className=" flex cursor-pointer flex-row  justify-between rounded-lg border-2 border-gray-200 bg-white  px-5 shadow-md dark:border-gray-700 dark:bg-gray-700">
                  <a>
                    <Image
                      className="aspect-auto h-36 w-36 "
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        _index + 1
                      }.png`}
                      alt=""
                      priority
                      width={'144'}
                      height={'144'}
                    />
                  </a>
                  <div className="mx-auto my-auto">
                    <a>
                      <h5 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                        {pokemon?.name}
                      </h5>
                    </a>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}
export default Home
export async function getStaticProps() {
  
  const URL = `https://pokeapi.co/api/v2/pokemon/?limit=8`
  const response = await fetch(URL)
  const data = await response.json()
  // console.log(data);
  if (!response) return null
  return { props: { data } }
}
