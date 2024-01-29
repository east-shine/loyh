import { ReactComponent as Facebook } from '../../assets/Icon/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/Icon/instagram.svg'
import Logo from '../../assets/logo.png'
import { ReactComponent as Twitter } from '../../assets/Icon/twitter.svg'

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-5 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img src={Logo} alt="" className="w-12 h-12" />
          <p className="mt-4 mb-4">
            <p>DESIGN & FLAVOR</p>
            <p>
              시각적 매력과 후각적 만족 ☕️ <strong className="font-bold">로이 로스터스</strong>
            </p>
            <p>🏆 2022 - 2023 🇮🇹 ICT ESPRESSO GOLD MEDAL🏅🏅</p>
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.instagram.com/loyh_roasters" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <p className="text-gray-400">©2024 LOYH ROASTERS</p>
        </div>
        {/* <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">Airdrop</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">Game Aggregator</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">Launchpad</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">Game Item Shop</li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">KlaytnGames ?</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">FAQ</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">Tutorials</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">About Us</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">Privacy Policy</li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">Terms of Service</li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Token Sales</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">ILO</li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
