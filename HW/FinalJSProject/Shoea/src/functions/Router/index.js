import Navigo from 'navigo'
import { LoginPage } from '@/screens'

export const Router = () => {
  const root = document.getElementById('app')
  alert(root)
  const route = new Navigo('/')
  route
    .on('/login', () => {
      root.innerHTML = ''
      root.append(LoginPage())
    })
    .notFound(() => {
      console.log('page not found!!!')
    })
  route.resolve()
  return route
}
