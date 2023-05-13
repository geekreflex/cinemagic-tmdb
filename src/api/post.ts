import axios from 'axios';
import { BASE_URL, CONFIG } from '../utils/constants';
import { IPostPayload } from '../types';

export const getLatestPosts = async (page: number) => {
  const { data } = await axios.get(`${BASE_URL}/posts`, {
    ...CONFIG,
    params: {
      page: page,
      limit: 4,
    },
  });
  return data.payload.posts;
};

export const getTrendingPosts = async (page: number) => {
  const { data } = await axios.get(`${BASE_URL}/posts/trending`, {
    ...CONFIG,
    params: {
      page: page,
      limit: 20,
    },
  });
  return data.payload.posts;
};

export const getPost = async (slug: string | undefined) => {
  const { data } = await axios.get(`${BASE_URL}/posts/${slug}`, CONFIG);
  return data.payload.post;
};

export const getPostComments = async (postId: string) => {
  const { data } = await axios.get(
    `${BASE_URL}/posts/${postId}/comments`,
    CONFIG
  );
  return data.payload.comments.data;
};

export const createPost = async (payload: IPostPayload) => {
  const { data } = await axios.post(`${BASE_URL}/posts`, payload, CONFIG);
  return data.payload;
};
