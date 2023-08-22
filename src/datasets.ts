export interface Dataset {
    name: string;
    label: string;
    link: string;
    map: string;
}

export const DatasetList: Dataset[] = [
    { 
        name: "2015-population",
        label: "Total population in 2015",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2015-population.json',
        map: "https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson"
    },
    { 
        name: "2020-gdp-per-capita",
        label: "GDP per Capita in 2020 [CHF]",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2020-gdp-per-capita.json',
        map: "https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson"
    },
    { 
        name: "pop-density",
        label: "Population density in 2015",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/population-density.json',
        map: "https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson"
    },
    { 
        name: "2020-gdp",
        label: "GDP in 2020 in millions CHF",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2020-total-gdp.json',
        map: "https://raw.githubusercontent.com/wojwozniak/maps/main/public/ch-cantons.geojson"
    }
];