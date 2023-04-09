import { ElementGenerator } from '@/library'

export const WelcomePage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'w-screen h-[926px] bg-[url(./src/assets/image/welcomePageBackground.png)] flex justify-end flex-col',
    child: [
      ElementGenerator({
        element: 'div',
        className: 'bg-red-400',
        child: [
          ElementGenerator({
            element: 'p',
            className: 'text-[40px] font-semibold',
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
            className: 'font-bold text-7xl',
            child: 'Shoea'
          }),
          ElementGenerator({
            element: 'p',
            className: 'font-semibold text-base',
            child: 'The best sneakers & shoes e-commerse app of the century for your fashion needs!'
          })
        ]
      })
    ]
  })
}
