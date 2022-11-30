'use strict';
const fs = require('fs');
const path = require('path');
const alphaSort = require('alpha-sort');
const manifest = require('../manifest.json');

const icons = manifest.map(icon => {
	return {
		symbol: icon.symbol,
		name: icon.name,
		color: icon.color
	};
});

icons.sort((a, b) => alphaSort.asc(a.symbol, b.symbol));

const data = JSON.stringify(icons, null, '\t') + '\n';

fs.writeFileSync(path.resolve(__dirname, '../manifest.json'), data);
