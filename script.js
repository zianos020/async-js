//task 1
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Example
iterateWithAsyncAwait([1, 2, 3, 4, 5]);


//task 3
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

// Example
awaitCall();


//task 4
async function firstAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('First async function executed');
}

async function secondAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Second async function executed');
}

async function thirdAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Third async function executed');
}

async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}

// Example usage
chainedAsyncFunctions();