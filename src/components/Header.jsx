import { count } from "d3";
import React, { useState } from "react";
import { useGetCountryQuery } from "../services/covidapi";
import { useGetDatesQuery } from "../services/covidapi";
import {GlobalCases, Chart} from "./";


const Header = ({globalStat}) => {
    const { data: countries, isFetching } = useGetCountryQuery();
    const [Country, setCountry] = useState("India");
    const {data: dates, isFetch } = useGetDatesQuery(Country);
    const [Date, setDate] = useState("2020-01-30");

    if (isFetching) return "Loading...";

    return (
        <div>
            <div className="navbar bg-white">
                <div className="w-100">
                    <div className="navbar-header mx-3 d-flex flex-row justify-content-between align-items-center">
                        <h1 className="mary navbar-brand">Covid Tracker</h1>
                        <select
                            className="form-select ml-auto w-25"
                            aria-label=".form-select-sm example"
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option selected value="india">{Country}</option>
                            {countries
                                .filter((count) => count.Country != "India")
                                .map((country) => (
                                    <option value={country?.Slug}>
                                        {country.Country}
                                    </option>
                                ))}
                        </select>
                        <select
                            className="form-select ml-auto w-25"
                            aria-label=".form-select-sm example"
                            onChange={(e) => setDate(e.target.value)}
                        >
                            
                            <option value={Date} selected>{Date}</option>
                            {dates?.map((cntry)=>(<option value={cntry?.Date}>{cntry?.Date.split("T")[0]}</option>))}
                        </select>
                    </div>
                </div>
            </div>
            
            <GlobalCases global={globalStat}/>
            <div className="mx-5 my-4">
                <h4 className="fw-normal">Summary</h4>
                <Chart country={Country} date = {Date}/>
            </div>
        </div>
    );
};

export default Header;