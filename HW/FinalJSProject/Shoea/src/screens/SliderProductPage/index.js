import { ElementGenerator } from '@/library'
import Swiper from 'swiper/bundle'

const slides = [
  {
    text: 'We provide high quality products just for you'
  },
  {
    text: 'Your satisfaction is our number one priority',
    src: './src/assets/images/SliderSecondImage.png'
  },
  {
    text: 'Let’s fulfill your fashion needs with shoea right now!',
    src: './src/assets/images/SliderThirdImage.png'
  }
]

export const SliderProductPage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'h-[926px] bg-gray-300',
    child: [
    ]
  })
}
