import NewsComponent from './NewsComponent'
import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'us',
        cat :'general'
    }

    static PropType = {
        country: PropTypes.string,
        cat : PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title=  `newzapp Boii | ${this.props.cat}` ;
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=ed810edf640d4adc9e87360df4934e52&pageSize=20`
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles })
        console.log(this.state.page);
    }

    handleNextClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=ed810edf640d4adc9e87360df4934e52&page=${this.state.page + 1}`
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        })
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=ed810edf640d4adc9e87360df4934e52&page=${this.state.page - 1}`
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);

        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }
    render() {
        return (
            

            <div className="container">
                <div className="container text-center mt-4 mb-2">
                  <h1> newzapp Boii - {this.props.cat} news</h1>
                </div>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className=" col-md-4 my-4" key={element.url}>
                            <NewsComponent title={element.title ? element.title.slice(0, 40) : ""} des={element.description ? element.description.slice(0, 100) : ""} newimg={element.urlToImage} urll={element.url} Author={element.author?element.author:"Unknown"} date={element.publishedAt}/>
                        </div>
                    })
                    }

                </div>

                <div className="container d-flex justify-content-between ">
                    <button type="Previous" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>Previous</button>
                    <button type="Next" className="btn btn-dark" onClick={this.handleNextClick}>Next </button>
                </div>
            </div>

        )
    }
}

export default News
