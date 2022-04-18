import React from "react";
import GenresListRow from "../../components/genres-list-row/GenresListRow";
import { getGenres } from '../../functions/genres';

export default class GenresList extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            genres: []   
        }
    }

    componentDidMount() {  
        getGenres().then(genres => this.setState({genres}));   
    }

    render() {
        const rows = this.state.genres.map(genre => 
            <GenresListRow  
                key={genre.uuid} 
                genre={genre} 
                deleteGenre={this.deleteGenre} 
                
            />
        );
        
        return (
            
            <>
                <table className="table container mt-5">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className="text-end"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
            </>
        );
    }
}


