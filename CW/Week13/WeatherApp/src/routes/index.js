import {ElementGenerator} from "@/library/index.js";
import {Login, Register} from "@/screens"

export const Routes = () => {
    const routes = document.getElementById('routes') || ElementGenerator({element: 'div'})
    routes.innerHTML = ''
    switch (location.pathname) {
        case '/' :
            return routes.innerHTML = 'yaro welcome'
        case '/login' :
            return routes.appendChild(Login())
        case '/register' :
            return routes.appendChild(Register())
        default :
            return routes.innerHTML = 'gom shodi!'
    }
}