import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from news component")
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0


    }

    document.title = `News Monkey :${this.props.category}`


  }

  async updateNews() { 
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0e80bca7f444d2fb657b854f43b5422&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url); 
    this.props.setProgress(30);
    let parsedData = await data.json(); 
    this.props.setProgress(60);
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // // console.log("render 22"); 
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0e80bca7f444d2fb657b854f43b5422&page=1&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false }); 
    this.updateNews();

  }


  handlePreviousClick = async () => {
    // console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0e80bca7f444d2fb657b854f43b5422&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);


    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    // }) 
    this.setState({ page: this.state.page - 1 });
    this.updateNews()
  }
  handleNextClick = async () => {
    console.log("next");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 6)) {
    // }
    // else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0e80bca7f444d2fb657b854f43b5422&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    //  this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);


    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading:false
    //   })
    // }  
    this.setState({ page: this.state.page + 1 });
    this.updateNews()
  }

  fetchMoreData =async () => {
   this.setState({page:this.state.page+1})
  //  this.updateNews()
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0e80bca7f444d2fb657b854f43b5422&page=${this.state.page}&pagesize=${this.props.pagesize}`;
  // this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({ articles:this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults,
    //  loading: false,
     });
  };



  render() {
    console.log("render11");
    return (

      <>
        <h1 className="text-center my-3">News Monkey: Top Headlines</h1>
        {  this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        > 
        <div className="container">
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element) => {
              // console.log(element) 
              return <div className='col-md-4' key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 15) : " "} description={element.description ? element.description.slice(0, 88) : " "} imgurl={element.urlToImage} newsUrl={element.url} dateTime={`${element.publishedAt.slice(0, 10)} [${element.publishedAt.slice(11, 16)}] `} />

              </div>
            })}

</div>
          </div>
        </InfiniteScroll>
        {/* <div>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary mx-3" onClick={this.handlePreviousClick}> &larr; Previous</button>
          <button disabled={this.state.page > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-primary mx-3" onClick={this.handleNextClick}>Next 	&rarr;</button>
        </div> */}
      </> 
    )
  }
}

export default News
