//Create objects dynamically out of a dot notation like string
function convertStringDotNotationToObject(str, val = {}) {
    return str.split(".").reduceRight((acc, currentValue) => {
        return { [currentValue]: acc };
    }, val);
}

function splitStringUsingAndOrOperator(text) {
    return splitString(text, /AND|OR\b/);
}

function splitStringUsingConditionalOperators(text) {
    return splitString(text, /==|>=|<=|<|>|!=\b/);
}

function splitString(text, separator) {
    return text.split(separator);
}

export {
    convertStringDotNotationToObject,
    splitStringUsingAndOrOperator,
    splitStringUsingConditionalOperators,
    splitString,
};
