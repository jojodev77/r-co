import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  env = environment;

  constructor(private http: HttpClient) { }

  createComments(comments: Comments): Observable<Comments> {
    return this.http.post<Comments>(this.env.createCommentsUrl, comments)
  }

  getAllComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.env.getAllCommentsUrl)
  }

  getAllCommentsByValidate(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.env.getAllCommentByValidate)
  }

  deleteById(comment: Comments): Observable<Comments> {
    return this.http.post<Comments>(this.env.deleteCommentsUrl, comment)
  }

  updateById(comment: Comments): Observable<Comments[]> {
    return this.http.put<Comments[]>(this.env.updateCommentsUrl, comment)
  }
}
