// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// AI ASK
const tableData = {
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
                { value: "'Function'"},
                { value: "'=AI.ASK(prompt,[value],[temperature],[maxTokens],[model])" },
            ],
        },
        {
            columns: [
                { value: "Task:"},
                { value: "Write an instagram post about my recent travel" },
            ],
        },
        {
            columns: [
                { value: "Destination:"},
                { value: "Florence, Italy" },
            ],
        },
        {
            columns: [
                { value: "Length:"},
                { value: "50 words" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: "=AI.ASK(A4:B6)"},
                { value: '👈 See AI function here' },
            ],
        },
       {
            columns: [],
        },
        {
            columns: [
                { value: '' },
                { value: 'TABLE MOVIES OF ALL TIME' },
            ],
        },
        {
            columns: [
                { value: '' },
                { value: "Function" },
                { value: "'=AI.TABLE(prompt,[value],[temperature],[maxTokens],[model])" },
            ],
        },
        {
            columns: [
                { value: '' },
                { value: "Prompt" },
                { value: "Top 10 movies of all times with release year and main actor" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: 'See function here 👉' },
                { value: "=AI.TABLE(C12)" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: '' },
                { value: 'TABLE WITH SPECIFIC COLUMNS' },
            ],
        },
        {
            columns: [
                { value: '' },
                { value: "Prompt" },
                { value: "Top 10 movies of all times with release year and main actor" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                {},
                {value: 'Year'},
                {value: 'Title'},
                {value: 'Director'},
                {value: 'Country'},
            ],
        },
        {
            columns: [
                { value: 'See function here 👉' },
                { value: "=AI.TABLE(C28;B30:E30)" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
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
                { value: "=AI.TRANSLATE(A45;B45)" },
                { value: "👈 See AI function here" },
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
                { value: "=AI.TRANSLATE(A50:A56;B50:B56)" },
                { value: "👈 See AI function here" },
            ],
        },
        {
            columns: [
                { value: 'IBM is an excellent company to work for! ' },
                { value: "German" },
                { value: "=AI.TRANSLATE(A50:A56;B50:B56)" },
            ],
        },
        {
            columns: [
                { value: 'Eat. Sleep. Recycle. ' },
                { value: "Chinese" },
                { value: "=AI.TRANSLATE(A50:A56;B50:B56)" },
            ],
        },
        {
            columns: [
                { value: 'We are building the future with cutting-edge tehcnologies. ' },
                { value: "Italian " },
                { value: "=AI.TRANSLATE(A50:A56;B50:B56)" },
            ],
        },
        {
            columns: [
                { value: 'Leadership is an art. ' },
                { value: "Spanish" },
                { value: "=AI.TRANSLATE(A50:A56;B50:B56)" },
            ],
        },
        {
            columns: [
                { value: 'Be the voice, not the echo. ' },
                { value: "Swedish" },
                { value: "=AI.TRANSLATE(A50:A56;B50:B56)" },
            ],
        },
        {
            columns: [
                { value: 'To travel is to live. ' },
                { value: "Hindi" },
                { value: "=AI.TRANSLATE(A50:A56;B50:B56)" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: '' },
                { value: 'TRANSLATE ONE LANGUAGE MULTIPLE ROWS' },
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
                { value: "" },
                { value: "Output:" },
            ],
        },
        {
            columns: [
                { value: 'SalesForce is one of the leading technology platforms.' },
                { value: "French" },
                { value: '=AI.TRANSLATE(A61:A67;"French")' },
                { value: "👈 See AI function here" },
            ],
        },
        {
            columns: [
                { value: 'IBM is an excellent company to work for! ' },
                { value: "German" },
                { value: '=AI.TRANSLATE(A61:A67;"French")' },
            ],
        },
        {
            columns: [
                { value: 'Eat. Sleep. Recycle. ' },
                { value: "Chinese" },
                { value: '=AI.TRANSLATE(A61:A67;"French")' },
            ],
        },
        {
            columns: [
                { value: 'We are building the future with cutting-edge tehcnologies. ' },
                { value: "Italian " },
                { value: '=AI.TRANSLATE(A61:A67;"French")' },
            ],
        },
        {
            columns: [
                { value: 'Leadership is an art. ' },
                { value: "Spanish" },
                { value: '=AI.TRANSLATE(A61:A67;"French")' },
            ],
        },
        {
            columns: [
                { value: 'Be the voice, not the echo. ' },
                { value: "Swedish" },
                { value: '=AI.TRANSLATE(A61:A67;"French")' },
            ],
        },
        {
            columns: [
                { value: 'To travel is to live. ' },
                { value: "Hindi" },
                { value: '=AI.TRANSLATE(A61:A67;"French")' },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: '' },
                { value: 'TRANSLATE WITH INSTRUCTIONS' },
            ],
        },
        {
            columns: [
                { value: 'Instructions' },
                { value: 'Note: For a better results, use GPT 4 or GPT 4 Turbo model' },
            ],
        },
        {
            columns: [
                { value: 'Translate according to glossary' },
                { value: '*DRT - Drone Robotis Tech' },
                { value: ' <-- Replacing Abbreviation with a full name' },
            ],
        },
        {
            columns: [
                { value: 'Units of measurement' },
                { value: 'Must provide their metric equivalent.' },
                { value: '<-- Convert to mertic system' },
            ],
        },
        {
            columns: [
                { value: 'Add your own parameter here' },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                {value: "Discover the ultimate performance with the Falcon X Drone by DRT. Features include a 4K UHD camera, 30min flight time, GPS and GLONASS support, and a max speed of 60mph. Its foldable design makes it perfect for travel. Drone can travel up to 20 miles and operate at temperature 5F to 120F."},
                {value: 'AI.TRANSLATE(A75;"Spanish";A71:B73)'},
                { value: "👈 See AI function here" },
            ],
        },
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
                { value: "=AI.EXTRACT(A80;B80)" },
                { value: "👈 See AI function here" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: 'EXTRACT MULTIPLE ROWS' },
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
                { value: 'Please contact us at eight eigher 1 dash three 7two dash 2135' },
                { value: "Phone" },
                { value: "=AI.EXTRACT(A85:A91;B85:B91)" },
                { value: "👈 See AI function here" },
            ],
        },
        {
            columns: [
                { value: 'Hi, my name is Tom Jones and I can be reached at 213#4$44(8163%' },
                { value: "Phone" },
                { value: "=AI.EXTRACT(A85:A91;B85:B91)" },
            ],
        },
        {
            columns: [
                { value: 'You can reach us by email or fax at #!<472-122-6831>?' },
                { value: "Phone" },
                { value: "=AI.EXTRACT(A85:A91;B85:B91)" },
            ],
        },
        {
            columns: [
                { value: 'Please enter a valid email address, or use the following number to reach out %^211-462-3726 ' },
                { value: "Phone" },
                { value: "=AI.EXTRACT(A85:A91;B85:B91)" },
            ],
        },
        {
            columns: [
                { value: 'Mr. Kenneth Marek Sales, IBM, Germany ' },
                { value: "Company" },
                { value: "=AI.EXTRACT(A85:A91;B85:B91)" },
            ],
        },
        {
            columns: [
                { value: 'Mr. Alex Silva, Canada Customer Service, Apple ' },
                { value: "Country" },
                { value: "=AI.EXTRACT(A85:A91;B85:B91)" },
            ],
        },
        {
            columns: [
                { value: 'Ms. Lopez Abigail; Evco Plastics # Mexico, Procurement ' },
                { value: "Department" },
                { value: "=AI.EXTRACT(A85:A91;B85:B91)" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: 'FORMAT SINGLE CELL' },
            ],
        },
        {
            columns: [
                { value: "Function" },
                { value: "'=AI.FORMAT(value,format)" },
            ],
        },
        {
            columns: [
                { value: 'Value' },
                { value: "Format" },
                { value: "Output" },
            ],
        },
        {
            columns: [
                { value: 'Friday, April 28, 2023' },
                { value: "ISO Date" },
                { value: "=AI.FORMAT(A96;B96)" },
                { value: "👈 See AI function here" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: 'FORMAT MULTIPLE ROWS' },
            ],
        },
        {
            columns: [
                { value: "Function" },
                { value: "'=AI.FORMAT(value,format)" },
            ],
        },
        {
            columns: [
                { value: 'Value' },
                { value: "" },
                { value: "Output" },
            ],
        },
        {
            columns: [
                { value: 'Brazilian Real' },
                { value: "" },
                { value: '=AI.FORMAT(A102:A106;"ISO Currency")' },
                { value: "👈 See AI function here" },
            ],
        },
        {
            columns: [
                { value: 'Bulgarian Lev' },
                { value: "" },
                { value: '=AI.FORMAT(A102:A106;"ISO Currency")' },
            ],
        },
        {
            columns: [
                { value: 'Australian Dollar' },
                { value: "" },
                { value: '=AI.FORMAT(A102:A106;"ISO Currency")' },
            ],
        },
        {
            columns: [
                { value: 'USA Dollar' },
                { value: "" },
                { value: '=AI.FORMAT(A102:A106;"ISO Currency")' },
            ],
        },
        {
            columns: [
                { value: 'Hungarian Forint ' },
                { value: "" },
                { value: '=AI.FORMAT(A102:A106;"ISO Currency")' },
            ],
        },
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
                { value: "=AI.FILL(A110:C112;A113:A121)" },
                { value: "👈 See AI function here" },
            ],
        },
        {
            columns: [
                { value: 'Facebook Social App ' },
                { value: "=AI.FILL(A110:C112;A113:A121)" },
            ],
        },
        {
            columns: [
                { value: 'Turo Car Rental App' },
                { value: "=AI.FILL(A110:C112;A113:A121)" },
            ],
        },
        {
            columns: [
                { value: 'Spotify Music App ' },
                { value: "=AI.FILL(A110:C112;A113:A121)" },
            ],
        },
        {
            columns: [
                { value: 'LinkedIn Professional Netrowk App ' },
                { value: "=AI.FILL(A110:C112;A113:A121)" },
            ],
        },
        {
            columns: [
                { value: 'YouTube App' },
                { value: "=AI.FILL(A110:C112;A113:A121)" },
            ],
        },
        {
            columns: [
                { value: 'WhatsApp Messaging App ' },
                { value: "=AI.FILL(A110:C112;A113:A121)" },
            ],
        },
        {
            columns: [
                { value: 'WeChat Messaging App ' },
                { value: "=AI.FILL(A110:C112;A113:A121)" },
            ],
        },
        {
            columns: [
                { value: 'Shazam Music App ' },
                { value: "=AI.FILL(A110:C112;A113:A121)" },
            ],
        },
        {
            columns: [],
        },
        {
            columns: [
                { value: 'FILL REGION & CURRENCY' },
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
                { value: 'Country' },
                { value: "Region" },
                { value: "Currency" },
            ],
        },
        {
            columns: [
                { value: 'United States' },
                { value: "Americas" },
                { value: "US Dollar"}
            ],
        },
        {
            columns: [
                { value: 'China ' },
                { value: "Asia" },
                { value: "Chinese Yuan" },
            ],
        },
        {
            columns: [
                { value: 'India' },
                { value: "=AI.FILL(A125:C127;A128:A136)" },
                { value: "👈 See AI function here" },
            ],
        },
        {
            columns: [
                { value: 'Brazil ' },
                { value: "=AI.FILL(A125:C127;A128:A136)" },
            ],
        },
        {
            columns: [
                { value: 'Australia ' },
                { value: "=AI.FILL(A125:C127;A128:A136)" },
            ],
        },
        {
            columns: [
                { value: 'New Zealand' },
                { value: "=AI.FILL(A125:C127;A128:A136)" },
            ],
        },
        {
            columns: [
                { value: 'Germany' },
                { value: "=AI.FILL(A125:C127;A128:A136)" },
            ],
        },
        {
            columns: [
                { value: 'Czech Republic' },
                { value: "=AI.FILL(A125:C127;A128:A136)" },
            ],
        },
        {
            columns: [
                { value: 'Hungary' },
                { value: "=AI.FILL(A125:C127;A128:A136)" },
            ],
        },
        {
            columns: [
                { value: 'Hungary' },
                { value: "=AI.FILL(A125:C127;A128:A136)" },
            ],
        },
        {
            columns: [
                { value: 'Tajikistan ' },
                { value: "=AI.FILL(A125:C127;A128:A136)" },
            ],
        },
    ],
};



// AI LIST
// const tableData = {
//     rows: [
//         {
//             columns: [],
//         },
//         {
//             columns: [
//                 { value: 'LIST MARKETING TAGLINES' },
//             ],
//         },
//         {
//             columns: [
//                 { value: "Function" },
//                 { value: "'=AI.LIST(prompt,[value],[temperature],[maxTokens],[model])" },
//             ],
//         },
//         {
//             columns: [
//                 { value: 'Task:' },
//                 { value: 'Provide 10 taglines for my "ChatGPT for Excel" microsoft excel app' },
//             ],
//         },
//         {
//             columns: [],
//         },
//         {
//             columns: [
//                 {value: ''},
//                 {value: '=AI.LIST(B4)'},
//                 {value: '👈 See AI function here'},
//             ],
//         },
       
//     ],
// };