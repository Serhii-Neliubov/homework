function simpleCircuit() {
    let currentValue = 0;

    return function openCircuit(accumulator) {
        currentValue += accumulator;
        console.log(currentValue);
        return currentValue;
    }
}

const circuitResult = simpleCircuit();

circuitResult(3);
circuitResult(5);
circuitResult(20);
