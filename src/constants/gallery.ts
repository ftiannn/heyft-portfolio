import { CountryCount, CountryStat, Photo } from "@/types/gallery.type";

const allPhotos: Photo[] = [
    ...Array.from({ length: 36 }, (_, i) => ({
        id: i + 1,
        src: `/assets/photography/china-${i + 1}.webp`,
        title: `China Photo ${i + 1}`,
        country: "China",
        flag: "🇨🇳",
        date: "2023-2024",
        description: "Captured moments from my journey through China"
    })),

    ...Array.from({ length: 18 }, (_, i) => ({
        id: i + 37,
        src: `/assets/photography/italy-${i + 1}.webp`,
        title: `Italy Photo ${i + 1}`,
        country: "Italy",
        flag: "🇮🇹",
        date: "2023-2024",
        description: "Italian adventures and authentic moments"
    })),

    // Japan photos
    ...Array.from({ length: 16 }, (_, i) => ({
        id: i + 55,
        src: `/assets/photography/japan-${i + 1}.webp`,
        title: `Japan Photo ${i + 1}`,
        country: "Japan",
        flag: "🇯🇵",
        date: "2023-2024",
        description: "Exploring the land of the rising sun"
    })),

    // Singapore photos
    ...Array.from({ length: 2 }, (_, i) => ({
        id: i + 71,
        src: `/assets/photography/singapore-${i + 1}.webp`,
        title: `Singapore Photo ${i + 1}`,
        country: "Singapore",
        flag: "🇸🇬",
        date: "2023-2024",
        description: "Moments captured in Singapore"
    })),

    // Thailand photos
    ...Array.from({ length: 2 }, (_, i) => ({
        id: i + 73,
        src: `/assets/photography/thai-${i + 1}.webp`,
        title: `Thailand Photo ${i + 1}`,
        country: "Thailand",
        flag: "🇹🇭",
        date: "2023-2024",
        description: "Thai adventures and local culture"
    })),

    // US photos
    ...Array.from({ length: 3 }, (_, i) => ({
        id: i + 75,
        src: `/assets/photography/us-${i + 1}.webp`,
        title: `US Photo ${i + 1}`,
        country: "United States",
        flag: "🇺🇸",
        date: "2023-2024",
        description: "American travels and discoveries"
    }))
];

const countries = [...new Set(allPhotos.map(photo => photo.country))];

const countryCounts = countries.reduce((acc, country) => {
    acc[country] = allPhotos.filter(photo => photo.country === country).length;
    return acc;
}, {} as CountryCount);

const countryStats: CountryStat[] = [
    {
        label: "Countries",
        value: countries.length,
        color: "text-primary-pink"
    },
    {
        label: "Photos",
        value: allPhotos.length,
        color: "text-secondary-teal"
    },
    {
        label: "Years Traveling",
        value: "3+",
        color: "text-accent-blue"
    },
    {
        label: "Continents",
        value: "4",
        color: "text-purple-500"
    }
]

export {
    allPhotos,
    countries,
    countryCounts,
    countryStats
}