class StrategySelectionSort implements Strategy {
	public sort(nums: number[]) {
		console.log('Selection sort strategy executed!', nums);

		return nums;
	}
}

export default StrategySelectionSort;
