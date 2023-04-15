import { ElementGenerator } from '@/library'

export const FirstProductPage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'h-[926px] flex flex-col p-5',
    child: [
      ElementGenerator({
        element: 'div',
        className: '',
        child: [
          ElementGenerator({
            element: 'div',
            className: '',
            child: [
              ElementGenerator({
                element: 'div',
                className: '',
                child: [
                  ElementGenerator({
                    element: 'img',
                    className: 'w-12 rounded-full',
                    src: './src/assets/image/farzadProf.jpg'
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  })
}
