<script lang="ts">
    import { LightSwitch, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
</script>

<div class="relative w-full">
    <img src="assets/icon_360.png" class="absolute top-0 left-0 mb-4" alt="icon"/>

<TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="lg:flex-none"
	rounded=""
	border=""
	class="w-full max-w-full"
>
	<TabAnchor href="/" >
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
	</TabAnchor>
	<TabAnchor href="/" >
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
	</TabAnchor>
    <TabAnchor href="/" >
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
	</TabAnchor>
</TabGroup>
<LightSwitch class="absolute top-0 right-0 "></LightSwitch>
</div>


