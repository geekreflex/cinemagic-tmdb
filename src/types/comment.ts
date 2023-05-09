import { IUser } from '.';

export interface IComment {
  _id: string;
  content: string;
  author: IUser;
  isSaved: boolean;
  isLiked: boolean;
  likeCount: number;
  saveCount: number;
  isEdited: boolean;
  createdAt: Date;
  updatedAt: Date;
}
