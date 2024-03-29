import {ElementGenerator, switchDarkMode} from '@/library'
import {Button} from '@/components'
import {Routes} from "@/routes"

export const Header = () => {
    const header = (ElementGenerator({
        element: 'div',
        className: 'flex w-[1000px] px-8 py-2 justify-between items-center',
        child: [
            ElementGenerator({
                element: 'label',
                className: 'relative inline-flex items-center mr-5 cursor-pointer',
                child: [
                    ElementGenerator({
                        element: 'input',
                        id: 'toggleSwitch',
                        className: 'sr-only peer',
                        type: 'checkbox',
                        checked: false,
                        child: ''
                    }),
                    ElementGenerator({
                        element: 'div',
                        className: 'w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600'
                    }),
                    ElementGenerator({
                        element: 'span',
                        className: 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300',
                        child: 'Dark Mode'
                    })
                ]
            }),
            ElementGenerator({
                element: 'div',
                className: 'flex items-center gap-5',
                child: [
                    ElementGenerator({
                        element: 'h2',
                        className: 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl font-bold',
                        child: 'Welcome National Weather Service'
                    }),
                    ElementGenerator({
                        element: 'img',
                        className: 'w-16',
                        src: './src/assets/image/sun-and-cloud.png'
                    })
                ]
            }),
            ElementGenerator({
                element: 'div',
                className: 'flex gap-2',
                child: [
                    Button({
                        child: 'Register',
                        id: 'registerBtn',
                        variant: 'contained',
                        classes: 'w-24'
                    }),
                    Button({
                        child: 'Login',
                        id: 'loginBtn',
                        variant: 'contained',
                        classes: 'w-24'
                    })
                ]
            })
        ]
    }))
    header.querySelector('#registerBtn').addEventListener('click', e => {
        history.pushState(null, null, '/register')
        Routes()
    })
    header.querySelector('#loginBtn').addEventListener('click', () => {
        history.pushState(null, null, '/login')
        Routes()
    })
    const input = header.querySelector('#toggleSwitch')
    input.addEventListener('change', switchDarkMode)
    return header
}