export interface Dataset {
    name: string;
    label: string;
    link: string;
    map: string;
    desc: string;
}

export const DatasetList: Dataset[] = [
    { 
        name: "2015-population",
        label: "Total population in 2015",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2015-population.json',
        map: "https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson",
        desc: "This map displays the total population in 2015. The data is taken from the Wikipedia."
    },
    { 
        name: "2020-gdp-per-capita",
        label: "GDP per Capita in 2020 [CHF]",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2020-gdp-per-capita.json',
        map: "https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson",
        desc: "This map displays the GDP per capita in 2020. The data is taken from Wikipedia."
    },
    { 
        name: "2020-gdp",
        label: "GDP in 2020 in millions CHF",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2020-total-gdp.json',
        map: "https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson",
        desc: "This map displays the GDP in 2020. The data is taken from Wikipedia."
    },
    { 
        name: "2014-taxiation",
        label: "Personal Income Tax in 2014 for one person with 100'000 CHF income",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2014-personal-income-tax.json',
        map: "https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson",
        desc: "This map displays the personal income tax in 2014 for one person with 100'000 CHF income. The data is taken from Wikipedia."
    }
];