import axios from "axios";

const apiUrl = "http://localhost:8000/";

const api = axios.create({
   baseURL: apiUrl,
   withCredentials: true,
});

api.interceptors.request.use((config) => {
   const token = localStorage.getItem("token");
   if (token) {
      config.headers.Authorization = token;
   }
   return config;
});

api.interceptors.request.use(
   (config) => {
      return config;
   },
   async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;
         try {
            const response = await axios.get(`${apiUrl}auth/token/refresh/`, { withCredentials: true });
            localStorage.setItem("token", response.headers.authorization);
            return await api.request(originalRequest);
         } catch (error) {
            console.log(error);
         }
      }
   },
);

class UsersApi {
   async signIn<T>(data: T) {
      const response = await api.post("auth/token/", data);
      return response;
   }

   async signUp<T>(data: T) {
      const response = await api.post("users/", data);
      return response;
   }

   async checkAuth() {
      const response = await axios.get(`${apiUrl}auth/token/refresh/`, { withCredentials: true });
      return response;
   }

   async logout() {
      const response = await api.post("auth/logout/");
      return response;
   }
}
export const usersApi = new UsersApi();
