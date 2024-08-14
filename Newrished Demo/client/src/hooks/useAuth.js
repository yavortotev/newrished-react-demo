import { login, register, logout } from "../api/auth-api"
import { useAuthContext } from "../components/context/AuthContext.jsx"



export const useLogin = () => {
    const { changeAuthState } = useAuthContext()

    const loginHandler = async (email, password) => {

        const result = await login(email, password)

        changeAuthState(result)

        return result
    }

    return loginHandler
}


export const useRegister = () => {
    const { changeAuthState } = useAuthContext()
    const registerHandler = async (email, password) => {
        const result = await register(email, password)
        changeAuthState(result)
        return result
    }
    return registerHandler
}

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext()

    const logoutHandler = async () => {
        await logout()
        localLogout()

    }
    return logoutHandler

}