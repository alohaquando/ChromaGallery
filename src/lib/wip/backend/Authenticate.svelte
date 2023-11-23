<script>
	import { authHandlers } from '$lib/stores/store.js';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let error = false;
	let register = false;
	let authenticating = false;
	async function handleAuthenticate() {
		if (authenticating) {
			return;
		}
		if (!email || !password || (register && !confirmPassword)) {
			error = true;
			return;
		}

		authenticating = true;

		try {
			if (!register) {
				await authHandlers.login(email, password);
			} else {
				await authHandlers.signup(email, password);
			}
		} catch (err) {
			console.log(' There was an auth error', err);
			error = true;
			authenticating = false;
		}
	}

	async function handleAuthenticateGoogle() {
		if (authenticating) {
			return;
		}
		authenticating = true;
		try {
			if (!register) {
				await authHandlers.loginWithGoogle();
			}
			return;
		} catch (err) {
			console.log(' There was an auth error', err);
			error = true;
			authenticating = false;
		}
	}

	function handleRegister() {
		register = !register;
	}
</script>

<div class="authContainer flex flex-col m-auto w-[50%]">
	<form class=" border border-red-500 flex flex-col gap-5">
		<h1>{register ? 'Register' : 'Login'}</h1>
		{#if error}
			<p class="error">The information you have entered is not correct</p>
		{/if}
		<label>
			<p class={email ? 'above' : 'center'}>Email</p>
			<input bind:value={email} type="email" placeholder="Email" class="bg-green-400" />
		</label>

		<label>
			<p class={password ? 'above' : 'center'}>Password</p>
			<input bind:value={password} type="password" placeholder="Password" class="bg-green-400" />
		</label>
		{#if register}
			<label>
				<p class={confirmPassword ? 'above' : 'center'}>Confirm Password</p>
				<input
					bind:value={confirmPassword}
					type="password"
					placeholder="confirmPassword"
					class="bg-green-400"
				/>
			</label>
		{/if}

		<button on:click={handleAuthenticate} type="button" class="bg-yellow-400">
			{#if authenticating}
				loading
			{:else}
				Submit
			{/if}
		</button>
	</form>
	<div class="flex flex-col">
		<p>Or</p>
		<button on:click={handleAuthenticateGoogle} class="bg-green-500 rounded p-1 hover:text-white"
			>Login with Google</button
		>
		{#if register}
			<div>
				<p>Already have an account ?</p>
				<button on:click={handleRegister} class="bg-blue-400 rounded p-1 hover:text-white"
					>Login</button
				>
			</div>
		{:else}
			<div>
				<p>Don't have an account?</p>
				<button on:click={handleRegister} class="bg-blue-400 rounded p-1 hover:text-white"
					>Register</button
				>
			</div>
		{/if}
	</div>
</div>
