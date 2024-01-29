import React from 'react'

const Roadmap = () => {
  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="roadmap">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            <p className="text-center w-full text-black-600 font-medium ">"로이 로스터스의 여정"</p>
          </h3>
          <p className="text-center w-full text-black-600">향기로 채워진 시간의 발자취</p>
          <ul className="steps steps-vertical sm:w-6/12 lg:w-6/12 mx-auto mt-10">
            <li className="step step-primary text-black-600">
              <ul className="text-left">
                <li className="font-medium">2021.03</li>
                <li className="text-black-500">로이 로스터스 설립</li>
              </ul>
            </li>
            <li className="step step-primary text-black-600">
              <ul className="text-left">
                <li className="font-medium">2022.12</li>
                <li className="text-black-500">2022 ICT 에스프레소 부문 골드메달 수상</li>
              </ul>
            </li>
            <li className="step step-primary text-black-600">
              <ul className="text-left">
                <li className="font-medium">2023.12</li>
                <li className="text-black-500">2023 ICT 에스프레소 부문 골드메달 수상</li>
              </ul>
            </li>
            <li className="step text-black-600">
              <ul className="text-left">
                <li className="font-medium">2024.03</li>
                <li className="text-black-500">로이 로스터스 용인 보라점 직영점 오픈(예정)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
