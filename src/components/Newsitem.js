import React, { Component } from 'react'

export class Newsitem extends Component {


  render() {
    let { title, description, imgurl,newsUrl,dateTime } = this.props
    return (
      <div>
        <div className="card my-3" >
         {this.props.imgurl && <img src={imgurl} className="card-img-top" alt="..." />}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More </a> 
        
            <p className='card-text'>Published At: {dateTime}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem

