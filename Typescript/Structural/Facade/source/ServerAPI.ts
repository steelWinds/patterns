class ServerAPI implements IServerAPI {
	#serverInstance: IServer;

	constructor(server: IServer) {
		this.#serverInstance = server
	}

	someEndpoint(): string[] {
		// Work with difficult server logic
		const result1 = this.#serverInstance.bigLogic1()
		const result2 = this.#serverInstance.bigLogic2()
		const result3 = this.#serverInstance.bigLogic3()

		// Return result of server logic
		return [result1, result2, result3]
	}
}

export default ServerAPI
