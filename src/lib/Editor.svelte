<svelte:head>
    <script src="//cdn.quilljs.com/1.3.6/quill.min.js" on:load={initQuill}></script>
    <!-- <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"> -->
</svelte:head>

<script>
	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'ordered' }],
		[{ align: [] }],
		['clean']
	];

    let options = {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write your story...'
		};

	const initQuill = () => {
        editor = new Quill('.editor', options); 
	}

    function showContent() {
        console.log(html)
    }

    export let html = "";

</script>

<div class="editor" id="editor">
</div>

<!-- <button on:click={showContent}>print content</button> -->

<style>
	@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
</style>
