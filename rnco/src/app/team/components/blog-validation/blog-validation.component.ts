import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/** component */
import { Comments } from '../../models/comment.interface';

/** services */
import { CommentService } from '../../services/comment.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-validation',
  templateUrl: './blog-validation.component.html',
  styleUrls: ['./blog-validation.component.scss']
})
export class BlogValidationComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(  private commentService: CommentService, private location: Location, 
    private router: Router) { }

  comments: Comments[] = [];
  displayedColumns: string[] = ['Author', 'Commentaires', 'date', 'status', 'delete'];
  dataSource = new MatTableDataSource<Comments>();
  @ViewChild(MatSort) sort: MatSort;
  status: string;
  commentSubscription: Subscription;

  ngOnInit(): void {
    this. initializeComments();
    let token = sessionStorage.getItem('userConnectRNCO');
    if (!token) {
      this.router.navigate(['/login'])
      
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.commentSubscription.unsubscribe()
  }

  initializeComments() {
  this.commentSubscription =  this.commentService.getAllComments().subscribe(
      (data: any) => {
        this.comments = data.comment;
        this.dataSource.data = this.comments;
        for (let index = 0; index < this.comments.length; index++) {
      
          this.statusOfComments(this.comments[index].validate)
        }
      }
    ), (err) => {
      if (err.status === 401) { this.router.navigateByUrl('/login');
  }
}
  }

  statusOfComments(comments: boolean) {
  if ( comments !== undefined) {
    if (comments === true) {
      return true
    } 

    if (comments === false) {
      return null;
    }
  }
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateCommentStatutOfTrue(comment: any) {
    let com = {
      author: comment.author,
      article: comment.article,
      validate: false,
      date: comment.date,
      id: comment.id
    } as Comments;
    this.commentService.updateById(com).subscribe(
      (data: any) => 
      this.comments = data.comment
    );
   this.initializeComments();
  }

  updateCommentStatutOfFalse(comment: Comments) {
    let com = {
      author: comment.author,
      article: comment.article,
      validate: true,
      date: comment.date,
      id: comment.id
    } as Comments;
    this.commentService.updateById(com).subscribe(
      (data: any) => 
      this.comments = data.comment
    )
    this.initializeComments();
  }

  deteComment(comment: Comments) {
    console.log(comment)
    this.commentService.deleteById(comment).subscribe(
      (data: any) => 
      this.comments = data.comment
    ) 
    this.initializeComments();
  }

  pageRefresh() {
    location.reload();
 }
}
