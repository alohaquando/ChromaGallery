<!-- <script>
	import { authHandlers } from '$lib/stores/store.js';

	let email = '';
	let password = '';
	let confirmPassword = '';
	let error = false;
	let complete-account = false;
	let authenticating = false;

	async function handleAuthenticate() {
		if (authenticating) {
			return;
		}
		if (!email || !password || (complete-account && !confirmPassword)) {
			error = true;
			return;
		}

		authenticating = true;

		try {
			if (!complete-account) {
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
			if (!complete-account) {
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
		complete-account = !complete-account;
	}
</script>

<div class="authContainer flex flex-col m-auto w-[50%]">
	<form class=" border border-red-500 flex flex-col gap-5">
		<h1>{complete-account ? 'Register' : 'Login'}</h1>
		{#if error}
			<p class="error">The information you have entered is not correct</p>
		{/if}
		<label>
			<p class={email ? 'above' : 'center'}>Email</p>
			<input bind:value={email} class="bg-green-400" placeholder="Email" type="email" />
		</label>

		<label>
			<p class={password ? 'above' : 'center'}>Password</p>
			<input bind:value={password} class="bg-green-400" placeholder="Password" type="password" />
		</label>
		{#if complete-account}
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

		<button class="bg-yellow-400" on:click={handleAuthenticate} type="button">
			{#if authenticating}
				loading
			{:else}
				Submit
			{/if}
		</button>
	</form>
	<div class="flex flex-col">
		<p>Or</p>
		<button class="bg-green-500 rounded p-1 hover:text-white" on:click={handleAuthenticateGoogle}
			>Login with Google
		</button>
		{#if complete-account}
			<div>
				<p>Already have an account ?</p>
				<button on:click={handleRegister} class="bg-blue-400 rounded p-1 hover:text-white"
					>Login
				</button>
			</div>
		{:else}
			<div>
				<p>Don't have an account?</p>
				<button on:click={handleRegister} class="bg-blue-400 rounded p-1 hover:text-white"
					>Register
				</button>
			</div>
		{/if}
		<button class="bg-blue-400 rounded p-1 hover:text-white" on:click={handleRegister}
			>SignOut
		</button>
	</div>
</div> -->
