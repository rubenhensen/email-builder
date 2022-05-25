<script>
	import { onMount } from 'svelte';

	let editor;
    let quill;

	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'ordered' }],
		[{ align: [] }],
		['clean']
	];

	onMount(async () => {
		const { default: Quill } = await import('quill');

		quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write your story...'
		});

        quill.on('text-change', function(delta, oldDelta, source) {
            html = quill.root.innerHTML;
        });
	});

    function showContent() {
        console.log(html)
    }

    export let html = "";

</script>

<div class="editor-wrapper">
	<div bind:this={editor}/>
</div>

<!-- <button on:click={showContent}>print content</button> -->

<style>
	@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
</style>
