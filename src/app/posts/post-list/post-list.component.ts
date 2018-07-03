import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First post', content: 'This is the first post\'s content' },
  //   { title: 'Second post', content: 'This is the second post\'s content' },
  //   { title: 'Third post', content: 'This is the third post\'s content' }
  // ];
  posts: Post[]  = [];
  private postSub: Subscription;
  // postsService: PostsService;

  // constructor(postsService: PostsService) {
  //   this.postsService = postsService;
  // }

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPost();
    this.postSub = this.postsService.getPostUpdatedListener()
      .subscribe( (posts: Post[]) => {
        this.posts = posts;
      });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
