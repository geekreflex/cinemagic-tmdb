import axios from 'axios';
import { BASE_URL, CONFIG } from '../utils/constants';

export const getUser = async (username: string) => {
  const { data } = await axios.get(
    `${BASE_URL}/users/username/${username}`,
    CONFIG
  );
  return data.payload.user;
};

export const geAuthtUser = async () => {
  const { data } = await axios.get(`${BASE_URL}/users/profile`, CONFIG);
  return data.payload.user;
};
