// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function calculateAverage(...scores: number[]): number {
    if (scores.length === 0) {
        console.log("No scores provided.");
        return 0;
    }
    
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}

const scores: number[] = [80, 90, 100, 70];
const averageScore: number = calculateAverage(...scores);
console.log(`The average score is:`);
console.log(averageScore);

