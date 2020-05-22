import React, { useState, useEffect } from "react";
import Search from "./components/search/Search";
// import Image from "./components/Image/Image";
import Navbar from "./components/Navigation/Navbar";
import Photos from "./components/Photos/Photos";
import apiKey from "./config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Axios from "axios";

import "./App.css";
import "./styles/index.css";

function App() {
  const [images, setImages] = useState([]);
  const [dogImages, setDogImages] = useState([]);
  const [catImages, setCatImages] = useState([]);
  const [computerImages, setComputerImages] = useState([]);
  const [statement, setStatement] = useState("Results");

  useEffect(() => {
    const dogsData = async () => {
      const dogsResponse = await Axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogst&per_page=24&format=json&nojsoncallback=1`
      );
      setStatement("Results");

      setDogImages(dogsResponse.data.photos.photo);
    };
    const catsData = async () => {
      const catsResponse = await Axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`
      );
      setStatement("Results");

      setCatImages(catsResponse.data.photos.photo);
    };
    const computersData = async () => {
      const computersResponse = await Axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`
      );
      setStatement("Results");

      setComputerImages(computersResponse.data.photos.photo);
    };

    dogsData();
    catsData();
    computersData();
  }, []);

  const searchImages = async (text) => {
    console.log(apiKey);
    const response = await Axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${text}t&per_page=24&format=json&nojsoncallback=1`
    );
    console.log(response.data.photos.photo);
    if (response.data.photos.photo.length === 0) {
      setImages([]);
      setStatement("No Results Found");
    } else {
      setStatement("Results");
      setImages(response.data.photos.photo);
    }
  };
  return (
    <Router>
      <div className='App'>
        <Search searchImages={searchImages} />
        <Navbar />
        <Switch>
          <Route
            exact
            path='/dogs'
            component={() => <Photos images={dogImages} statement='Results' />}
          />
          <Route
            exact
            path='/cats'
            component={() => <Photos images={catImages} statement='Results' />}
          />
          <Route
            exact
            path='/computers'
            component={() => (
              <Photos images={computerImages} statement='Results' />
            )}
          />
          <Route
            exact
            path='/*'
            component={() => <Photos images={images} statement={statement} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
