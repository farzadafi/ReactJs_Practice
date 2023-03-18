import {ElementGenerator} from '@/library'

export const Login = () => {
    return (ElementGenerator({
        element: 'div',
        id: 'authentication-modal',
        restAttrs: {
            'tabIndex': '-1',
            // 'aria-hidden': 'true'
        },
        className: 'flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full',
        child: [
            ElementGenerator({
                element: 'div',
                className: 'relative w-full h-full max-w-md md:h-auto',
                child: [
                    ElementGenerator({
                        element: 'div',
                        className: 'relative bg-white rounded-lg shadow dark:bg-gray-700',
                        child: [
                            ElementGenerator({
                                element: 'button',
                                type: 'button',
                                className: "absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                // restAttrs: {
                                //     'data-modal-hide': "authentication-modal"
                                // },
                                // innerHTML: " <svg aria-hidden='true' class='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg><span class='sr-only'>Close modal</span> "
                            }),
                            ElementGenerator({
                                element: 'div',
                                className: "px-6 py-6 lg:px-8",
                                child: [
                                    ElementGenerator({
                                        element: 'h3',
                                        className: "mb-4 text-xl font-medium text-gray-900 dark:text-white",
                                        child: 'Sign in to our platform'
                                    }),
                                    ElementGenerator({
                                        element: 'form',
                                        className: "space-y-6",
                                        child: [
                                            ElementGenerator({
                                                element: 'div',
                                                child: [
                                                    ElementGenerator({
                                                        element: 'label',
                                                        htmlFor: "email",
                                                        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                                                        child: 'Your email'
                                                    }),
                                                    ElementGenerator({
                                                        element: 'input',
                                                        type: "email",
                                                        name: "email",
                                                        id: "email",
                                                        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
                                                        placeholder: "name@company.com",
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            ElementGenerator({
                                                element: 'div',
                                                child: [
                                                    ElementGenerator({
                                                        element: 'label',
                                                        htmlFor: "password",
                                                        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                                                        child: 'Your password'
                                                    }),
                                                    ElementGenerator({
                                                        element: 'input',
                                                        type: "password",
                                                        name: "password",
                                                        id: "password",
                                                        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
                                                        placeholder: "password",
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            ElementGenerator({
                                                element: 'button',
                                                type: "submit",
                                                className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                                child: 'Login'

                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }))
}
