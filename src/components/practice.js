const data = [
    {
        name: 'Bisleri',
        value: 9,
        performance: {
            releases: [2005, 2008, 2012],
            sales: 10000,
            profit: 4000,
        },
    },
    {
        name: 'Parle-G',
        value: 12,
        performance: {
            releases: [2003, 2006, 2009],
            sales: 8450,
            profit: 3654,
        },
    },
    {
        name: 'Samsung',
        value: 23,
        performance: {
            releases: [2000, 2009, 2021],
            sales: 11345,
            profit: 3897,
        },
    },
    {
        name: 'Youtube',
        value: 17,
        performance: {
            releases: [2005, 2010, 2019],
            sales: 9576,
            profit: 2598,
        },
    },
    {
        name: 'Tesla',
        value: 29,
        performance: {
            releases: [2016, 2017, 2020, 2023],
            sales: 14321,
            profit: 6398,
        },
    },
    {
        name: 'LG',
        value: 8,
        performance: {
            releases: [2011, 2014, 2019],
            sales: 4953,
            profit: 897,
        },
    },
];




// write a function to create an array from the data, with elements that have at least one release in the timeframe of 5 years leading up to an year that is passed into the function as an argument, with profits being 3000 and above.

// ex - (if i pass 2020 into the function, i need an array with elements that have atleast one release between 2020 and 2015)

// const performanceData = data.map((data1) => {
//     return data1.performance;
// });

// const profiteValue = performanceData.map((data2)=>{
//     return (data2.releases, data2.profit)
// });

// console.log(profiteValue)


// function profite (release) {
//     if (profiteValue.profit >= 3000){
//         console.log('hello')
//     }
//     else{
//         console.log('hi')
//     }
// }

// profite(2000)



// function filterDataByYear(data, year) {
//     const startYear = year - 5;

//     return data.filter(item => {
//         const hasRecentRelease = item.performance.releases.some(releaseYear => releaseYear >= startYear && releaseYear <= year);
//         const hasHighProfit = item.performance.profit >= 3000;
//         return hasRecentRelease && hasHighProfit;
//     });
// }

// const filteredData = filterDataByYear(data, 2020);
// console.log(filteredData);