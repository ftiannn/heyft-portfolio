export interface Photo {
    id: number;
    src: string;
    title: string;
    country: string;
    flag: string;
    date: string;
    description: string;
}

export interface CountryStat {
    label: string;
    value: string | number;
    color: string;
}

export interface CountryCount {
    [country: string]: number;
}
