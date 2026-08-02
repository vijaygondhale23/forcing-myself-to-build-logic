// Question: Determine the type of triangle from its three side lengths.
// Solution: Return "Equilateral" for all equal sides, "isosceles" for two equal sides, and "scalene" otherwise.


const checkTriangleType = (a,b,c) => {
    if ( a === b && b === c) return "Equilateral";
    if (a === b || b === c || a === c) return "isosceles";
    return "scalene";
}

console.log(checkTriangleType(5,4,6));