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
];