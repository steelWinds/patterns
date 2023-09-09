class EUSocket implements IEUSocket {
	plug: IEUPlug;

	constructor(plug: IEUPlug) {
		this.plug = plug;
	}

	connect() {
		console.log(`Connect from ${this.plug.getType()} plug to EU socket`);
	}
}

export default EUSocket;
