import React, { useContext } from 'react';
import content from '../../services/Content';
import { CurrentFileContext } from '../../services/CurrentFileContext';

const searchResults = ({ city, county }) => {
    const cityResults = content.filter(
        (item) => item.city && item.city === city
    );
    const countyResults = content.filter(
        (item) => item.county && item.county === county
    );

    return {
        cityResults,
        countyResults,
    };
};

const ShowResults = ({ results }) => {
    const { dispatch } = useContext(CurrentFileContext);

    return (
        <div>
            {results.map((item, index) => (
                <div
                    key={index}
                    style={{
                        border: 'thin solid',
                    }}
                >
                    <h1
                        onClick={() =>
                            dispatch({
                                type: 'setCurrentFile',
                                currentFile: item.fileName,
                            })
                        }
                        style={{ cursor: 'pointer' }}
                    >
                        {item.title}
                    </h1>
                    {item.content}
                </div>
            ))}
        </div>
    );
};

const Search = ({ city, county }) => {
    const { cityResults, countyResults } = searchResults({ city, county });

    return (
        <div
            style={{
                border: 'thick solid',
                marginLeft: 200,
                width: 800,
            }}
        >
            <div>
                {cityResults.length ? (
                    <ShowResults results={cityResults} />
                ) : (
                    <div>No results found for city {city}</div>
                )}
            </div>
            <br />
            <br />
            <div>
                {countyResults.length ? (
                    <ShowResults results={countyResults} />
                ) : (
                    <div>No results found for county {county}</div>
                )}
            </div>
        </div>
    );
};

export default Search;
