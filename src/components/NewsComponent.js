import React, { Component } from 'react'

export class NewsComponent extends Component {

    render() {
        let { title, des, newimg , urll , Author , date} = this.props;
        return (
            <div className="container"> <div className="card" style={{ width: 18 + 'rem' }}>
                    <img src={!newimg?newimg="https://fdn.gsmarena.com/imgroot/news/23/05/iphone-15-pro-max-same-camera-display/-952x498w6/gsmarena_001.jpg":newimg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{des}</p>
                        <p class="card-text"><small class="text-muted">{Author} <br /> {new Date(date).toGMTString()} </small></p>
                        <a href={urll} target='_blank' className="btn btn-sm btn-dark">Go somewhere</a>
                    </div>
                </div>
                
                
                </div>
               
           

        )
        
    }
}

export default NewsComponent
