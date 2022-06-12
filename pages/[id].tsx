import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Image from 'next/image'
const PokePage = ({ data, pid }: any) => {
  return (
    <>
      <div className="mt-20 grid justify-center sm:mt-0 sm:h-screen sm:items-center">
        <div className="  max-w-xs place-items-center sm:max-w-lg ">
          <a className="text-md mx-2 mb-1 block rounded-lg border-2 border-gray-300 bg-white py-5 px-5 pr-4 pl-3  text-center  font-medium shadow-xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 sm:block">
            <div className="mx-auto flex sm:inline-flex sm:w-full ">
              <Image
                className="m-auto h-1/2 w-1/2 rounded-t-lg sm:h-max  sm:w-max"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pid ? pid : ''
                }.png`}
                alt=""
                width={`120`}
                height={`120`}
              />
              <ArrowForwardIcon className="my-auto " />
              <Image
                className="m-auto h-1/2 w-1/2 rounded-t-lg sm:h-max sm:w-max"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
                  pid ? pid : ''
                }.png`}
                alt=""
                width={`120`}
                height={`120`}
              />
              <ArrowForwardIcon className="my-auto " />
              <Image
                className="m-auto h-1/2 w-1/2 rounded-t-lg sm:h-max sm:w-max"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                  pid ? pid : ''
                }.png`}
                alt=""
                width={`120`}
                height={`120`}
              />
              <ArrowForwardIcon className="my-auto" />
              <Image
                className="sm:w-maxrounded-t-lg m-auto h-1/2 w-1/2 sm:h-max"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${
                  pid ? pid : ''
                }.png`}
                alt=""
                width={`150`}
                height={`150`}
              />
            </div>

            <div className="pt-3">
              <a className="mr-auto ml-auto w-full text-center ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {(data.name ? data.name : '').toUpperCase()}
                </h5>

                <p className="  font-medium text-gray-700 dark:text-gray-400">
                  Height : {data.height} <strong>m</strong>
                  <br />
                  Weight : {data.weight} <strong>Kgs</strong>
                  <br />
                  Ability :
                </p>
              </a>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
export default PokePage

export async function getServerSideProps(_context: any) {
  const pid = _context.query.id
  const URL = `${process.env.GET_ONE_PokeApi}${pid}`
  const response = await fetch(URL)
  const data = await response.json()
  // console.log(data);

  return { props: { data, pid } }
}
