import { useRouter } from 'next/router'
import Image from 'next/image'
export default function Weather({ data, city }: any) {
  const router = useRouter()

  return (
    <div className=" grid justify-center sm:mt-0 h-[90vh] items-center">
      <div className=" max-w-xs place-items-center sm:max-w-lg ">
        <a className="text-md mx-2 mb-1 block rounded-lg border-4 border-gray-200 bg-white py-5 px-5 pr-4 pl-3  text-center  font-medium shadow-xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-800 sm:block">
          <div className="mx-auto flex sm:inline-flex sm:w-full  "></div>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            width={100}
            height={100}
            className="rounded-xl bg-slate-200"
          />
          <div className="pt-3">
            <a className="mr-auto ml-auto w-full text-center ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.name ? data.name : ''}
              </h5>

              <p className="  font-medium text-gray-700 dark:text-gray-300 ">
                Weather : {data.weather[0].main}
                <br />
                Visiblity : {data.visibility} <strong>Index</strong>
                <br />
                Temperature : {Math.round(data.main.temp - 273.15)}{' '}
                <strong>C</strong>
                <br />
                Feels Like : {Math.round(data.main.feels_like - 273.15)}{' '}
                <strong>C</strong>
                <br />
                Humidity : {data.main.humidity}{' '}
                <strong>{data.main.humidity >= 65 ? 'High' : 'sticky'}</strong>
              </p>
            </a>
          </div>
        </a>
      </div>
    </div>
  )
}

export async function getServerSideProps(_context: any) {
  const ipRequest = await fetch(
    `https://ipfind.co/?ip=223.189.12.104&auth=5f3f0846-e663-46dc-956a-7900fccd916b`
  )
  const ipData = await ipRequest.json()
  const city = ipData.city

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7ba01bba9d0f9d71c6377ab20b9f67d`
  )

  const data = await response.json()
  return { props: { data, city } }
}
