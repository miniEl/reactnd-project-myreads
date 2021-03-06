import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class Library extends Component {
    render() {
        const currentlyReading = this.props.books.filter(
            book => book.shelf === "currentlyReading"
        );
        const wantToRead = this.props.books.filter(
            book => book.shelf === "wantToRead"
        );
        const read = this.props.books.filter(
            book => book.shelf === "read"
        );

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading"
                            bookshelf={currentlyReading}
                            onUpdateShelf={this.props.onUpdateShelf}
                        />
                        <BookShelf title="Want To Read"
                            bookshelf={wantToRead}
                            onUpdateShelf={this.props.onUpdateShelf}
                        />
                        <BookShelf title="Read"
                            bookshelf={read}
                            onUpdateShelf={this.props.onUpdateShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default Library;