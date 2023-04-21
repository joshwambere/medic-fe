/* eslint-disable  react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "@/shared/redux/store"
import { isValidToken } from "@/shared/utils/jwt"
import { removeCredentials, setCredentials } from "@/shared/redux/slices/auth.slice"
import { routes } from "@/config/router.config"
import { BaseApi } from "@/services/api/api"

const WithPrivateRoute = (Wrapped: any) => {
  return (props: any) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const token = useSelector((state: RootState) => state.auth.token)
    const localToken = localStorage.getItem('_medic_tkn__')

    if (!token && localToken) dispatch(setCredentials({ refreshToken: localToken }))

    if (!token && !localToken) {
      dispatch(removeCredentials())
      dispatch(BaseApi.util.resetApiState())
      router.replace(routes.login.url)
      return null
    }
    if ((token && !isValidToken(token)) || (localToken && !isValidToken(localToken))) {
      dispatch(removeCredentials())
      dispatch(BaseApi.util.resetApiState())
      router.replace(routes.login.url)
      return null
    }
    return <Wrapped {...props} />
  }
}

export default WithPrivateRoute