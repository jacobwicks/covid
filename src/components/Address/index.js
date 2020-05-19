// Imports
import React, { Component } from 'react';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class Address extends Component {
    // Define Constructor
    constructor(props) {
        super(props);

        // Declare State
        this.state = {
            city: '',
            county: '',
            query: '',
        };
    }

    handleScriptLoad = () => {
        // Declare Options For Autocomplete
        const options = {
            // types: ['(cities)'],
            componentRestrictions: { country: 'us' },
        }; // To disable any eslint 'google not defined' errors

        // Initialize Google Autocomplete
        /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            options
        );

        // Avoid paying for data that you don't need by restricting the set of
        // place fields that are returned to just the address components and formatted
        // address.
        this.autocomplete.setFields([
            'address_components',
            'formatted_address',
        ]);

        // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    };

    handlePlaceSelect = () => {
        // Extract City From Address Object
        const addressObject = this.autocomplete.getPlace();
        const address = addressObject.address_components;

        //this could be done a little better
        const county = address.find((component) =>
            component?.types?.includes('administrative_area_level_2')
        )?.long_name;

        console.log(address);
        const city = address.find((component) =>
            component?.types?.includes('locality')
        )?.long_name;

        // Check if address is valid
        if (address) {
            // Set State
            this.setState({
                city,
                county,
                query: addressObject.formatted_address,
            });

            this.props.setCityJurisdiction(city);
            this.props.setCountyJurisdiction(county);
        }
    };

    render() {
        return (
            <span>
                <Script
                    url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSBzpWCoKDndCryxQTsNcpZMfMVEGO4bA&libraries=places"
                    onLoad={this.handleScriptLoad}
                />
                <input
                    id="autocomplete"
                    placeholder=""
                    hintText="Search City"
                    value={this.state.query}
                    onChange={({ target }) => {
                        let query = target.value;
                        !query?.slice(-3)?.toLowerCase()?.includes('wa') &&
                            (query += ' wa');
                        this.setState({ ...this.state, query: target.value });
                    }}
                    style={{
                        margin: '0 auto',
                        maxWidth: 800,
                        marginLeft: 10,
                        width: 500,
                    }}
                />
            </span>
        );
    }
}

export default Address;
