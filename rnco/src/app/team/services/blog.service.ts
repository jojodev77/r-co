
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

/**rxjs */
import { Observable } from 'rxjs';


/** Models */
import { Comments } from '../models/comment.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  env = environment;

  constructor(private http: HttpClient) { }

  createComments(comments: Comments): Observable<Comments> {
    return this.http.post<Comments>(this.env.createCommentsUrl, comments)
  }

  getAllComments(comments: Comments): Observable<Comments> {
    return this.http.get<Comments>(this.env.getAllCommentsUrl)
  }
}
