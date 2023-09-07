import React, { Component } from "react";
import MyNav from "./components/navbar/MyNav";
import MyFooter from "./components/footer/MyFooter";
import MySpinner from "./components/spinner/MySpinner";
import { navLinks } from "./data/navLinks";
import { nanoid } from "nanoid";
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
      console.log(`loading...`)
      const response = await fetch("https://epibooks.onrender.com/");
      const data = await response.json();

      const dataWithKeys = data.map((book) => ({
        ...book,
        id: nanoid(),
      }));

      this.setState({ books: dataWithKeys });
      this.setState({ isLoading: false });
      console.log(`loaded!!!`)
    } catch (errore) {
      console.log(`QUALCOSA È ANDATO STORTO: ${errore}`);
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
          {this.state.isLoading && <MySpinner />}
          {!this.state.isLoading && <LastestRelease books={this.state.books} />}
        </>

        <>
          <MyFooter />
        </>
      </>
    );
  }
}
