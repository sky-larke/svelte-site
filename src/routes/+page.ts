/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {

    const res = await fetch('/projects.json');
    const hierarchy = await res.json();

    return {
        hierarchy
    };
}