<svelte:head>
    <script src="//cdn.quilljs.com/1.3.6/quill.min.js" on:load={initQuill}></script>
    <!-- <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"> -->
</svelte:head>

<script>
	import { onMount } from 'svelte';

	let editor;

	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'ordered' }],
		[{ align: [] }],
		['clean']
	];

	const initQuill = () => {
		let quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write your story...'
		});
        
        quill.on('text-change', function(delta, oldDelta, source) {
            html = quill.root.innerHTML;
        });
	}



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
