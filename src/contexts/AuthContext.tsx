import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { authApi } from '../lib/api'
import type { User } from '../lib/api'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (username: string, password: string) => Promise<void>
  createCredentials: (
    t_number: string, 
    username: string, 
    email: string, 
    password: string
  ) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('tcn_auth_token')
        if (token) {
          const response = await authApi.getCurrentUser()
          if (response.success) {
            setUser(response.user)
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        // Clear invalid token
        authApi.logout()
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (username: string, password: string) => {
    const response = await authApi.login({ username, password })
    if (response.success) {
      setUser(response.user)
    }
  }

  const createCredentials = async (
    t_number: string, 
    username: string, 
    email: string, 
    password: string
  ) => {
    const response = await authApi.createCredentials({ 
      t_number, 
      username, 
      email, 
      password
    })
    if (response.success) {
      setUser(response.user)
    }
  }

  const logout = () => {
    authApi.logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        createCredentials,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
