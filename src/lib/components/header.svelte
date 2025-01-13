<script lang="ts">
    import { LightSwitch, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
</script>

<div class="relative w-full">

<TabGroup 
	justify="justify-left"
	flex="lg:flex-none"
	rounded=""
	border=""
	class="w-full max-w-full"
>
	<TabAnchor href="/" >
		<img src="assets/icon_360.png" alt="icon"/>
	</TabAnchor>
	<TabAnchor href="/" >
		<svelte:fragment slot="lead">Erin Park</svelte:fragment>
	</TabAnchor>
    <TabAnchor href="/" >
        <LightSwitch></LightSwitch>
	</TabAnchor>
</TabGroup>
</div>


