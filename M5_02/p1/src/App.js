import React, { Component } from "react";
import MyNav from "./components/navbar/MyNav";
import MyFooter from "./components/footer/MyFooter";
import { navLinks } from "./data/navLinks";
//import MyCard from "./components/card/MyCard";
import LastestRelease from "./components/lastestRelease/LastestRelease";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      isLoading: false,
      error: null,
    };
  }

  async getBooks() {
    try {
      this.setState({ isLoading: true });
      const response = await fetch("https://epibooks.onrender.com/");
      const data = await response.json();
      this.setState({ books: data });
      this.setState({ isLoading: false });
    } catch (errore) {
      console.log(errore);
      this.setState({ error: errore });
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books);
    return (
      <>
        <>
          <MyNav links={navLinks} />
        
          {!this.state.isLoading && 
            <LastestRelease books={this.state.books} />}
        </>
        
        <>
          <MyFooter />
        </>
      </>
    );
  }
}
