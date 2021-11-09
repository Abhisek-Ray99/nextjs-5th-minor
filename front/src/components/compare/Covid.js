import React, { Component } from 'react'
import axios from 'axios'

import Loading from './Loading'
import CountryTable from './CountryTable'

class Covid extends Component {

    state = {
        countries: [],
        filterText: "",
        allCountryTotal: 0,
        selectedCountries: [],
    };

    url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv'
    async componentDidMount() {
        const response = await axios.get(this.url)
        // console.log(response.data)
        const rows = response.data.split("\n");
        // console.log(rows[0].split(","))


        const countries = [];
        let allCountryTotal = 0;

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const countryName = row[0].replace(/"/g, "");
            const total = Number(row[4]);
            // console.log(countryName)
            if (countryName !== "") {
                countries.push({
                    name: countryName,
                    total: total,
                });
                allCountryTotal += total;
            }
        }
        // console.table(countries)
        await new Promise(function (x) {
            setTimeout(x, 1000);
        });
        this.setState({ countries, allCountryTotal });
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {

        const { allCountryTotal } = this.state;

        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>
                    All country Total Cases: {this.numberWithCommas(allCountryTotal)}
                </h1>
                {allCountryTotal === 0 ? (
                    <Loading />
                ) : (
                    <CountryTable countries={this.countries} />
                )}
            </div>
        )
    }

}

export default Covid
