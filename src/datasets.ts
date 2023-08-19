export interface Dataset {
    name: string;
    labelEN: string;
    labelPL: string;
    labelDE: string;
    link: string;
}

export const DatasetList: Dataset[] = [
    { 
        name: "2015-population",
        labelEN: "Total population in 2015",
        labelPL: "Całkowita liczba ludności w 2015",
        labelDE: "Gesamtbevölkerung im Jahr 2015",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2015-population.json'
    },
    { 
        name: "2020-gdp-per-capita",
        labelEN: "GDP per Capita in 2020",
        labelPL: "PKB na mieszkańca w 2020",
        labelDE: "BIP pro Kopf im Jahr 2020",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2020-gdp-per-capita.json'
    },
    { 
        name: "pop-density",
        labelEN: "Population density in 2015",
        labelPL: "Gęstość zaludnienia w 2015",
        labelDE: "Bevölkerungsdichte im Jahr 2015",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/population-density.json'
    },
    { 
        name: "2020-gdp",
        labelEN: "GDP in 2020 in millions CHF",
        labelPL: "PKB w 2020 w milionach CHF",
        labelDE: "BIP im Jahr 2020 in Millionen CHF",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2020-total-gdp.json'
    }
];