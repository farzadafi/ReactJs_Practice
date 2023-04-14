import { ElementGenerator } from '@/library'

export const LoginPage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'h-[926px] bg-gray-300 p-4',
    child: [
      ElementGenerator({
        element: 'header',
        className: '',
        child: [
          ElementGenerator({
            element: 'img',
            className: '',
            src: './src/assets/image/arrow-left-short.png',
            onclick: () => { alert('last page') }
          })
        ]
      }),
      ElementGenerator({
        element: 'main',
        className: 'flex justify-center mt-32',
        child: [
          ElementGenerator({
            element: 'img',
            className: '',
            src: './src/assets/image/Vector1.png'
          })
        ]
      })
    ]
  })
}
