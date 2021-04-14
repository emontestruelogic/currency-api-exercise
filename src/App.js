import React from "react":
import ExchangeRates from './ExchangeRates';
import callAPI from './api';


function App() {

  const [currencies, setCurrencie] = useState([]);
  const [selectCurrecie, setSelectCurrecie] = useState("");

  useEffect(() => {
    const respApi = callAPI("USD");
    setCurrencie(respApi.conversion_rates);
  }, [currencies]) 

  handleChange = (e) => {
    const respApi = callAPI(e.target.value);
    setSelectCurrecie(respApi.conversion_rates);
  }

  return (
    <>
      <p>Hello World</p>
      <select onChange={handleChange}>
        {currencies.map(({key, value}) => {
          <option value={key}>{value}</option>
        })}
      </select>
      <ExchangeRates exchange={selectCurrecie} />
    </>
  );
}

export default App;
