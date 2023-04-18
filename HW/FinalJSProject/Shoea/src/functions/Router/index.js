import Navigo from 'navigo'
import { LoginPage, FirstProductPage } from '@/screens'

export const Router = () => {
  const root = document.getElementById('app')
  const route = new Navigo('/')
  route
    .on('/login', () => {
      root.innerHTML = ''
      root.append(LoginPage())
    })
    .on('/home', () => {
      root.innerHTML = ''
      root.append(FirstProductPage())
    })
    .notFound(() => {
      console.log('page not found!!!')
    })
  route.resolve()
  return route
}
