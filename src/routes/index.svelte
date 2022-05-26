<script lang="ts">
	import { enhance } from '$lib/form';
	// import { scale } from 'svelte/transition';
	// import { flip } from 'svelte/animate';
	import type { Message } from '$lib/Message'
	import type { Date } from '$lib/Date'
	import { generateHTML } from '$lib/generateHTML'
	import Editor from '$lib/Editor.svelte'

	function addMessage(): void {
		messages = [...messages, {title: "", body: ""}]
	}

	function removeMessage(): void {
		messages = messages.slice(0, -1)
	}

	function addDate(): void {
		dates = [...dates, {date: "", event: ""}]
	}

	function removeDate(): void {
		dates = dates.slice(0, -1)
	}

	// Don't know how to call a function with arguments from html
	function genHTML(): void {
		generateHTML(messages, dates)
	}


	export let messages: Message[] = [{title: "", body: ""}];
	export let dates: Date[] = [{date:"", event: ""}]
</script>

<!-- <h1>Ruben's basic email builder omdat hij het helemaal beu is alles met de hand te doen app</h1> -->
<h2>Dates:</h2>
{#each dates as { date, event }, i}
	<!-- <input name="text" aria-label="Add todo" placeholder="+ tap to add a todo" /> -->
	<!-- <label for="date">Date:</label> -->
	<input type="text" id="date" name="date" aria-label="Add date" bind:value={date} placeholder="zaterdag 12 mei"/>

	<!-- <label for="event">Bericht:</label> -->
	<input type="text" id="event" name="event" aria-label="Add event" bind:value={event} placeholder="Gewoon draaien"/>
	<br/>
{/each}
<button on:click={addDate}>+</button>
<button on:click={removeDate}>-</button>

<h2>Messages</h2>
{#each messages as { title, body }, i}

	<!-- <input name="text" aria-label="Add todo" placeholder="+ tap to add a todo" /> -->
	<label for="title">Titel:</label>
	<input type="text" id="title" name="message_title" aria-label="Add title" bind:value={title}/>
	<br />
	<label for="msg">Bericht:</label>
	<!-- <textarea id="msg" name="message" aria-label="Add message body" bind:value={body}/> -->
	<Editor bind:content={body}></Editor>
{/each}
<button on:click={addMessage}>+</button>
<button on:click={removeMessage}>-</button>
<button on:click={genHTML}>generate</button>

<svelte:head>  
	<!-- Mobile Specific Metas
	–––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
  
	<!-- FONT
	–––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
  
	<!-- CSS
	–––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/skeleton.css">
</svelte:head>
