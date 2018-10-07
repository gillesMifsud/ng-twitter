import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {FeedService} from "../feed.service";
import {Tweet} from "../tweet";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets = [];
  tweetText = '';

  errorText = '';

  loaded = false;

  constructor(private userService: UserService, private feedService: FeedService) {
  }

  // Success case, Error case & When COMPLETE (this.loaded = true)
  ngOnInit() {
    this.feedService.getCurrentFeed().subscribe((newTweets) => {
        console.log(newTweets);
        this.tweets = newTweets;
      }, (err) => {
        this.errorText = `Error : ${err}`
      }, () => {
        this.loaded = true;
      }
    );
  }


  onFavorite(tweet) {
    this.feedService.favoriteTweet(tweet);
  }

  onRetweet(tweet) {
    this.feedService.reTweet(tweet);
  }

  onNewTweet() {
    console.log(this.tweetText);
    this.feedService.postNewTweet(this.tweetText).subscribe(
      (newTweet: Tweet) => {
        console.log(newTweet);
        this.tweets.unshift(newTweet);
      }, (err) => {
        this.errorText = `Error : ${err}`
      });
    this.tweetText = '';
  }

}
