import { CountryCount, CountryStat, Photo } from "@/types/gallery.type";

const photos: Photo[] = [
    ...Array.from({ length: 35 }, (_, i) => ({
        id: i + 1,
        src: `/assets/photography/china-${i + 1}.webp`,
        title: `China Photo ${i + 1}`,
        country: "China",
        flag: "🇨🇳",
        date: "2023-2024",
        description: "Captured moments from my journey through China"
    })),
    ...Array.from({ length: 18 }, (_, i) => ({
        id: i + 36,
        src: `/assets/photography/italy-${i + 1}.webp`,
        title: `Italy Photo ${i + 1}`,
        country: "Italy",
        flag: "🇮🇹",
        date: "2023-2024",
        description: "Italian adventures and authentic moments"
    })),
    ...Array.from({ length: 16 }, (_, i) => ({
        id: i + 54,
        src: `/assets/photography/japan-${i + 1}.webp`,
        title: `Japan Photo ${i + 1}`,
        country: "Japan",
        flag: "🇯🇵",
        date: "2023-2024",
        description: "Exploring the land of the rising sun"
    })),
    ...Array.from({ length: 2 }, (_, i) => ({
        id: i + 70,
        src: `/assets/photography/singapore-${i + 1}.webp`,
        title: `Singapore Photo ${i + 1}`,
        country: "Singapore",
        flag: "🇸🇬",
        date: "2023-2024",
        description: "Moments captured in Singapore"
    })),
    ...Array.from({ length: 2 }, (_, i) => ({
        id: i + 72,
        src: `/assets/photography/thai-${i + 1}.webp`,
        title: `Thailand Photo ${i + 1}`,
        country: "Thailand",
        flag: "🇹🇭",
        date: "2023-2024",
        description: "Thai adventures and local culture"
    })),
    ...Array.from({ length: 3 }, (_, i) => ({
        id: i + 74,
        src: `/assets/photography/us-${i + 1}.webp`,
        title: `US Photo ${i + 1}`,
        country: "United States",
        flag: "🇺🇸",
        date: "2023-2024",
        description: "American travels and discoveries"
    }))
];

for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
}

const allPhotos: Photo[] = photos;

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