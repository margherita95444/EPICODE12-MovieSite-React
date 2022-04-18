import React from 'react';
import {BsFillStarFill, BsStarHalf, BsStar} from "react-icons/bs";


export default function MoviesListRow(props) {
    console.log(props.movie)
    return(
        <div className=" m-5 col-md-3">
                <div >
                    <img className="film" src={props.movie.image}  alt="..."/>

                        <p className="card-title">{props.movie.title}</p>
                        <p>
                            <BsFillStarFill className="fs-3 text-warning"/>
                            <BsFillStarFill className="fs-3 text-warning"/>
                            <BsFillStarFill className="fs-3 text-warning"/>
                            <BsStarHalf className="fs-3 text-warning"/>
                            <BsStar className="fs-3 text-warning" />
                        </p>
                </div>    
            </div>
    )
 }