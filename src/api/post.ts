import axios from 'axios';
import { BASE_URL, CONFIG } from '../utils/constants';
import { IPostPayload } from '../types';

export const getLatestPosts = async () => {
  const { data } = await axios.get(`${BASE_URL}/posts`, CONFIG);
  return data.payload.posts.data;
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
  return data.payload.comments;
};

export const createPost = async (payload: IPostPayload) => {
  const { data } = await axios.post(`${BASE_URL}/posts`, payload, CONFIG);
  return data.payload;
};
