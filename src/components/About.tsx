import AboutImg from '../assets/about.jpg'
import BeanImg from '../assets/Icon/bean.png'
import StarImg from '../assets/Icon/star.png'
import UserImg from '../assets/Icon/user.png'

const About = ({
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
}) => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">L O Y H</h1>
          <div className="text-center w-full text-black-600 font-medium tracking-widest">ROASTERS</div>
          <div>
          <p className="text-black-600 mt-4 mb-0 font-medium">About</p>
          <p className="text-black-500 mt-2 mb-2">로이 로스터스는 사람들의 라이프 스타일에 중요한 부분을 차지하고 있는 짧은 여유의 시간을 한 잔의 커피를 소비함으로써 시각적 매력과 후각적 만족(Design & Flavor)을 느끼게 하는 것에 집중합니다.</p>
          <p className="text-black-500 mt-4 mb-2">우리의 목표는 사람들에게 “기분 좋은 여운”을 남기는 것입니다. 바쁘고 지친 일상에서 커피 한 잔을 마시는 짧은 순간에 사람들에게 힐링, 행복 그리고 안락함을 전달하고 다시 일상으로 돌아가면서 커피 향의 긴 여운을 느낄 수 있도록 최고의 커피를 제공합니다.</p>
          <p className="text-black-600 mt-4 mb-0 font-medium" >Communication</p>
          <p className="text-black-500 mt-2 mb-2">LOYH는 충성을 뜻하는 “LOYALTY”의 의미를 가지고 있고 이것은 커피 패키지에 새겨진 로이로스터스의 시그니처 프린트 패턴에도 그 의미를 담고 있습니다. 충성이라는 단어는 로이 로스터스의 디자인, 서비스, 고객, 커피의 품질과 테이스트에 적용되며 또한 멋진 커피 문화를 만들어가는 커피인들과 커피를 즐기는 모든 사람들에 대한 존경의 의미로 해석할 수 있습니다.</p>
          <p className="text-black-500 mt-4 mb-2">로이 로스터스는 시각적 매력과 후각적인 만족을 동시에 추구하는 브랜드 입니다.
우리는 좀 더 예술적인 방향으로 커피 문화를 즐길 수 있도록 시각적인 매력을 충분히 전달할 것이며 사람들에게 우리의 Flavor에 대한 호기심을 자극하고 우리의 커피가 어디에서 왔는지 어떠한 방식으로 제조되는지 더 많은 질문을 받을 수 있도록 우리의 영감을 전달할 것 입니다.</p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </div>
      <div className="relative w-full flex">
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: 'blur(114px)' }}
        />
      </div>
    </div>
  )
}

export default About
