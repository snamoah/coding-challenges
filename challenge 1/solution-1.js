const containsElementsThatAddUpToK = (list, k) => {
    const sizeOfList = list.length;
    for (let i = 0; i < sizeOfList; i++) {
        for (let j = i + 1; j < sizeOfList; j++) {
            const sum = list[i] + list[j];
            if (sum === k) {
                return true;
            }
        }    
    }

    return false;
};

/**
 * Test case 1
 */
console.log('Test case 1 = ', containsElementsThatAddUpToK([10, 15, 3, 7], 17));
// => true

/**
 * Test case 2
 */
console.log('Test case 2 = ', containsElementsThatAddUpToK([], 17));
//=> false


/**
 * Test case 3
 */
console.log('Test case 3 = ', containsElementsThatAddUpToK([1380, 24208, 4820208280, 2480248204802,22840248, 1, 2840, 28000], 28001));
//=> true

/**
 * Test case 4
 */
console.log('Test case 4 = ', containsElementsThatAddUpToK([10, 15, 3, 7], 17.0));
//=> true

/**
 * Test case 5
 */
console.log('Test case 5 = ', containsElementsThatAddUpToK([1.09, 2.482, 480.28, 5.683], 8.165));
//=> true

/**
 * Test case 6
 */
console.log('Test case 6 = ', containsElementsThatAddUpToK([17], 17));
//=> false