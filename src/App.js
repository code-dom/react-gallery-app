import React, { useState, useEffect } from "react";
import Search from "./components/search/Search";
import Navbar from "./components/Nav/Navbar";
import PhotoContainer from "./components/Photo Container/PhotoContainer";
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
    const response = await Axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${text}t&per_page=24&format=json&nojsoncallback=1`
    );
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
            component={() => (
              <PhotoContainer images={dogImages} statement='Results' />
            )}
          />
          <Route
            exact
            path='/cats'
            component={() => (
              <PhotoContainer images={catImages} statement='Results' />
            )}
          />
          <Route
            exact
            path='/computers'
            component={() => (
              <PhotoContainer images={computerImages} statement='Results' />
            )}
          />
          <Route
            exact
            path='/*'
            component={() => (
              <PhotoContainer images={images} statement={statement} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
