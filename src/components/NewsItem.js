import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {
        let {title,description ,imageUrl,newsUrl , author , date ,source} = this.props;
        return (
        <div className = "my-3 mx-3">
            <div className="card">
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "50%" , zIndex : '1'}}>{source}</span> 
                <img src={imageUrl === null || imageUrl === undefined ? "https://cdn.telanganatoday.com/wp-content/uploads/2023/07/hyderabad-1.jpg" : imageUrl}  className="card-img-top h-20" alt="img" />
                <div className="card-body">
                    <h5 className="card-title"> {title === null || title === undefined ? "Undefined" : title}{title.length >= 50 ? title + "..." : title} </h5>
                    <p className="card-text">{description === null || description === undefined ? "Undefined" : description}{description.length > 85 ? description + "..." : description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "UnKnown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
        </div>
        )
    }
}

export default NewsItem
