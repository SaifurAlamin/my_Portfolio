// /** @type {import('tailwindcss').Config} */
// // ✅ Use 'export default' for modern projects like Vite/CRA
// export default {
//     content: [
//         "./index.html",
//         // This line is correct and tells the compiler where to look
//         "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     darkMode: "class",
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // important: toggle via 'dark' class
    theme: {
        extend: {},
    },
    plugins: [],
};

