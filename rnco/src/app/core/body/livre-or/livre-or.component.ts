import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private pagerService: PagerService,
    private _snackBar: MatSnackBar  ) { }

  blogForm: FormGroup;
  comments: Comments[] = [];
  numberOfComments: number;
  numberOfCommentsArray: number[] = [];
      pager: any = {};
      pagedItems: any[];

  ngOnInit(): void {
  this.blogForm =  this.blogFormulaireService.buildForm();
  this.commentService.getAllCommentsByValidate().subscribe(
    (data: any) => {
      console.log(data)
      this.comments = data.comments;
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
    this.openSnackBar('Commentaires ajouté !', 'Il sera visible aprés validation')
  }

  // managementOfPaginate() {
  //   for (let index = 0; index < this.comments.length; index++) {
  //     this.numberOfCommentsArray.push(index);
  //     console.log(index)
  //   }
  //   return this.numberOfCommentsArray;

  // }

  setPage(page: number) {
    if (page) {
      if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    
    }

    // get pager object from service
    if (this.comments) {
      if (page) {
        console.log(this.comments)
      this.pager = this.pagerService.getPager(this.comments.length, page);
      }
      
    }
   

    // get current page of items
    if (this.comments) {
    if (this.pager) {
      this.pagedItems = this.comments.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
     
    }
    
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 3000,
  });
}
}
