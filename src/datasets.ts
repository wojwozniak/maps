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
        labelEN: "Total canton population in 2015",
        labelPL: "Całkowita liczba ludności w kantonach w 2015",
        labelDE: "Gesamtbevölkerung der Kantone im Jahr 2015",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2015-population.json'
    },
    { 
        name: "2020-gdp-per-capita",
        labelEN: "GDP per Capita in Switzerland in 2020",
        labelPL: "PKB na mieszkańca w Szwajcarii w 2020",
        labelDE: "BIP pro Kopf in der Schweiz im Jahr 2020",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/2020-gdp-per-capita.json'
    },
    { 
        name: "pop-density",
        labelEN: "Population density in Switzerland in 2015",
        labelPL: "Gęstość zaludnienia w Szwajcarii w 2015",
        labelDE: "Bevölkerungsdichte in der Schweiz im Jahr 2015",
        link: 'https://raw.githubusercontent.com/wojwozniak/maps/main/public/statistics/population-density.json'
    }
];