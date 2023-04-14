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
      })
    ]
  })
}
