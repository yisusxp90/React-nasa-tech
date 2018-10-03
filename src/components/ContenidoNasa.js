import React, { Component } from 'react';

class ContenidoNasa extends Component {
    
    render() { 
        const {date, explanation, hdurl, title, url} = this.props.data;
        return ( 
            <div className="text-light text-center">
                <h2 className="mb-4">{title}</h2>
                <p> <span className="font-weight-bold">{date}</span></p>
                <p> <span className="font-weight-bold">{explanation} </span></p>
                <p> <span className="font-weight-bold">{hdurl}</span></p>
                <div className="card">
                    <div className="card-image">
                        <img src={hdurl} alt={title} />
                    </div>
                </div>
                
                <p> <span className="font-weight-bold">{url}</span></p>
                <div className="card">
                    <div className="card-image">
                        <img src={url} alt={title} />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ContenidoNasa;