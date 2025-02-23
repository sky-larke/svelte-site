import { writable } from 'svelte/store';
import { onMount } from 'svelte';

export function createPersistentStore(key: string, initial: string) {
    const store = writable(initial);
    onMount(() => {
        const storedValue = localStorage.getItem(key) ?? initial;
        store.set(storedValue);

        store.subscribe((value) => {
            localStorage.setItem(key, value);
        });
    });
    return store;
}