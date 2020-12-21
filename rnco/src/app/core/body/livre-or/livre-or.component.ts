import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/** models */
import { Comments } from 'src/app/team/models/comment.interface';

/** services */
import { BlogFormulaireService } from 'src/app/team/services/blog-formulaire.service';
import { CommentService } from 'src/app/team/services/comment.service';


@Component({
  selector: 'app-livre-or',
  templateUrl: './livre-or.component.html',
  styleUrls: ['./livre-or.component.scss']
})
export class LivreOrComponent implements OnInit {

  constructor(
    private blogFormulaireService: BlogFormulaireService,
    private commentService: CommentService  ) { }

  blogForm: FormGroup;
  comments: Comments[] = [];

  ngOnInit(): void {
  this.blogForm =  this.blogFormulaireService.buildForm();
  this.commentService.getAllComments().subscribe(
    (data: any) => {
      this.comments = data.comment;
      console.log(this.comments)
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
}
