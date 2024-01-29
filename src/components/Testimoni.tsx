import { ReactComponent as ArrowBack } from '../assets/Icon/eva_arrow-back-fill.svg'
import { ReactComponent as ArrowNext } from '../assets/Icon/eva_arrow-next-fill.svg'
import BeanImg from '../assets/Icon/bean.png'
import People1 from '../assets/people-1.png'
import People2 from '../assets/people-2.png'
import People3 from '../assets/people-3.png'
import Slider from 'react-slick'
import StarImg from '../assets/Icon/star.png'
import { ReactComponent as Stars } from '../assets/Icon/stars.svg'
import UserImg from '../assets/Icon/user.png'
import { useState } from 'react'

const Testimoni = ({
  listUser = [
    {
      name: '원두 납품 매장 수',
      number: '21',
      icon: BeanImg,
    },
    {
      name: '구매 고객 평점',
      number: '5.0/5.0',
      icon: StarImg,
    },
    {
      name: '누적 구매 고객',
      number: '25,000+',
      icon: UserImg,
    },
  ],
  listTestimoni = [
    {
      name: '박종선',
      image: People1,
      job: "식물 카페 '노크' 사장",
      rating: '5.0',
      testimoni:
        '제가 지금까지 먹어본 커피 중에 가장 맛있는 커피였습니다. 커피를 마시면서 행복한 시간을 보냈습니다. 다음에 또 먹고 싶네요',
    },
    {
      name: '네이버 구매고객',
      image: People2,
      job: '34세 여성',
      rating: '5.0',
      testimoni:
        '플로랄 블랜드 시켰는데, 너무 맛있게 잘 먹었어요~ 동네 지인들 집에 놀러와서 티타임 가졌는데 다들 맛있다고 어디서 구매했냐고 물어보더라구용! 뿌듯하고 기분이 좋더라구요 ㅋ 다 마시면 또 주문하겠습니당♡',
    },
    {
      name: '김지혜',
      image: People3,
      job: '프리랜서 디자이너',
      rating: '4.8',
      testimoni:
        '이 커피는 창의적인 작업에 영감을 줄 정도로 맛이 훌륭합니다. 아침에 한 잔의 커피로 하루를 시작하면 생각이 정리되고, 디자인에 대한 새로운 아이디어가 떠오르죠. 감사합니다!',
    },
    {
      name: '이동욱',
      image: People2,
      job: 'IT 스타트업 대표',
      rating: '4.9',
      testimoni:
        '스타트업을 운영하며 바쁜 일상 속에서 이 커피는 제게 짧은 휴식을 선사합니다. 맛과 향이 뛰어나서 중요한 미팅 전에 집중을 돕습니다. 늘 책상 위에 놓여 있어야 할 필수품입니다!',
    },
    {
      name: '박민아',
      image: People3,
      job: '대학원생',
      rating: '5.0',
      testimoni:
        '밤샘 공부가 잦은 대학원생입니다. 이 커피 덕분에 잠을 쫓고 집중력을 유지할 수 있어요. 커피의 깊은 맛이 공부하는 저녁 시간을 더욱 풍요롭게 만들어 줍니다.',
    },
  ],
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  const [sliderRef, setSliderRef] = useState(null)

  return (
    <div>
      <Slider {...settings} arrows={false} ref={setSliderRef} className="flex items-stretch justify-items-stretch">
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div
              className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col"
              style={{ minHeight: '260px' }}
            >
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <img
                    src={listTestimonis.image}
                    alt="Icon People"
                    style={{
                      height: '50px',
                      width: '50px',
                      borderRadius: '50%', // 이 부분이 이미지를 원형으로 만듭니다.
                      objectFit: 'cover', // 이미지 비율을 유지하면서 원형에 꽉 차게 합니다.
                    }}
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">{listTestimonis.name}</p>
                    <p className="text-sm text-black-500 capitalize">{listTestimonis.job}</p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">"{listTestimonis.testimoni}"</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-white-500 w-16 h-16 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-12 w-12" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">{listUsers.number}</p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Testimoni
