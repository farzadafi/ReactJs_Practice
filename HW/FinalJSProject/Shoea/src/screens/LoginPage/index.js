import { ElementGenerator } from '@/library'
import { svg } from '@/assets/index.js'
import { Button } from '@/components/index.js'

export const LoginPage = () => {
  const login = ElementGenerator({
    element: 'div',
    className: 'h-[926px] p-3',
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
        className: 'flex justify-center mt-32 flex-col items-center gap-24',
        child: [
          ElementGenerator({
            element: 'img',
            className: 'w-[3.3rem]',
            src: './src/assets/image/Vector1.png'
          }),
          ElementGenerator({
            element: 'div',
            className: 'flex flex-col gap-10 justify-center',
            child: [
              ElementGenerator({
                element: 'h1',
                className: 'font-semibold text-4xl text-center',
                child: 'Login to Your Account'
              }),
              ElementGenerator({
                element: 'div',
                className: 'flex flex-col gap-6',
                child: [
                  ElementGenerator({
                    element: 'div',
                    className: '',
                    child: [
                      ElementGenerator({
                        element: 'label',
                        htmlFor: 'email-address-id',
                        className: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      }),
                      ElementGenerator({
                        element: 'div',
                        className: 'relative',
                        child: [
                          ElementGenerator({
                            element: 'div',
                            className: 'absolute inset-y-6 left-0 flex items-center pl-3 pointer-events-none',
                            innerHTML: svg.emailSvg
                          })
                        ]
                      }),
                      ElementGenerator({
                        element: 'input',
                        type: 'text',
                        id: 'email-address-input-id',
                        className: 'bg-gray-50 border-none text-gray-900 text-lg rounded-lg focus:ring-black focus:ring-2 focus:border-black focus:border-xl block w-96 pl-10 p-2.5',
                        placeholder: 'Email'
                      })
                    ]
                  }),
                  ElementGenerator({
                    element: 'div',
                    className: '',
                    child: [
                      ElementGenerator({
                        element: 'div',
                        className: '',
                        child: [
                          ElementGenerator({
                            element: 'label',
                            htmlFor: 'password-id',
                            className: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                          }),
                          ElementGenerator({
                            element: 'div',
                            className: 'relative',
                            child: [
                              ElementGenerator({
                                element: 'div',
                                className: 'absolute inset-y-6 left-0 flex items-center pl-3 pointer-events-none',
                                innerHTML: svg.lockSvg
                              }),
                              ElementGenerator({
                                element: 'div',
                                className: 'absolute bg-orange-500 inset-y-6 left-[21.5rem] flex items-center pl-3 ',
                                id: 'hide-password-btn-id',
                                innerHTML: svg.eyeBlockSvg
                              })
                            ]
                          }),
                          ElementGenerator({
                            element: 'input',
                            type: 'password',
                            id: 'password-input-id',
                            className: 'bg-gray-50 border-none text-gray-900 text-lg rounded-lg focus:ring-black focus:ring-2 focus:border-black focus:border-xl block w-96 pl-10 p-2.5',
                            placeholder: 'Password'
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              ElementGenerator({
                element: 'div',
                className: 'flex items-start mb-6 justify-center',
                child: [
                  ElementGenerator({
                    element: 'div',
                    className: 'flex items-center h-5',
                    child: [
                      ElementGenerator({
                        element: 'input',
                        id: 'remember',
                        type: 'checkbox',
                        value: '',
                        className: 'w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:bg-black focus:ring-black checked:bg-black'
                      })
                    ]
                  }),
                  ElementGenerator({
                    element: 'label',
                    htmlFor: 'remember',
                    className: 'ml-2 text-sm font-medium text-gray-900 dark:text-gray-300',
                    innerHTML: 'Remember me'
                  })
                ]
              }),
              Button({
                child: 'Sign in',
                id: 'SignInButton',
                variant: 'contained',
                classes: 'bg-gray-500 rounded-full mt-40 hover:bg-gray-500'
              })
            ]
          })
        ]
      })
    ]
  })
  const passwordInput = login.querySelector('#password-input-id')
  const hidePasswordBtn = login.querySelector('#hide-password-btn-id')

  hidePasswordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'
      hidePasswordBtn.innerHTML = svg.eyePermitSvg
    } else {
      passwordInput.type = 'password'
      hidePasswordBtn.innerHTML = svg.eyeBlockSvg
    }
  })

  return login
}
