import React, { Component } from 'react'

class CountryTable extends Component {

    render() {
        const { countries } = this.props
        return (
            <table class="items-center bg-white w-full border-collapse px-40">
                <thead>
                    <tr>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Country
                        </th>
                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Total
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {countries.map((country) => (
                        <tr>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                {country.name}
                            </td>
                            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {country.total}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        )
    }

}

export default CountryTable
