import CertificateImg from '../assets/certificate.png'
import ICT2022Img from '../assets/2022.jpeg'
import ICT2023Img from '../assets/2023.jpeg'

const Feature = () => {
  return (
    <div className="max-w-screen-xl mt-100 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="feature">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <img
              src={CertificateImg}
              alt=""
              style={{
                height: '500px',
                width: '500px',
                borderRadius: '50%', // 이 부분이 이미지를 원형으로 만듭니다.
                objectFit: 'cover', // 이미지 비율을 유지하면서 원형에 꽉 차게 합니다.
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-10/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            전문성을 갖춘 로스터의 커피를 직접 경험해 보세요
          </h3>
          <p className="my-2 text-black-500">
            여러분이 즐길 커피 한 잔에는 이탈리아에서 온 로스팅의 비밀과 에스프레소의 예술, 세계적으로 인정받는 전문성이
            담겨 있습니다.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative circle-check custom-list">에스프레소 테이스터 (M1)</li>
            <li className="relative circle-check custom-list">이탈리안 로스팅 스쿨 (IRS)</li>
            <li className="relative circle-check custom-list">SCA 디플로마</li>
            <li className="relative circle-check custom-list">
              프로페셔널 (바리스타, 로스팅, 브루잉, 센서리, 그린커피)
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-10/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            2년 연속 국제 원두 출품 대회 ICT 골드메달 수상 🏅
          </h3>
          <p className="italic mt-4">
            ICT (국제 커피 테이스팅 대회) 전 세계 로스터들이 참여, 이탈리아 현지에서 브라질과 프랑스, 영국과 이탈리아의
            유명 대학의 연구기관이 참여해 이룩한 과학적인 방법으로 전문적인 IIAC 감정사들의 엄격한 심사를 거쳐 선정되는
            커피는 골드 메달 수여와 함께 IIAC 홈페이지에 수상 제품이 등재되어 소비자들에게 공개됩니다.
          </p>
        </div>
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <img src={ICT2022Img} alt="" />
            <img src={ICT2023Img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
