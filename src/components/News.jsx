import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {
  constructor() {
  let  articles = [
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Abeer Salman, Mohammed Tawfeeq, Jennifer Hauser",
        "title": "Israeli police storm al-Aqsa mosque for the second time on Wednesday - CNN",
        "description": "Israeli police stormed the al-Aqsa mosque in Jerusalem, one of Islam's holiest sites, for the second time on Wednesday, hours after they first raided the compound and arrested hundreds of Palestinians despite condemnations from the Arab and Muslim world.",
        "url": "https://www.cnn.com/2023/04/05/middleeast/israel-al-aqsa-mosque-clash-intl-hnk/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230404234435-01-al-aqsa-mosque-raid-040423-restricted.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-04-06T05:11:00Z",
        "content": "Israeli police stormed the al-Aqsa mosque in Jerusalem, one of Islams holiest sites, for the second time on Wednesday, hours after they first raided the compound and arrested hundreds of Palestinians… [+7314 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "Lea Skene, Brian Witte",
        "title": "Report details 'staggering' church sex abuse in Maryland - The Associated Press",
        "description": "BALTIMORE (AP) — More than 150 Catholic priests and others associated with the Archdiocese of Baltimore sexually abused over 600 children and often escaped accountability, according to a long-awaited state report released Wednesday that revealed the scope of …",
        "url": "https://apnews.com/article/baltimore-archdiocese-sex-abuse-report-7d5d3af098da59a1c9313a246566638c",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/c55163837d4e4347a258f18ffb8dd6e6/3000.webp",
        "publishedAt": "2023-04-06T04:45:46Z",
        "content": "BALTIMORE (AP) More than 150 Catholic priests and others associated with the Archdiocese of Baltimore sexually abused over 600 children and often escaped accountability, according to a long-awaited s… [+8396 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Endpoints News"
        },
        "author": "Andrew Dunn",
        "title": "Pfizer RSV data set up $10B showdown with GSK and Moderna for the next big vaccine market - Endpoints News",
        "description": "The first-ever RSV vaccines are inching closer to reality in what industry executives and analysts anticipate as the start of the next blockbuster vaccine race that could form a $10 billion-plus market. On Wednesday, Pfizer published two papers in the New Eng…",
        "url": "https://endpts.com/pfizer-rsv-data-sets-up-10b-showdown-with-gsk-and-moderna-for-the-next-big-vaccine-market/",
        "urlToImage": "https://endpts.com/wp-content/uploads/2022/07/Pfizer-shutterstock-social1.jpg",
        "publishedAt": "2023-04-06T03:55:55Z",
        "content": "The Pocono Mountains in Pennsylvania are usually more of a tourist destination, but Sanofi is turning a small town in the area into a hub for vaccine production.\r\nSanofi has broken ground on a new fo… [+658 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "James O'Brien",
        "title": "Rangers, Lightning combine for 70 penalty minutes in chaotic, fight-filled game - Yahoo Sports",
        "description": "The Rangers and Lightning combined for a game full of violent hits, nasty fights and perhaps some costly injuries on Wednesday.",
        "url": "https://ca.sports.yahoo.com/news/nhl-rangers-lightning-combine-70-penalty-minutes-chaotic-fight-filled-game-034438676.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/GHFAtEm2qASuipVaTF47GA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-04/9ce8b470-d428-11ed-bbff-cf60c961d14a",
        "publishedAt": "2023-04-06T03:44:00Z",
        "content": "Things got heated between the Rangers and Lightning on Wednesday. (Danny Wild-USA TODAY Sports)\r\nThe New York Rangers and Tampa Bay Lightning combined for a game full of violent hits, nasty fights an… [+2220 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Clare Foran, Simone McCarthy",
        "title": "Taiwan's president warns 'democracy is under threat' in joint remarks with McCarthy - CNN",
        "description": "Taiwan President Tsai Ing-wen delivered a dire warning that \"democracy is under threat\" as she met with US House Speaker Kevin McCarthy on Wednesday in California, a highly anticipated event that marked a show of democratic solidarity in defiance of threats f…",
        "url": "https://www.cnn.com/2023/04/05/politics/tsai-ing-wen-taiwan-meeting-mccarthy-california-hnk/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230405140718-01-tsai-ing-wen-kevin-mccarthy-meeting-230405.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-04-06T02:13:00Z",
        "content": "Taiwan President Tsai Ing-wen delivered a dire warning that democracy is under threat as she met with US House Speaker Kevin McCarthy on Wednesday in California, a highly anticipated event that marke… [+8304 chars]"
      },
      {
        "source": {
          "id": "fox-news",
          "name": "Fox News"
        },
        "author": "Paul Best",
        "title": "Chicago firefighter dies while battling blaze in high-rise apartment building - Fox News",
        "description": "A Chicago firefighter died while responding to a blaze in a high-rise apartment building on Wednesday morning in the city's Gold Coast neighborhood, officials said.",
        "url": "https://www.foxnews.com/us/chicago-firefighter-dies-battling-blaze-high-rise-apartment-building",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/chicago-thumb.png",
        "publishedAt": "2023-04-06T01:30:00Z",
        "content": "A 26-year veteran of the Chicago Fire Department died while responding to a blaze in a high-rise apartment building on Wednesday morning, the second firefighter to die in the city in as many days, of… [+1853 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Post"
        },
        "author": "Ian O'Connor",
        "title": "This sad version of Phil Mickelson looks completely out of place at Masters - New York Post ",
        "description": "As Mickelson practiced on the putting green Wednesday, two longtime golf fans kept asking each other, “Is that him? Is that Phil? Is it?”",
        "url": "https://nypost.com/2023/04/05/phil-mickelson-looks-completely-out-of-place-at-the-masters/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/newspress-collage-26464439-1680739325068.jpg?quality=75&strip=all&1680725350&w=1024",
        "publishedAt": "2023-04-06T00:35:00Z",
        "content": "AUGUSTA, Ga. Bob Moczulewski, a Phil Mickelson fan from western Massachusetts, leaned over the Augusta National ropes off the eighth fairway and shouted a thank you to his fellow lefty for signing hi… [+4989 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "Carla K. Johnson",
        "title": "Novel treatment shows promise against rare cancer in kids - The Associated Press",
        "description": "A novel treatment using supercharged immune cells appears to work against tumors in children with a rare kind of cancer, researchers reported Wednesday. Nine of 27 children in the Italian study had no sign of cancer six weeks after the treatment, although two…",
        "url": "https://apnews.com/article/cancer-car-t-cell-treatment-children-9c957b7b0737067cb37a61d4449f38dc",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/bb079e97011b49c894cf4d37a7a874f3/2700.webp",
        "publishedAt": "2023-04-05T22:54:15Z",
        "content": "A novel treatment using supercharged immune cells appears to work against tumors in children with a rare kind of cancer, researchers reported Wednesday.\r\nNine of 27 children in the Italian study had … [+2968 chars]"
      }
    ]
    super();
    console.log("Hello I am a constructor from news component")
    this.state = {articles:this.articles ,
      loading:false

    }  
    // console.log(articles) 
//    let fibonacciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//      let doubledFibonacciNumbers = fibonacciNumbers.map(number => number * 2) 
//  console.log(doubledFibonacciNumbers)  
  
 

  } 

  render() { 
   
    return ( 
      
      <div className='container my-3'>
        <h2> News App-Top Headlines</h2>  
    
        {/* {this.state.articless.map((element)=>{console.log(element)})} */}
        {/* {this.state.articless.map((element)=>{console.log(element)})} */} 
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        <div className='row'> 
        {this.state.articles.map((element)=>{
return    <div className='col-md-4 ' key={element.url}>  
<Newsitem  title={element.title} description={element.description}  imgurl={element.urlToImage} />
</div>

        })}   
       
         
        </div>


      </div>
    )
  }
}

export default News
