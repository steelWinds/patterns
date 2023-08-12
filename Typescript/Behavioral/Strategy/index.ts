import Context from './source/Context.ts';
import StrategyBubbleSort from './source/StrategyBubbleSort.ts';
import StrategySelectionSort from './source/StrategySelectionSort.ts';

const NUMS = [1, 2, 3];

const context = new Context();

context.setStrategy(new StrategyBubbleSort());

console.log(context.sort(NUMS));

context.setStrategy(new StrategySelectionSort());

console.log(context.sort(NUMS));
