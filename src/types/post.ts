import { IUser } from './user';

export interface IPost {
  _id: string;
  slug: string;
  title: string;
  content: string;
  commentCount: number;
  likeCount: number;
  saveCount: number;
  author: IUser;
  createdAt: Date;
  isEdited: boolean;
  isSaved: boolean;
  isLiked: boolean;
  isOwner: boolean;
}

export interface IPostPayload {
  title: string;
  content: string;
}
export interface IPagination {
  currentPage: number;
  lastPage: number;
  prevPage: number | null;
  nextPage: number | null;
  total: number;
}

export interface IPostPaginated {
  data: IPost[];
  meta: IPagination;
}
