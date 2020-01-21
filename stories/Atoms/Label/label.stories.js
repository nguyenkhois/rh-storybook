import React, { useEffect } from 'react';

// --- Base defintion ---
const filename = "label";
// --- End of base defintion ---

const { title, context } = require(`./${filename}.config.json`);
const hbsTemplate = require(`./${filename}.hbs`);

export default {
    title: title || 'undefined',
};

// A variant
export const WithText = () => {
    useEffect(() => { }, []);

    return <div dangerouslySetInnerHTML={{ __html: hbsTemplate(context) }} />;
};
