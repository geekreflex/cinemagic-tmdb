import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const getLatestPosts = async () => {
  const { data } = await axios.get(`${BASE_URL}/posts`);
  return data.payload.posts.data;
};

export const getPost = async (slug: string | undefined) => {
  const { data } = await axios.get(`${BASE_URL}/posts/${slug}`);
  return data.payload.post;
};

export const getPostComments = async (postId: string) => {
  const { data } = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
  return data.payload.comments;
};
