import { ElementGenerator } from '@/library'

export const WelcomePage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'w-screen h-[926px] bg-[url(./src/assets/image/welcomePageBackground.png)] flex justify-end flex-col',
    child: [
      ElementGenerator({
        element: 'div',
        className: 'flex flex-col gap-4 pl-10 pb-16',
        child: [
          ElementGenerator({
            element: 'p',
            className: 'text-[40px] text-white font-semibold',
            child: ['Welcome to',
              ElementGenerator({
                element: 'img',
                className: 'inline ml-4',
                src: './src/assets/image/WavingHandIcon.png'
              })
            ]
          }),
          ElementGenerator({
            element: 'p',
            className: 'font-bold text-7xl text-white',
            child: 'Shoea'
          }),
          ElementGenerator({
            element: 'p',
            className: 'font-semibold text-base text-white',
            child: 'The best sneakers & shoes e-commerse app of the century for your fashion needs!'
          })
        ]
      })
    ]
  })
}
