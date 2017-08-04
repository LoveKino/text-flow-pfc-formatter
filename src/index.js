'use strict';

let pfcFormatter = require('pfc-formatter');
let {
    parseStrToAst
} = require('text-flow-pfc-compiler');

const DEFAULT_START_DELIMITER = '{:';
const DEFAULT_END_DELIMITER = ':}';

let format = (source, {
    startDelimiter = DEFAULT_START_DELIMITER,
    endDelimiter = DEFAULT_END_DELIMITER,
    indent
} = {}) => {
    let result = '';

    let ast = parseStrToAst(source);

    for (let i = 0; i < ast.length; i++) {
        let item = ast[i];
        if (item.type === 'text') {
            result += item.text;
        } else if (item.type === 'pfc') {
            result += startDelimiter + pfcFormatter.format(item.code, {
                indent
            }) + endDelimiter;
        }
    }

    return result;
};

module.exports = {
    format
};
