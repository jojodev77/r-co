import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/** models */
import { Comments } from 'src/app/team/models/comment.interface';

/** services */
import { BlogFormulaireService } from 'src/app/team/services/blog-formulaire.service';
import { CommentService } from 'src/app/team/services/comment.service';
import { PagerService } from '../services/pagination-service';


@Component({
  selector: 'app-livre-or',
  templateUrl: './livre-or.component.html',
  styleUrls: ['./livre-or.component.scss']
})
export class LivreOrComponent implements OnInit {

  constructor(
    private blogFormulaireService: BlogFormulaireService,
    private commentService: CommentService,
    private pagerService: PagerService  ) { }

  blogForm: FormGroup;
  comments: Comments[] = [];
  numberOfComments: number;
  numberOfCommentsArray: number[] = [];
      pager: any = {};
      pagedItems: any[];

  ngOnInit(): void {
  this.blogForm =  this.blogFormulaireService.buildForm();
  this.commentService.getAllComments().subscribe(
    (data: any) => {
      this.comments = data.comment;
      this.setPage(1);
    }
  )
 
  }

  createComments() {
    let comments = {
      article: this.blogForm.get('article').value,
      author: this.blogForm.get('author').value,
      validate: false,
      date: new Date().toString()
    } as Comments;
    this.commentService.createComments(comments).subscribe(
      (data: Comments) => {
        
      }
    )
  }

  // managementOfPaginate() {
  //   for (let index = 0; index < this.comments.length; index++) {
  //     this.numberOfCommentsArray.push(index);
  //     console.log(index)
  //   }
  //   return this.numberOfCommentsArray;

  // }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.comments.length, page);

    // get current page of items
    this.pagedItems = this.comments.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}
