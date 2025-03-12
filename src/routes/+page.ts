/** @type {import('./$types').PageLoad} */
import {type Writable} from "svelte/store";
import { writable } from 'svelte/store';
import { createPersistentStore } from "$lib/components/utils/PersistentStore.js";

export async function load({ fetch }) {
    const res = await fetch('/projects.json');
    const hierarchy = await res.json();

    return {
        hierarchy
    };
}

export const _homePage:Writable<string> = createPersistentStore("homePage", "home");
export const _page:Writable<string> = createPersistentStore("page", "");
export const _lastVisited:Writable<string> = createPersistentStore("lastVisited", "");
export const _allOpened:Writable<string[]> = writable(["my projects"]);