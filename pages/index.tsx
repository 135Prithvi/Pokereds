import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import type { NextPage } from 'next'
// import Search from "../components/Search";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic'

const Search = dynamic(() => import("../components/Search") , {
  ssr: false,
})
const Home: NextPage = ({ data }: any) => {
  const [posts, setPosts] = useState(data.results);
  const [fetchurl, setfetchurl] = useState('https://pokeapi.co/api/v2/pokemon?&limit=47&offset=10');
  const [hasMore] = useState(true);
  const [showButton, setShowButton] = useState(true);
  

  

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  // console.log();
async function getMorePost(){
    const res = await fetch(
      `${fetchurl}`
    );
    const newPosts = await res.json();
    console.log(newPosts );
    setPosts(posts.concat(newPosts.results))
    setfetchurl(newPosts.next);
    
    // console.log(posts);
  };
  
    return (
      
      <div className="mx-10 sm:mx-20 ">
       
       <div className="container">
         <Search Data={posts} />
       </div>
       
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {/* <div className='flex justify-center '> */}
      {/* from-green-400 to-blue-600    hover:bg-gradient-to-bl  focus:outline-none focus:ring-4 focus:ring-green-200 dark:from-green-300 dark:to-blue-400  dark:text-teal-900 dark:focus:ring-green-800 */}
        {/* {showButton && (
        <button onClick={scrollToTop} className="w-16 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2.5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      )} */}
      {/* </div> */}
        <div className=" my-5 space-y-5 text-center sm:grid sm:grid-cols-2 sm:gap-x-8  sm:gap-y-5 sm:space-y-0">
        
        {posts.map((pokemon: any, _index: any) => {
          return (
            <Link href="/[id]" as={`/${_index + 1}`} key={pokemon?.name}>
              <div className=" max-w-full cursor-pointer rounded-lg border-2 border-gray-200  bg-white shadow-md dark:border-gray-700 dark:bg-gray-700">
                <a>
                  <Image
                    className="m-auto rounded-lg "
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      _index + 1
                    }.png`}
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
          )
        })}
        </div>
      </InfiniteScroll>
      
    
      </div>
    
);
}
export default Home
export async function getServerSideProps(_context: any) {
  
  const URL = `https://pokeapi.co/api/v2/pokemon/?limit=10`
  const response = await fetch(URL)
  const data = await response.json()
  // console.log(data);
  if(!response) return null
  return { props: { data } }
}
