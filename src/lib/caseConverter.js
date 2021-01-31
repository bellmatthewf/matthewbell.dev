const isArray = function (a) {
    return Array.isArray(a);
};

const isObject = function (o) {
    return o === Object(o) && !isArray(o) && typeof o !== "function";
};

class CaseConverter {
    constructor () {
        this.stringConversionFunc = undefined;
    }

    convertCamelToSnake = (target) => {
        this.stringConversionFunc = this._camelToSnake;
        return this._convertTarget(target);
    }

    convertSnakeToCamel = (target) => {
        this.stringConversionFunc = this._snakeToCamel;
        return this._convertTarget(target);
    }

    _convertTarget = (target) => {
        const converter = this._getConverter(target);
        const convertedTarget = converter(target);
        return convertedTarget;
    }

    _getConverter = (val) => {
        if (isObject(val)) {
            return this._convertObject;
        } else if (isArray(val)) {
            return this._convertArray;
        } else {
            return this._skipConversion;
        }
    }

    _convertObject = (obj) => {
        const convertedObj = {};
        for (const [key, val] of Object.entries(obj)) {
            const convertedKey = this._convertString(key);

            const converter = this._getConverter(val);
            const convertedVal = converter(val);
            convertedObj[convertedKey] = convertedVal;
        }
        return convertedObj;
    }

    _convertArray = (arr) => {
        const convertedArr = [];
        for (const idx in arr) {
            const val = arr[idx];
            const converter = this._getConverter(val);
            const convertedVal = converter(val);
            convertedArr.push(convertedVal);
        };
        return convertedArr;
    }

    _skipConversion = (val) => {
        return val;
    }

    _convertString = (str) => {
        return this.stringConversionFunc(str);
    }

    _camelToSnake = (str) => {
        return str.replace(/(?!^)[A-Z]/g, (match) => "_" + match.toLowerCase());
    }

    _snakeToCamel = (str) => {
        return str.replace(/([_]\w)/g, (match) => match[1].toUpperCase());
    }
}

export {
    CaseConverter
};
