export function containsCommonPrimitive (arr1, arr2) {
    return arr1.some(el => arr2.includes(el));
}

export function sortArrayOfObjects (arr, key, desc = false) {
    return arr.sort((a, b) => {
        if (desc === true) {
            return a[key] < b[key] ? 1 : -1;
        }
        return a[key] > b[key] ? 1 : -1;
    });
}

export function isSubsetOf (arr1, arr2) {
    return arr1.every(el => arr2.includes(el));
}
