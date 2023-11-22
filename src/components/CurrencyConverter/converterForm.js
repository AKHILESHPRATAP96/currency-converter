import React, { useEffect, useState } from "react";
import "../../components/CurrencyConverter/currencyconverter.css";
import { useNavigate } from "react-router-dom";

function ConverterForm() {
  let [data, setdata] = useState(null);
  const [SelectedSourceRate, setSelectedSourceRate] = useState("USD");
  const [SelectedTargetRate, setSelectedTargetRate] = useState("USD");
  const [inputAmount, setInputAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("converted amout");
  const [Date, setDate] = useState("updating Date");
  const [isSignIn, setisSignIn] = useState(true);
  let navigate = useNavigate();

  function handlesignInsuccess() {
    setisSignIn(false);
    alert("successfully loggedOut");
    navigate("/");
  }

  async function fetche() {
    try {
      let res = await fetch(
        "http://data.fixer.io/api/latest?access_key=c480c0635d7e5328eb4eaece9e8de2cc"
      );
      let resl = await res.json();
      setdata(resl);
      console.log(resl.date);
      setDate(resl.date);
    } catch (err) {
      console.log(err);
    }
  }

  function convertion() {
    if (!data) {
      return;
    }
    const sourceRate = data.rates[SelectedSourceRate];
    const targetRate = data.rates[SelectedTargetRate];
    const exchangeRate = targetRate / sourceRate;
    const convertedValue = (inputAmount * exchangeRate).toFixed(2);
    setConvertedAmount(convertedValue);
  }

  useEffect(() => {
    fetche();
  }, []);

  useEffect(() => {
    convertion();
  }, [SelectedSourceRate, SelectedTargetRate, inputAmount, data]);

  return (
    <div className="cont">
      <button onClick={handlesignInsuccess} className=" logout ">
        <i class="bi bi-box-arrow-right me-2"></i>logout
      </button>
      <div className="converter-container ">
        <h1 style={{ color: "white" }}>CURRENCY CONVERTER</h1>
        <h4 className="fst-italic mt-5  mb-5 " style={{ color: "white" }}>
          Updated on Date: {Date}
        </h4>
        <div className="converter-form ">
          <div className="input-section">
            <input
              type="number"
              className="form-control "
              placeholder="Amount"
              value={inputAmount}
              min={0}
              onChange={(e) => setInputAmount(e.target.value)}
            />
            <select
              value={SelectedSourceRate}
              onChange={(e) => setSelectedSourceRate(e.target.value)}
            >
              <option>{SelectedSourceRate}</option>
              {data &&
                Object.keys(data.rates).map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
            </select>
          </div>

          <div className="output-section">
            <input
              type="number"
              className="form-control"
              placeholder="Converted Amount"
              value={convertedAmount || "Converted Amount"}
              readOnly
            />
            <select
              value={SelectedTargetRate}
              onChange={(e) => setSelectedTargetRate(e.target.value)}
            >
              <option>{SelectedTargetRate}</option>
              {data &&
                Object.keys(data.rates).map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConverterForm;
