// import react, react-markdown-editor-lite, and a markdown parser you like
import * as React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
const Contribute = ({ backToSearch }) => {
    function handleEditorChange({ html, text }) {
        console.log('handleEditorChange', html, text);
    }

    return (
        <div
            style={{
                maxWidth: 1000,
                marginLeft: 200,
            }}
        >
            Got information to add? Use this markdown editor to write your
            contribution.
            <br />
            <button
                onClick={() => backToSearch()}
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
                Back to Search Page
            </button>
            <MdEditor
                value="Your text goes here"
                style={{ height: '500px' }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
            />
        </div>
    );
};
export default Contribute;
