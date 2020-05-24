import React, { useState } from 'react';
import './App.css';
import Address from './components/Address';
import MarkdownViewer from './components/MarkdownViewer';
import SearchResults from './components/Search';
import { CurrentFileProvider } from './services/CurrentFileContext';
import Contribute from './scenes/Contribute';

const App = () => {
    const [cityJurisdiction, setCityJurisdiction] = useState('');
    const [countyJurisdiction, setCountyJurisdiction] = useState('');

    const [scene, setScene] = useState('');

    return (
        <CurrentFileProvider>
            <div>
                <h1 style={{ marginLeft: 200 }}>
                    Washington Legal Info Search
                </h1>
                {scene === 'contribute' ? (
                    <Contribute backToSearch={() => setScene('')} />
                ) : (
                    <div>
                        <h3 style={{ marginLeft: 200 }}>
                            Do you have valuable information that people need to
                            know? 
                            <br />
                            <br />
                            <button
                                onClick={() => setScene('contribute')}
                                style={{
                                    backgroundColor: 'green',
                                    border: 'none',
                                    borderRadius: 10,
                                    color: 'white',
                                    padding: '15px 32px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    fontSize: 16,
                                    margin: '4px 2px',
                                    cursor: 'pointer',
                                }}
                            >
                                Add your info!
                            </button>
                        </h3>
                        <div style={{ marginLeft: 200 }}>
                            <h3>
                                Your address:
                                <Address
                                    setCityJurisdiction={setCityJurisdiction}
                                    setCountyJurisdiction={
                                        setCountyJurisdiction
                                    }
                                />
                            </h3>
                        </div>
                        <div style={{ marginLeft: 200 }}>
                            <h3>Jurisdiction:</h3>
                            <h3>City: {cityJurisdiction}</h3>
                            <h3>County: {countyJurisdiction}</h3>
                        </div>
                        <br />
                        <br />
                        <SearchResults
                            city={cityJurisdiction}
                            county={countyJurisdiction}
                        />
                        <br />
                        <br />
                        <MarkdownViewer />
                    </div>
                )}
            </div>
        </CurrentFileProvider>
    );
};

export default App;
