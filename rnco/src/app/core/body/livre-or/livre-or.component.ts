import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

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
export class LivreOrComponent implements OnInit, OnDestroy {

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
      commentSubscription: Subscription;

  ngOnInit(): void {
  this.blogForm =  this.blogFormulaireService.buildForm();
  this.initializeComment(); 
  }

  ngOnDestroy() {
    this.commentSubscription.unsubscribe();
  }

  initializeComment() {
 this.commentSubscription =   this.commentService.getAllCommentsByValidate().subscribe(
      (data: any) => {
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
   this.initializeComment();
    this.openSnackBar('Commentaires ajouté !', 'Il sera visible aprés validation')
  }


  setPage(page: number) {
    if (page) {
      if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    
    }

    // get pager object from service
    if (this.comments) {
      if (page) {
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
    panelClass: ['warning']
  });
}
}
