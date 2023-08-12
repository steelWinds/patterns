class Context {
	#sortStrategy?: Strategy;

	public setStrategy(strategy: Strategy) {
		this.#sortStrategy = strategy;
	}

	public sort(nums: number[]) {
		this.#sortStrategy?.sort(nums);
	}
}

export default Context;
