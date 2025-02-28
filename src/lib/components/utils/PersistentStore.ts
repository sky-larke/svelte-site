import { writable } from 'svelte/store';
import { browser } from "$app/environment";

export function createPersistentStore(key: string, initial: string) {
    const store = writable(initial);
    if (browser) {
        const storedValue = localStorage.getItem(key) ?? initial;
        store.set(storedValue);

        store.subscribe((value) => {
            localStorage.setItem(key, value);
        });
    };
    return store;
}