import { ElementGenerator } from '@/library/'

const variants = {
  contained: 'bg-black text-slate-100 font-bold hover:bg-black',
  outlined: ' border border-1 text-blue-700 font-bold border-blue-700 hover:bg-[#E0E3FB]',
  link: 'bg-transparent'
}

export const Button = ({
  element = 'button',
  child,
  classes,
  variant = 'contained',
  ...rest
}) => {
  return ElementGenerator({
    element,
    className: `${variants[variant]} ${classes} inline-block rounded-md text-sm py-2 px-6`,
    child,
    ...rest
  })
}
