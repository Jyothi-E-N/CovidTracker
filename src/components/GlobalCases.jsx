import React from "react";

const GlobalCases = ({ global }) => {
    let formatDate = (date) => {
        let now = new Date();
        let diff = now - date;
        let sec = 1000;
        if (diff < sec) {
            return "right now";
        } else if (diff < 60 * sec) {
            return `${Math.floor(diff / sec)} sec. ago`;
        } else if (diff < 60 * 60 * sec) {
            return `${Math.floor(diff / (60 * sec))} min. ago`;
        }
        return (
            `${("0" + date.getDate()).slice(-2)}.` +
            `${("0" + (date.getMonth() + 1)).slice(-2)}.` +
            `${("" + date.getFullYear()).slice(2)} ` +
            `${("0" + date.getHours()).slice(-2)}:` +
            `${("0" + date.getMinutes()).slice(-2)}`
        );
    };

    return (
        <div className="d-flex flex-column justify-content-center mt-5">
            <h4 className="mx-5 mb-4 fw-normal">Global covid cases</h4>
            <div className="row gy-4 justify-content-around align-items-center">
                <div
                    className="col-lg-3 col-sm-4 mx-2 bg-white py-3 px-2"
                    style={{
                        boxShadow:
                            "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
                        backdropFilter: "blur( 4px )",
                        borderRadius: "10px",
                    }}
                >
                    <h6
                        className=""
                        style={{
                            color: "#0071bd",
                        }}
                    >
                        New Confirmed
                    </h6>
                    <hr style={{ color: "#0071bd" }} />
                    <div className="p-2">
                        <h4
                            className="ml-3 fw-normal"
                            style={{
                                color: "#0071bd",
                            }}
                        >
                            {global["NewConfirmed"].toLocaleString("en-US")}
                        </h4>
                        <p>
                            Last updated at:{" "}
                            {formatDate(new Date(global["Date"]))}
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-3 col-sm-4 mx-2 bg-white py-3 px-2 py-2"
                    style={{
                        boxShadow:
                            "box-shadow: 0 8px 32px 0 rgba(168, 50, 50, 0.37);",
                        backdropFilter: "blur( 4px )",
                        borderRadius: "10px",
                    }}
                >
                    <h6
                        className=""
                        style={{
                            color: "#a83232",
                        }}
                    >
                        New Deaths
                    </h6>
                    <hr style={{ color: "rgba(168, 50, 50, 1)" }} />
                    <div className="p-2">
                        <h4
                            className="ml-3 fw-normal"
                            style={{
                                color: "#a83232",
                            }}
                        >
                            {global["NewDeaths"].toLocaleString("en-US")}
                        </h4>
                        <p>
                            Last updated at:{" "}
                            {formatDate(new Date(global["Date"]))}
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-3 col-sm-4 mx-2 bg-white py-3 px-2 py-2"
                    style={{
                        boxShadow:
                            "box-shadow: 0 8px 32px 0 rgba(66, 179, 104, 1)",
                        backdropFilter: "blur( 4px )",
                        borderRadius: "10px",
                    }}
                >
                    <h6
                        className=""
                        style={{
                            color: "#42b368",
                        }}
                    >
                        New Recovered
                    </h6>
                    <hr
                        style={{
                            color: "#42b368",
                        }}
                    />
                    <div className="p-2">
                        <h4
                            className="ml-3 fw-normal"
                            style={{
                                color: "#42b368",
                            }}
                        >
                            {global["NewRecovered"].toLocaleString("en-US")}
                        </h4>
                        <p>
                            Last updated at:{" "}
                            {formatDate(new Date(global["Date"]))}
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-3 col-sm-4 mx-2 bg-white py-3 px-2 py-2 "
                    style={{
                        boxShadow:
                            "box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
                        backdropFilter: "blur( 4px )",
                        borderRadius: "10px",
                    }}
                >
                    <h6 className="" style={{ color: "rgba(0, 113, 189,1)" }}>
                        Total Confirmed
                    </h6>
                    <hr style={{ color: "gba(0, 113, 189,1)" }} />
                    <div className="p-2">
                        <h4
                            className="ml-3 fw-normal"
                            style={{
                                color: "#0071bd",
                            }}
                        >
                            {global["TotalConfirmed"].toLocaleString("en-US")}
                        </h4>
                        <p>
                            Last updated at:{" "}
                            {formatDate(new Date(global["Date"]))}
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-3 col-sm-4 mx-2 bg-white py-3 px-2 py-2 "
                    style={{
                        boxShadow:
                            "box-shadow: 0 8px 32px 0 rgba(168, 50, 50, 0.37);",
                        backdropFilter: "blur( 4px )",
                        borderRadius: "10px",
                    }}
                >
                    <h6 className="" style={{ color: "rgba(168, 50, 50, 1)" }}>
                        Total Deaths
                    </h6>
                    <hr style={{ color: "rgba(168, 50, 50, 1)" }} />
                    <div className="p-2">
                        <h4
                            className="ml-3 fw-normal"
                            style={{
                                color: "#a83232",
                            }}
                        >
                            {global["TotalDeaths"].toLocaleString("en-US")}
                        </h4>
                        <p>
                            Last updated at:{" "}
                            {formatDate(new Date(global["Date"]))}
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-3 col-sm-4 mx-2 bg-white py-3 px-2 py-2"
                    style={{
                        boxShadow:
                            "box-shadow: 0 8px 32px 0 rgba(66, 179, 104, 1)",
                        backdropFilter: "blur( 4px )",
                        borderRadius: "10px",
                    }}
                >
                    <h6 className="" style={{ color: "rgba(66, 179, 104, 1)" }}>
                        Total Recovered
                    </h6>
                    <hr style={{ color: "rgba(66, 179, 104, 1)" }} />
                    <div className="p-2">
                        <h4
                            className="ml-3 fw-normal"
                            style={{
                                color: "#42b368",
                            }}
                        >
                            {global["TotalRecovered"].toLocaleString("en-US")}
                        </h4>
                        <p>
                            Last updated at:{" "}
                            {formatDate(new Date(global["Date"]))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalCases;
