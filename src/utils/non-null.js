'use strict';

const filter = require('./filter');

const nonNull = tk => tk !== null;

module.exports = filter(nonNull);
filter.predicate = nonNull;
