/*const Header = require('./header');
const Lines = require('./lines');*/

class PSEConflux {
	constructor(apiKey) {
		if (apiKey === undefined) {
			apiKey = process.env.PSE_TOKEN;
		}
		this.token = apiKey;
	}
	async create(jsonData) {
		try {
			console.log({ jsonData });
		} catch (e) {
			throw e;
		}
	}
	async get(uidInvoice) {
		try {
			console.log({ uidInvoice });
		} catch (e) {
			throw e;
		}
	}
}

PSEConflux.prototype.Attachment = Attachment;

function create(options) {
	return new PSEConflux(options);
}

module.exports = create;
