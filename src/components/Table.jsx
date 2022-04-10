import React, { useState, useEffect } from "react";

const Table = ({ countries }) => {
    const [searchCountry, setSearchCountry] = useState("");
    const [countryList, setCountryList] = useState(countries);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        const filteredData = countries.filter((cntry) =>
            cntry.Country.toLowerCase().includes(searchCountry.toLowerCase())
        );
        if (filteredData.length == 0) setMsg("no result found");
        else setMsg("");

        setCountryList(filteredData);
    }, [countries, searchCountry]);

    console.log(countries);
    return (
        <div className="mx-5 my-3">
            <h4 className="mb-5 fw-normal">Covid cases by country</h4>
            <div className="mb-5">
                <div className="input-group w-25">
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Search"
                        value={searchCountry}
                        onChange={(e) => setSearchCountry(e.target.value)}
                    />
                </div>
                <p className="d-block fs-6 text-primary ml-auto w-25">{msg}</p>
            </div>
            {msg === "" ? (
                <div className="table-responsive">
                    <table class="table table-striped table-light">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th
                                    scope="col"
                                    style={{
                                        color: "#0071bd",
                                    }}
                                >
                                    Confirmed
                                </th>
                                <th
                                    scope="col"
                                    style={{
                                        color: "#42b368",
                                    }}
                                >
                                    Recovered
                                </th>
                                <th
                                    scope="col"
                                    style={{
                                        color: "#a83232",
                                    }}
                                >
                                    Deceased
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {countryList?.map((cntry) => (
                                <tr>
                                    <td scope="row">{cntry.Country}</td>
                                    <td>
                                        {cntry.TotalConfirmed.toLocaleString(
                                            "en-US"
                                        )}
                                    </td>
                                    <td>
                                        {cntry.TotalRecovered.toLocaleString(
                                            "en-US"
                                        )}
                                    </td>
                                    <td>
                                        {cntry.TotalDeaths.toLocaleString(
                                            "en-US"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Table;
