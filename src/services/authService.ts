import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

export type LoginCredentials = {
  username: string;
  password: string;
};

export type LoginResponse = {
  token: string;
}

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('users/login', credentials);
  return response.data;
};