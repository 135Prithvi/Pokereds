import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useRef, useState } from 'react'

import SearchList from './SearchList'

export default function Search({ Data }: any) {
  const [search, setSearch] = useState('')

  function searchList() {
    return (
      <div className="container mt-2 h-[55vh] overflow-y-auto ">
        <SearchList Data={Data} query={search} />
      </div>
    )
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
            className=" max-w-sm rounded-lg border-2 dark:bg-black hover:bg-gray-100 dark:hover:bg-slate-900 sm:w-full"
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
