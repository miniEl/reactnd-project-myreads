import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Library from './components/Library';
import Search from './components/Search';
import './App.css';


class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  onUpdateShelf = (book, shelf) => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
    BooksAPI.update(book, shelf);
  };

  // onUpdateShelf = (book, shelf) => {
  //   BooksAPI.update(book, shelf).then(() => {
  //     console.log("updated");
  //     this.getAllBooks();
  //   });
  // }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Library
            onUpdateShelf={this.onUpdateShelf}
            books={this.state.books}
          />
        )} />
        <Route exact path="/search"
          render={() => (
            <Search
              onUpdateShelf={this.onUpdateShelf}
              books={this.state.books}
            />
          )} />
      </div >
    );
  }
}

export default BooksApp
