import { TOKEN } from './token';

export const BASE_URL: string = `http://localhost:8080/v1`;

export const CONFIG = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};
