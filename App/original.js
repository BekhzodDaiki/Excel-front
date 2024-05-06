// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// AI ASK
const askAi = {
    rows: [
        {
            columns: [],
        },
        {
            columns: [
                { value: 'WRITE INSTRAGRAM POST' },
            ],
        },
        {
            columns: [
                { value: "'Function'" },
                { value: "'=AI.ASK(prompt,[value],[temperature],[maxTokens],[model])" },
            ],
        },
        {
            columns: [
                { value: "Task:" },
                { value: "Write an instagram post about my recent travel" },
            ],
        },
        {
            columns: [
                { value: "Destination:" },
                { value: "Florence, Italy" },
            ],
        },
        {
            columns: [
                { value: "Length:" },
                { value: "50 words" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: "=AI.ASK(A4:B6)" },
                { value: '👈 See AI function here' },
                { value: 'In order to use the function install our "ChatGPT for Excel" add-in' },
            ],
        },
    ],
};

// Ai TAble
// const tableAi = {
//     rows: [
//         {
//             columns: [],
//         },
//         {
//             columns: [
//                 { value: '' },
//                 { value: 'TABLE MOVIES OF ALL TIME' },
//             ],
//         },
//         {
//             columns: [
//                 { value: '' },
//                 { value: "Function" },
//                 { value: "'=AI.TABLE(prompt,[value],[temperature],[maxTokens],[model])" },
//             ],
//         },
//         {
//             columns: [
//                 { value: '' },
//                 { value: "Prompt" },
//                 { value: "Top 10 movies of all times with release year and main actor" },
//             ],
//         },
//         {
//             columns: [{ value: 'In order to use the function install our "ChatGPT for Excel" add-in' },],
//         },
//         {
//             columns: [
//                 { value: 'See function here 👉' },
//                 { value: "=AI.TABLE(C4)" },

//             ],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [
//                 { value: '' },
//                 { value: 'TABLE WITH SPECIFIC COLUMNS' },
//             ],
//         },
//         {
//             columns: [
//                 { value: '' },
//                 { value: "Prompt" },
//                 { value: "Top 10 movies of all times with release year and main actor" },
//             ],
//         },
//         {
//             columns: [
//                 { value: 'In order to use the function install our "ChatGPT for Excel" add-in' },
//             ],
//         },
//         {
//             columns: [
//                 {},
//                 { value: 'Year' },
//                 { value: 'Title' },
//                 { value: 'Director' },
//                 { value: 'Country' },
//             ],
//         },
//         {
//             columns: [
//                 { value: 'See function here 👉' },
//                 { value: "=AI.TABLE(C20;B22:E22)" },
//             ],
//         },
//     ],
// };

// Ai Translate
const translateAi = {
    rows: [
        {
            columns: [],
        },
        {
            columns: [
                { value: '' },
                { value: 'TRANSLATE SINGLE CELL' },
            ],
        },
        {
            columns: [
                { value: "Function" },
                { value: "'=AI.TRANSLATE(value,language)" },
            ],
        },
        {
            columns: [
                { value: 'Text' },
                { value: "Language" },
                { value: "Output:" },
            ],
        },
        {
            columns: [
                { value: 'Boost your productivity with ChatGPT for Excel - the ultimate tool for Microsoft Excel ™ users! With our AI-powered add-in, you can automate tasks, gain valuable insights and save time and efforts.' },
                { value: "French" },
                { value: "=AI.TRANSLATE(A5,B5)" },
                { value: "👈 See AI function here" },
                { value: 'In order to use the function install our "ChatGPT for Excel" add-in' },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: '' },
                { value: 'TRANSLATE MULTIPLE ROWS' },
            ],
        },
        {
            columns: [
                { value: "Function" },
                { value: "'=AI.TRANSLATE(value,language)" },
            ],
        },
        {
            columns: [
                { value: 'Text' },
                { value: "Language" },
                { value: "Output:" },
            ],
        },
        {
            columns: [
                { value: 'SalesForce is one of the leading technology platforms.' },
                { value: "French" },
                { value: "=AI.TRANSLATE(A10,B10)" },
                { value: "👈 See AI function here" },
                { value: 'In order to use the function install our "ChatGPT for Excel" add-in' },
            ],
        },
        {
            columns: [
                { value: 'IBM is an excellent company to work for! ' },
                { value: "German" },
                { value: "=AI.TRANSLATE(A11,B11)" },
            ],
        },
        {
            columns: [
                { value: 'Eat. Sleep. Recycle. ' },
                { value: "Chinese" },
                { value: "=AI.TRANSLATE(A12,B12)" },
            ],
        },
        {
            columns: [
                { value: 'We are building the future with cutting-edge tehcnologies. ' },
                { value: "Italian " },
                { value: "=AI.TRANSLATE(A13,B13)" },
            ],
        },
        {
            columns: [
                { value: 'Leadership is an art. ' },
                { value: "Spanish" },
                { value: "=AI.TRANSLATE(A14,B14)" },
            ],
        },
        {
            columns: [
                { value: 'Be the voice, not the echo. ' },
                { value: "Swedish" },
                { value: "=AI.TRANSLATE(A15,B15)" },
            ],
        },
        {
            columns: [
                { value: 'To travel is to live. ' },
                { value: "Hindi" },
                { value: "=AI.TRANSLATE(A16,B16)" },
            ],
        },
    ],
};

// AI extract 
const extractAi = {
    rows: [
        {
            columns: [],
        },
        {
            columns: [
                { value: 'EXTRACT EMAILS' },
            ],
        },
        {
            columns: [
                { value: "Function" },
                { value: "'=AI.EXTRACT(value,extract)" },
            ],
        },
        {
            columns: [
                { value: 'Unstructured Data' },
                { value: "Extract" },
                { value: "Output:" },
            ],
        },
        {
            columns: [
                { value: 'The best email to reach out is Sandra Jones at KMPG dot com' },
                { value: "Email" },
                { value: "=AI.EXTRACT(A5,B5)" },
                { value: "👈 See AI function here" },
                { value: 'In order to use the function install our "ChatGPT for Excel" add-in' },

            ],
        },
        {
            columns: [
                { value: 'Mr. Kenneth Marek Sales, IBM, Germany ' },
                { value: "Company" },
                { value: "=AI.EXTRACT(A6,B6)" },
            ],
        },
        {
            columns: [
                { value: 'Please enter a valid email address, or use the following number to reach out %^211-462-3726 ' },
                { value: "Phone" },
                { value: "=AI.EXTRACT(A7,B7)" },
            ],
        },
        {
            columns: [],
        },
        // {
        //     columns: [
        //         { value: 'EXTRACT MULTIPLE ROWS' },
        //     ],
        // },
        // {
        //     columns: [
        //         { value: "Function" },
        //         { value: "'=AI.EXTRACT(value,extract)" },
        //     ],
        // },
        // {
        //     columns: [
        //         { value: 'Unstructured Data' },
        //         { value: "Extract" },
        //         { value: "Output:" },
        //     ],
        // },
        // {
        //     columns: [
        //         { value: 'Please contact us at eight eigher 1 dash three 7two dash 2135' },
        //         { value: "Phone" },
        //         { value: "=AI.EXTRACT(A10:A16,B10:B16)" },
        //         { value: "👈 See AI function here" },
        //         { value: 'In order to use the function install our "ChatGPT for Excel" add-in' },
        //     ],
        // },
        // {
        //     columns: [
        //         { value: 'Hi, my name is Tom Jones and I can be reached at 213#4$44(8163%' },
        //         { value: "Phone" },
        //         { value: "=AI.EXTRACT(A10:A16,B10:B16)" },
        //     ],
        // },
        // {
        //     columns: [
        //         { value: 'You can reach us by email or fax at #!<472-122-6831>?' },
        //         { value: "Phone" },
        //         { value: "=AI.EXTRACT(A10:A16,B10:B16)" },
        //     ],
        // },
        // {
        //     columns: [
        //         { value: 'Please enter a valid email address, or use the following number to reach out %^211-462-3726 ' },
        //         { value: "Phone" },
        //         { value: "=AI.EXTRACT(A10:A16,B10:B16)" },
        //     ],
        // },
        // {
        //     columns: [
        //         { value: 'Mr. Kenneth Marek Sales, IBM, Germany ' },
        //         { value: "Company" },
        //         { value: "=AI.EXTRACT(A10:A16,B10:B16)" },
        //     ],
        // },
        // {
        //     columns: [
        //         { value: 'Mr. Alex Silva, Canada Customer Service, Apple ' },
        //         { value: "Country" },
        //         { value: "=AI.EXTRACT(A10:A16,B10:B16)" },
        //     ],
        // },
        // {
        //     columns: [
        //         { value: 'Ms. Lopez Abigail; Evco Plastics # Mexico, Procurement ' },
        //         { value: "Department" },
        //         { value: "=AI.EXTRACT(A10:A16,B10:B16)" },
        //     ],
        // },

    ],
};

// AI Format
// const formatAi = {
//     rows: [
//         {
//             columns: [],
//         },
//         {
//             columns: [
//                 { value: 'FORMAT SINGLE CELL' },
//             ],
//         },
//         {
//             columns: [
//                 { value: "Function" },
//                 { value: "'=AI.FORMAT(value,format)" },
//             ],
//         },
//         {
//             columns: [
//                 { value: 'Value' },
//                 { value: "Format" },
//                 { value: "Output" },
//             ],
//         },
//         {
//             columns: [
//                 { value: 'Friday, April 28, 2023' },
//                 { value: "ISO Date" },
//                 { value: "=AI.FORMAT(A5,B5)" },
//                 { value: "👈 See AI function here" },
//                 { value: 'In order to use the function install our "ChatGPT for Excel" add-in' },
//             ],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [],
//         },
//         // {
//         //     columns: [
//         //         { value: 'FORMAT MULTIPLE ROWS' },
//         //     ],
//         // },
//         // {
//         //     columns: [
//         //         { value: "Function" },
//         //         { value: "'=AI.FORMAT(value,format)" },
//         //     ],
//         // },
//         // {
//         //     columns: [
//         //         { value: 'Value' },
//         //         { value: "" },
//         //         { value: "Output" },
//         //     ],
//         // },
//         // {
//         //     columns: [
//         //         { value: 'Brazilian Real' },
//         //         { value: "" },
//         //         { value: '=AI.FORMAT(A11:A15;"ISO Currency")' },
//         //         { value: "👈 See AI function here" },
//         //     ],
//         // },
//         // {
//         //     columns: [
//         //         { value: 'Bulgarian Lev' },
//         //         { value: "" },
//         //         { value: '=AI.FORMAT(A11:A15;"ISO Currency")' },
//         //     ],
//         // },
//         // {
//         //     columns: [
//         //         { value: 'Australian Dollar' },
//         //         { value: "" },
//         //         { value: '=AI.FORMAT(A11:A15;"ISO Currency")' },
//         //     ],
//         // },
//         // {
//         //     columns: [
//         //         { value: 'USA Dollar' },
//         //         { value: "" },
//         //         { value: '=AI.FORMAT(A11:A15;"ISO Currency")' },
//         //     ],
//         // },
//         // {
//         //     columns: [
//         //         { value: 'Hungarian Forint ' },
//         //         { value: "" },
//         //         { value: '=AI.FORMAT(A11:A15;"ISO Currency")' },
//         //     ],
//         // },
//     ],
// };

// AI FIll
const fillAi = {
    rows: [
        {
            columns: [],
        },
        {
            columns: [
                { value: 'FILL ADVERTISEMENT TAGLINE' },
            ],
        },
        {
            columns: [
                { value: "Function" },
                { value: "'=AI.FILL(example,partial,[temperature])" },
            ],
        },
        {
            columns: [
                { value: 'Product Name' },
                { value: "Short Description" },
            ],
        },
        {
            columns: [
                { value: 'Chat GPT for Excel App' },
                { value: "Unlock the power of GPT in Excel! " },
            ],
        },
        {
            columns: [
                { value: 'SalesForce CRM ' },
                { value: "Get the best out of your CRM platform!" },
            ],
        },
        {
            columns: [
                { value: 'Microsoft Teams' },
                { value: "=AI.FILL(A4:C6,A7)" },
                { value: "👈 See AI function here" },
                { value: 'In order to use the function install our "ChatGPT for Excel" add-in' },
            ],
        },
        {
            columns: [
                { value: 'Facebook Social App ' },
                { value: "=AI.FILL(A4:C6,A8)" },
            ],
        },
        {
            columns: [
                { value: 'Turo Car Rental App' },
                { value: "=AI.FILL(A4:C6,A9)" },
            ],
        },
        {
            columns: [
                { value: 'Spotify Music App ' },
                { value: "=AI.FILL(A4:C6,A10)" },
            ],
        },
        {
            columns: [
                { value: 'LinkedIn Professional Netrowk App ' },
                { value: "=AI.FILL(A4:C6,A11)" },
            ],
        },
        {
            columns: [
                { value: 'YouTube App' },
                { value: "=AI.FILL(A4:C6,A12)" },
            ],
        },
        {
            columns: [
                { value: 'WhatsApp Messaging App ' },
                { value: "=AI.FILL(A4:C6,A13)" },
            ],
        },
        {
            columns: [
                { value: 'WeChat Messaging App ' },
                { value: "=AI.FILL(A4:C6,A14)" },
            ],
        },
        {
            columns: [
                { value: 'Shazam Music App ' },
                { value: "=AI.FILL(A4:C6,A15)" },
            ],
        },

    ],
};

// AI LIST
const listAi = {
    rows: [
        {
            columns: [],
        },
        {
            columns: [
                { value: 'LIST MARKETING TAGLINES' },
            ],
        },
        {
            columns: [
                { value: "Function" },
                { value: "'=AI.LIST(prompt,[value],[temperature],[maxTokens],[model])" },
            ],
        },
        {
            columns: [
                { value: 'Task:' },
                { value: 'Provide 10 taglines for my "ChatGPT for Excel" microsoft excel app' },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: '' },
                { value: '=AI.LIST(B4)' },
                { value: '👈 See AI function here' },
                { value: 'In order to use the function install our "ChatGPT for Excel" add-in' },
            ],
        },

    ],
};