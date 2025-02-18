/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
    console.log('Fetching projects...');
    const res = await fetch('/projects.json');
    const hierarchy = await res.json();
    console.log('Projects data:', hierarchy);
    return {
        hierarchy
    };
}