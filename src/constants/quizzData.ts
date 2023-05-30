export interface QuizzData {
    question: string;
    choices: string[];
    correctAnswer: string;
}


export const quizzData: QuizzData[] = [
    {
        question: 'En quelle année a été fondée Ecotree ? 🍃',
        choices: ['2014', '2016', '2018', '2020'],
        correctAnswer: '2016',
    },
    {
        question: 'Que permet Ecotree ? 🍃',
        choices: ['Acheter des NFTs', 'Ouvrir une gallerie d\'art', 'Investir dans des arbres', 'Faire le tour du monde'],
        correctAnswer: 'Investir dans des arbres',
    },
    {
        question: 'Laquelle de ces propositions n\'est pas une valeur d\'Ecotree ? 🍃',
        choices: ['Arrogance', 'Bienveillance', 'Humilité', 'Aucune des réponses'],
        correctAnswer: 'Prague',
    },
    {
        question: 'Souhaitez-vous investir dans des arbres ? 🍃',
        choices: ['Oui', 'Oui', 'Oui', 'Oui'],
        correctAnswer: 'Oui',
    },
];