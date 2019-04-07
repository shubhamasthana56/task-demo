import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  articles:any;

  constructor() { }

  ngOnInit() {
    this.articles = [{src:'assets/images/article1.jpg',link:'https://the-fit-foodie.com/recipes/low-carb-snickers-shake/',text:'I think we have all seen the Snickers ad with the infamous tagline – “You’re not yourself when you are hungry”. Well, this smoothie recipe will definitely fill the deepest of pits of stomachs without the nasties and added sugar.'},
                     { src:'assets/images/article2.jpg',link:'https://www.muscleandstrength.com/articles/5-barbell-hip-thrust-tips',text:'Completely transform your glutes by mastering perfect form on the barbell hip thrust. These 5 tips will help you take your glute strength to new heights.'},
                     {src:'assets/images/article3.jpg',link:'https://www.muscleandstrength.com/articles/complete-guide-to-trx-suspension-training',text:'The TRX Is a unique muscle building tool that is underutilized due to a lot of people not really knowing how to use it. Learn the basics with this article.'},
                     {src:'assets/images/article4.jpg',link:'https://www.muscleandstrength.com/articles/11-gymnastic-rings-exercises',text:'Dust off the Olympic rings that have been abandoned in the corner of your local gym and learn how to perform these 11 exercises. You wont be disappointed.'}]
  }

}
