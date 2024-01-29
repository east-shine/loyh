import ButtonPrimary from './misc/ButtonPrimary'
import Testimoni from './Testimoni'

const Partner = ({}) => {
  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="partners">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16" id="testimoni">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-5/12 mx-auto">
            커피 애호가들에게 사랑받는
            <br />
            로이 로스터스의 이야기
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            고객님의 삶에 특별한 순간을 선사한, 저희 커피에 대한 진솔한 이야기들입니다. 커피 한 잔이 가져다준 작지만
            확실한 행복, 여기서 확인하세요.
          </p>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
          <div className="relative w-full mt-16" id="story">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  "새로운 커피 이야기의 시작"
                </h5>
                <div className="mt-2">
                  <p>
                    인스타그램을 팔로우하고, 커피의 새로운 이야기와 특별한 순간들을 만나보세요. 여러분의 일상에 특별한
                    향기를 더할 <strong>로이 로스터스</strong>의 <br />
                    소식이 기다리고 있습니다.
                  </p>
                </div>
              </div>
              <a href="https://www.instagram.com/loyh_roasters" target="_blank" rel="noopener noreferrer">
                <ButtonPrimary>지금 팔로우하기</ButtonPrimary>
              </a>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: 'blur(114px)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
