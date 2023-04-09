import { ElementGenerator } from '@/library'

export const WelcomePage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'w-screen h-[926px] bg-[url(./src/assets/image/welcomePageBackground.png)] flex justify-end flex-col',
    child: [
      ElementGenerator({
        element: 'div',
        className: 'bg-red-400',
        child: 'div'
      })
    ]
  })
}
