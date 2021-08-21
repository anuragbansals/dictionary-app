import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import InputField from './components/InputField/InputField'

function App() {
  const [language, setLanguage] = useState("en");
  const [word, setWord] = useState("");
  const fetchData = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [word, language]);
  return <div style={{width:'100vh'}}>
    <Container>
      <Header 
      word = {word} 
      setWord = {setWord} 
      language={language}
      setLanguage = {setLanguage}
      />
    </Container>
  </div>;
}

export default App;
