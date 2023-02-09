import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const nationalityUrl = "https://api.nationalize.io/?name=michael";
const countryToNameUrl = "https://restcountries.com/v3.1/alpha/VN";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [typeName, setTypeName] = useState("");
  const [predictCountry, setPredictCountry] = useState("");

  //fetch API
  const fetchName = async () => {
    setLoading(true);
    try {
      const { data } = axios.get(nationalityUrl);
      if (data.country[0].country_id) {
        setTypeName(data.country[0].country_id);
        console.log(data.country[0].country_id);
      }
    } catch {}
  };

  const handleChange = (event) => {
    setTypeName(event.target.value);
  };

  return (
    <AppContext.Provider value={(loading, handleChange)}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
