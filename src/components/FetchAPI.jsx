import React from 'react';
import {useState, useEffect} from "react";
import {GlobalCases, Header, Table} from "./";
import { useGetCountryQuery, useGetSummaryQuery } from "../services/covidapi";

const FetchAPI = () => {
    const {data, isFetching} = useGetSummaryQuery();

    if(isFetching) return "Loading...";

    return (
      <div>
          <div className='container-fluid'>
            <Header globalStat={data?.Global}/>
            <Table countries={data?.Countries}/>
          </div>
      </div>
    )
    
}

export default FetchAPI