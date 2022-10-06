import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

// import SearchList from './SearchList'
import dynamic from 'next/dynamic'

const SearchList = dynamic(() => import('./SearchList'), {
  ssr: false,
})
export default function Search({ Data }: any) {
  const [search, setSearch] = useState('')

  function searchList() {
    return <SearchList Data={Data} query={search} />
  }
  return (
    <>
      <div className="container   ">
        <form
          className="mt-5 flex "
          onSubmit={(e: any) => {
            e.preventDefault()
          }}
        >
          <input
            className=" max-w-sm rounded-lg border-2 outline-hidden transition-transform hover:translate-x-1 hover:-translate-y-1 hover:bg-gray-100 hover:text-lg dark:bg-black dark:hover:bg-slate-900 sm:w-full "
            type="search"
            placeholder="Search"
            onChange={(e: any) => {
              setSearch(e.target.value)
            }}
          />
          <button className="mx-4 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-[0.33rem] text-center text-lg  font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 sm:py-2.5 sm:px-2">
            <SearchIcon />
          </button>
        </form>
        <div>{/* showModal Will go here */}</div>
        {search ? searchList() : null}
      </div>
    </>
  )
}
