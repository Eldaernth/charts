import React,{useState} from 'react';
import BarChart from "./charts/barchart/BarChart";
import {BarProvider} from "./context/BarContext";

export default function App() {

    return (
      <div className="App">
          <div>
              <BarProvider>
              <BarChart/>
              </BarProvider>
          </div>
      </div>
    );
}

