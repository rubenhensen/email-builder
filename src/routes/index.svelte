<script lang="ts">
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	type Message = {
		title: string;
		body: string;
	}


	// type Todo = {
	// 	uid: string;
	// 	created_at: Date;
	// 	text: string;
	// 	done: boolean;
	// 	pending_delete: boolean;
	// };

	export let messages: Message[];

	// export let todos: Todo[];
</script>

<h1>Ruben's basic email builder omdat hij het helemaal beu is alles met de hand te doen app</h1>

<form
		class="new"
		action="/generate"
		method="post"
		use:enhance={{
			result: async ({ form }) => {
				form.reset();
			}
		}}
	>
		<!-- <input name="text" aria-label="Add todo" placeholder="+ tap to add a todo" /> -->
		<label for="title">Titel:</label>
       	<input type="text" id="title" name="message_title">
		   <br/>
		<label for="msg">Bericht:</label>
        <textarea id="msg" name="message"></textarea>
	</form>

<!-- <form action="/my-handling-form-page" method="post">
    <ul>
     <li>
       <label for="name">Name:</label>
       <input type="text" id="name" name="user_name">
     </li>
     <li>
       <label for="mail">E-mail:</label>
       <input type="email" id="mail" name="user_email">
     </li>
     <li>
       <label for="msg">Message:</label>
       <textarea id="msg" name="user_message"></textarea>
     </li>
    </ul>
   </form>
    -->