import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useGetCountryCasesQuery } from "../services/covidapi";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const Chart = ({ country, date }) => {
    const [confirmed, setConfirmed] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const [deceased, setDeceased] = useState([]);
    const [dates, setDates] = useState([]);
    const [data, setData] = useState({});
    const [options, setOptions] = useState({});
    const [loaded, setLoaded] = useState(false);

    const { data: stats, isFetching } = useGetCountryCasesQuery({
        country,
        date,
    });

    const formData = (data) => {
        let confirm = [];
        let recover = [];
        let decease = [];
        let datesArr = [];
        let totalConfirm = 0;
        let totalRecover = 0;
        let totalDecease = 0;

        data?.map((d) => {
            if (datesArr == []) {
                confirm.push(d.Confirmed);
                recover.push(d.Recovered);
                decease.push(d.Deaths);
                datesArr.push(d["Date"].split("T")[0]);
            } else if (
                datesArr[datesArr.length - 1] === d["Date"].split("T")[0]
            ) {
                totalConfirm += d["Confirmed"];
                totalRecover += d["Recovered"];
                totalDecease += d["Deaths"];
            } else {
                totalConfirm += d["Confirmed"];
                totalRecover += d["Recovered"];
                totalDecease += d["Deaths"];
                confirm.push(d.Confirmed);
                recover.push(d.Recovered);
                decease.push(d.Deaths);
                datesArr.push(d["Date"].split("T")[0]);
                totalConfirm = 0;
                totalRecover = 0;
                totalDecease = 0;
            }
        });

        setConfirmed(confirm);
        setRecovered(recover);
        setDeceased(decease);
        setDates(datesArr);
    };

    const declareDataOptions = () => {
        let dataobj = {
            labels: dates,
            datasets: [
                {
                    label: "Number of deceased cases",
                    data: deceased,
                    fill: false,
                    backgroundColor: "#a83232",
                    borderColor: "#a83232",
                    yAxisID: "y",
                },
                {
                    label: "Number of recovered cases",
                    data: recovered,
                    fill: false,
                    backgroundColor: "#03fc84",
                    borderColor: "#03fc84",
                    yAxisID: "y",
                },
                {
                    label: "Number of confirmed cases",
                    data: confirmed,
                    fill: false,
                    backgroundColor: "#0071bd",
                    borderColor: "#0071bd",
                    yAxisID: "y",
                },
            ],
        };

        setData(dataobj);

        let optionsobj = {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };

        setOptions(optionsobj);
        setLoaded(true);
    };

    useEffect(() => {
        formData(stats);
        declareDataOptions();
        declareDataOptions();
    }, [stats]);

    return (
        <div>
            {loaded ? (
                <Line
                    data={{
                        labels: dates,
                        datasets: [
                            {
                                label: "Number of deceased cases",
                                data: deceased,
                                fill: false,
                                backgroundColor: "#a83232",
                                borderColor: "#a83232",
                                yAxisID: "y",
                            },
                            {
                                label: "Number of recovered cases",
                                data: recovered,
                                fill: false,
                                backgroundColor: "#03fc84",
                                borderColor: "#03fc84",
                                yAxisID: "y",
                            },
                            {
                                label: "Number of confirmed cases",
                                data: confirmed,
                                fill: false,
                                backgroundColor: "#0071bd",
                                borderColor: "#0071bd",
                                yAxisID: "y",
                            },
                        ],
                    }}
                    options={{
                        scales: {
                            y: { beginAtZero: true },
                        },
                    }}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Chart;
