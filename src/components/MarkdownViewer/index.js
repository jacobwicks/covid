import React, { useCallback, useEffect, useState, useContext } from 'react';
import Markdown from 'markdown-to-jsx';
import { CurrentFileContext } from '../../services/CurrentFileContext';
import MarkdownFiles from '../../services/MarkdownFiles';

const MarkdownViewer = () => {
    const { currentFile } = useContext(CurrentFileContext);
    const [markdown, setMarkdown] = useState('');

    // const dispense = React.useCallback(candy => {
    //     setCandies(allCandies => allCandies.filter(c => c !== candy))
    //   }, [])
    //   Here's the original again:

    //   const dispense = candy => {
    //     setCandies(allCandies => allCandies.filter(c => c !== candy))
    //   }

    const getMarkdown = useCallback(async (currentFile) => {
        const md = await fetch(MarkdownFiles[currentFile]);

        const markdown = await md.text();
        setMarkdown(markdown);
    }, []);

    // const getMarkdown = async () => {
    //     const md = await fetch(MarkdownFiles[currentFile]);

    //     const markdown = await md.text();
    //     setMarkdown(markdown);
    // };

    useEffect(() => {
        currentFile && getMarkdown(currentFile);
    }, [currentFile, getMarkdown]);

    return (
        markdown && (
            <div
                style={{
                    border: 'thick solid',
                    borderRadius: 20,
                    marginLeft: 200,
                    width: 800,
                }}
            >
                <Markdown>{markdown}</Markdown>;
            </div>
        )
    );
};

export default MarkdownViewer;
