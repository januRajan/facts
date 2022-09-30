import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import './styles.css'

function App() {
  const [facts, setFacts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const limit = 10;
  const url = 'https://catfact.ninja/fact';

  useEffect(() => {
    async function fetchData() {
      let arraylist = []
      for (let i = 1; i <= limit; i++) {
        let data = await fetch(url).then(res => res.json()).then(data => data.fact).catch(err => console.log(err));
        arraylist.push(data);
      }
      setFacts(arraylist);
      setLoading(false)
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {
          isLoading ?
            <h1 className="title">Loading...</h1>
            : (
              <>
                <h1 className="title">Facts for the day</h1>
                <ul>{facts.map((fact, index) =>
                  <div className="list" key={index}>{fact}</div>
                )}
                </ul>
              </>
            )
        }
      </div>
    </>
  );
}

export default App;

