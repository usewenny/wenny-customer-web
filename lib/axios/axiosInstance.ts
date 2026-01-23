import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// Create axios instance with custom config
export const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    // Log request in development
    if (process.env.NODE_ENV === "development") {
      console.log("📤 Request:", config.method?.toUpperCase(), config.url);
    }

    return config;
  },
  (error: AxiosError) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (process.env.NODE_ENV === "development") {
      console.log("📥 Response:", response.status, response.config.url);
    }

    return response;
  },
  (error: AxiosError) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;

      switch (status) {
        case 401:
          console.error("🔒 Unauthorized - Token may be invalid");
          // Clear token and redirect to login
          if (typeof window !== "undefined") {
            localStorage.removeItem("token");
            // window.location.href = "/login";
          }
          break;
        case 403:
          console.error("🚫 Forbidden - Access denied");
          break;
        case 404:
          console.error("🔍 Not Found");
          break;
        case 500:
          console.error("💥 Server Error");
          break;
        default:
          console.error(`❌ Error ${status}:`, error.message);
      }
    } else if (error.request) {
      // Request made but no response
      console.error("📡 Network Error - No response received");
    } else {
      // Something else happened
      console.error("❌ Error:", error.message);
    }

    return Promise.reject(error);
  }
);

// Helper function for GET requests
export const get = async <T>(url: string, config = {}) => {
  const response = await axiosInstance.get<T>(url, config);
  return response.data;
};

// Helper function for POST requests
export const post = async <T>(url: string, data = {}, config = {}) => {
  const response = await axiosInstance.post<T>(url, data, config);
  return response.data;
};

// Helper function for PUT requests
export const put = async <T>(url: string, data = {}, config = {}) => {
  const response = await axiosInstance.put<T>(url, data, config);
  return response.data;
};

// Helper function for DELETE requests
export const del = async <T>(url: string, config = {}) => {
  const response = await axiosInstance.delete<T>(url, config);
  return response.data;
};
