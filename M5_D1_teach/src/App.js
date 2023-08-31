import React, { Component } from 'react';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Button from "./components/Button/Button";

class App extends Component {
    render() {
        return(
           <>
               <Navbar />
               <Button
                   variant="btnred"
                   title="CIAO"
               />
               <Button
                   variant="btnblue"
                   title="Bottone 2"
               />
               <Button
                   variant="btnyellow"
                   title="SONO STATO CAMBIATOOOOOO"
               />
               <Button
                   variant="btnred"
                   title="PROPS"
               />
               <Footer />
           </>
        )
    }
}

export default App;


