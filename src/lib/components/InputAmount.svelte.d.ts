import type { SvelteComponent } from 'svelte';

export interface CoffeeControls {
        amount: number;
        increment: (value: number) => () => void;
        decrement: (value: number) => () => void;
}

export interface InputAmountProps {
        coffee: CoffeeControls;
}

export default class InputAmount extends SvelteComponent<InputAmountProps> {}
