import { ElementGenerator } from '@/library'

export const LoadingPage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'bg-orange-400 w-[430px] h-[926px] flex flex-col justify-center items-center',
    child: [
      ElementGenerator({
        element: 'img',
        className: 'w-[231px] h-[63px]',
        src: './src/assets/image/ShoeaIconWithWord.png'
      })
    ]
  })
}
