class USPlugEUAdapter implements IEUPlug {
	plug: IUSPlug;

	constructor(plug: IUSPlug) {
		this.plug = plug;
	}

	getType() {
		return this.plug.getUSType();
	}
}

export default USPlugEUAdapter;
