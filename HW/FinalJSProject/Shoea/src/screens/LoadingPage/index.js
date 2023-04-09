import { ElementGenerator } from '@/library'
import { svg } from '@/assets'

export const LoadingPage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'w-screen h-[926px] flex flex-col justify-center items-center',
    child: [
      ElementGenerator({
        element: 'img',
        className: 'w-[231px] h-[63px]',
        src: './src/assets/image/ShoeaIconWithWord.png'
      }),
      ElementGenerator({
        element: 'div',
        className: 'absolute top-1/3 transform translate-y-96',
        innerHTML: svg.loadingSvg
      })
    ]
  })
}
