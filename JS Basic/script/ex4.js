// todo : Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function AreaTriangle(a, b, c) {
    const formulaHeron = (a + b + c) / 2;
    return Math.sqrt(
        formulaHeron *
            (formulaHeron - a) *
            (formulaHeron - b) *
            (formulaHeron - c)
    );
}

console.log(AreaTriangle(5, 6, 7));
