import Router from 'next/router'

export const changeRoute = (route: string) => {
  Router.replace(route)
}