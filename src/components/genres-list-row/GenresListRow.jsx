import React from 'react';
import { Link } from 'react-router-dom';



export default class GenresListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.genre.uuid)
        return (
            <tr>
                <td>{ this.props.genre.name }</td>
                <td className="text-end">
                    <Link className="btn btn-primary" to={ `/genres/${this.props.genre.uuid}` } genre={this.props.genre}>Movies</Link> 
                </td>
            </tr>
        );
    }
}