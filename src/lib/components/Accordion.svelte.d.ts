import type { Snippet, SvelteComponent } from 'svelte';

export interface AccordionProps {
        title: string;
        children: Snippet;
}

export default class Accordion extends SvelteComponent<AccordionProps> {}
