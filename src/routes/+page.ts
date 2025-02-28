/** @type {import('./$types').PageLoad} */
import {type Writable} from "svelte/store";
import { createPersistentStore } from "$lib/components/utils/PersistentStore.js";

export async function load({ fetch }) {

    const res = await fetch('/projects.json');
    const hierarchy = await res.json();

    return {
        hierarchy
    };
}

export const _homePage:Writable<string> = createPersistentStore("homePage", "home");
export const _lastVisited:Writable<string> = createPersistentStore("lastVisited", "");