import { UserResCommentDto } from '../services/comment.service';

export interface FeedBack {
  owner: UserResCommentDto;
  feedback: string;
  rating: number;
  createdTime: Date;
}
