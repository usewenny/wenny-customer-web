import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Example types
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// RTK Query API slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post", "User"],
  endpoints: (builder) => ({
    // Example: Get all posts
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    // Example: Get a single post
    getPost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
      providesTags: ["Post"],
    }),
    // Example: Get users
    getUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: ["User"],
    }),
    // Example: Create a post
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetUsersQuery,
  useCreatePostMutation,
} = apiSlice;
