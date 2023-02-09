import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();
const BASE_URL = "https://restcountries.com/v3.1/alpha/VN";
// const nationalityUrl = "https://restcountries.com/v3.1/name";
// const countryToNameUrl = "https://restcountries.com/v3.1/alpha/{code}";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState();
  // const [showResult, setShowResult] = useState(true);

  //fetch API
  const fetchCountryAPI = () => {
    axios.get(BASE_URL).then((response) => {
      console.log(response.data[0].name);
    });
  };

  useEffect(() => {
    fetchCountryAPI(name);
  }, [name]);

  // clicking

  return (
    <AppContext.Provider value={(name, setName, loading, setLoading)}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
