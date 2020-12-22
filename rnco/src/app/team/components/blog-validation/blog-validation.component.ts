import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/** component */
import { Comments } from '../../models/comment.interface';

/** services */
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-blog-validation',
  templateUrl: './blog-validation.component.html',
  styleUrls: ['./blog-validation.component.scss']
})
export class BlogValidationComponent implements OnInit, AfterViewInit {

  constructor(  private commentService: CommentService,) { }

  comments: Comments[] = [];
  displayedColumns: string[] = ['Author', 'Commentaires', 'date', 'status'];
  dataSource = new MatTableDataSource<Comments>();
  @ViewChild(MatSort) sort: MatSort;
  status: string;

  ngOnInit(): void {
    this. initializeComments();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  initializeComments() {
    this.commentService.getAllComments().subscribe(
      (data: any) => {
        this.comments = data.comment;
        this.dataSource.data = this.comments;
        for (let index = 0; index < this.comments.length; index++) {
      
          this.statusOfComments(this.comments[index].validate)
          console.log(this.statusOfComments(this.comments[index].validate))
        }
      }
    )
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
}
