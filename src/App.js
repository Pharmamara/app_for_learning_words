import React from "react";
import { Routes, Route } from "react-router-dom";
import words from "./components/Dictionary";
import Header from "./components/header/header";
import Error404 from "./components/error404/error404";
import Slider from "./components/slider/slider";
import WordList from "./components/wordList/wordList";
import Training from "./components/training/training";
import style from "./App.module.css";

function App() {
  return (
    <>
      <div className={style.App}>
        <Header />
        <Routes>
          <Route path="/" element={<WordList />}></Route>
          <Route path="/wordTable" element={<WordList />}>
            Список слов
          </Route>
          <Route path="/wordCards" element={<Slider words={words} />}>
            Карточки слов
          </Route>
          <Route path="/wordTraining" element={<Training />}>
            Карточки слов
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
