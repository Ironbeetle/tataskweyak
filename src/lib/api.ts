// API Client for TCN Member Portal Backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

// Types based on API documentation
export interface LoginRequest {
  username: string
  password: string
}

export interface CreateCredentialsRequest {
  t_number: string
  username: string
  email: string
  password: string
}

export interface UpdateProfileRequest {
  gender?: string
  o_r_status: string
  community: string
  address: string
  phone_number: string
  email: string
  image_url?: string
}

export interface UpdateFamilyRequest {
  spouse_fname?: string
  spouse_lname?: string
  dependents: number
}

export interface AuthResponse {
  success: boolean
  message: string
  token: string
  user: {
    id: string
    username: string
    email: string
    firstName: string
    lastName: string
    tNumber: string
    activated: string
    hasProfile?: boolean
    hasFamily?: boolean
  }
}

export interface User {
  id: string
  username: string
  email: string
  firstName: string
  lastName: string
  tNumber: string
  activated: string
  hasProfile?: boolean
  hasFamily?: boolean
}

export interface ApiError {
  success: false
  error: {
    message: string
    code?: string
  }
}

// Helper to get stored JWT token
const getAuthToken = (): string | null => {
  return localStorage.getItem('tcn_auth_token')
}

// Helper to store JWT token
export const setAuthToken = (token: string): void => {
  localStorage.setItem('tcn_auth_token', token)
}

// Helper to remove JWT token
export const removeAuthToken = (): void => {
  localStorage.removeItem('tcn_auth_token')
}

// Base fetch wrapper with JWT authentication
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  // Merge any additional headers from options
  if (options.headers) {
    Object.entries(options.headers).forEach(([key, value]) => {
      headers[key] = String(value)
    })
  }

  // Add JWT token if available
  const token = getAuthToken()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error?.message || 'An error occurred')
  }

  return data
}

// Auth API calls
export const authApi = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await apiRequest<AuthResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
    
    // Store token on successful login
    if (response.success && response.token) {
      setAuthToken(response.token)
    }
    
    return response
  },

  createCredentials: async (data: CreateCredentialsRequest): Promise<AuthResponse> => {
    const response = await apiRequest<AuthResponse>('/api/auth/create-credentials', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    
    // Store token on successful credential creation
    if (response.success && response.token) {
      setAuthToken(response.token)
    }
    
    return response
  },

  getCurrentUser: async (): Promise<AuthResponse> => {
    return apiRequest('/api/auth/me', {
      method: 'GET',
    })
  },

  logout: () => {
    removeAuthToken()
  },

  updateProfile: async (memberId: string, data: UpdateProfileRequest): Promise<{ success: boolean; message: string; data: any }> => {
    return apiRequest(`/api/members/${memberId}/profile`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },

  updateFamily: async (memberId: string, data: UpdateFamilyRequest): Promise<{ success: boolean; message: string; data: any }> => {
    return apiRequest(`/api/members/${memberId}/family`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },

  activateAccount: async (memberId: string): Promise<{ success: boolean; message: string; data: any }> => {
    return apiRequest(`/api/members/${memberId}/activate`, {
      method: 'POST',
    })
  },

  forgotPassword: async (email: string): Promise<{ success: boolean; message: string }> => {
    return apiRequest('/api/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  },

  resetPassword: async (token: string, newPassword: string): Promise<{ success: boolean; message: string }> => {
    return apiRequest('/api/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, newPassword }),
    })
  },
}

// Member API calls (placeholder for future)
export const memberApi = {
  getMembers: async (params?: {
    page?: number
    limit?: number
    search?: string
    community?: string
    reserve_status?: string
    include_deceased?: boolean
  }) => {
    const queryParams = new URLSearchParams()
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, String(value))
        }
      })
    }

    const query = queryParams.toString()
    const endpoint = `/api/members${query ? `?${query}` : ''}`
    
    return apiRequest(endpoint, {
      method: 'GET',
    })
  },

  getMemberById: async (id: string) => {
    return apiRequest(`/api/members/${id}`, {
      method: 'GET',
    })
  },
}

export default {
  auth: authApi,
  members: memberApi,
}
