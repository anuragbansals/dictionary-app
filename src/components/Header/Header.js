import { MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";
import countries from "../../Category/categories";

const Header = ({ word, setWord, language, setLanguage, setMeanings }) => {
  const handleChange = (e) => {
    setLanguage(e.target.value);
    setWord("");
    setMeanings([]);
  };
  return (
    <div className="header">
      <span>{word ? word : "Word Search"}</span>
      <div className="input">
        <TextField
          id="standard-basic"
          label="Serach"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={language}
          onChange={(e) => handleChange(e)}
          helperText="Please select your language"
        >
          {countries.map((ele) => (
            <MenuItem key={ele.label} value={ele.label}>
              {ele.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
