import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillStarFill, BsStarHalf, BsStar} from "react-icons/bs";


export default class MoviesListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className=" m-5 col-2" >
                <div className="shadow-lg p-2" style={{width: '280px'}}>
                    <img className="film ps-2" src={this.props.movie.image}  style={{height: '370px'}} alt="..."/>

                    <h5 className="card-title mt-3 mb-1" style={{height: '40px'}}>{this.props.movie.title}</h5>
                    <p>
                        <BsFillStarFill className="fs-3 text-warning"/>
                        <BsFillStarFill className="fs-3 text-warning"/>
                        <BsFillStarFill className="fs-3 text-warning"/>
                        <BsStarHalf className="fs-3 text-warning"/>
                        <BsStar className="fs-3 text-warning" />
                    </p>
            
                    <div className='text-center mt-3'>                                
                        <Link className="btn btn-primary" to={ `/movies/${this.props.movie._id}` } >Details</Link> {/*user={this.props.user}*/} 
                    </div>
                </div>    
            </div>
        );
    }
}