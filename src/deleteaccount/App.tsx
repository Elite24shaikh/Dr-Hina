import { useState } from "react";
import type { SyntheticEvent } from "react";

function App() {
	const [isDeleted, setIsDeleted] = useState(false);

	function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
		event.preventDefault();
		setIsDeleted(true);
		window.alert("Your account has been scheduled to be deleted. It will be permanently removed from our system within 24 hours. If you change your mind, please contact us at medimorphicclinic@gmail.com");
	}

	return (
		<main className="delete-account-page">
			<header className="privacy-header delete-account-header">
				<a className="privacy-brand" href="/" aria-label="Medimorphic home">
					<span className="privacy-brand-mark">M</span>
					<span>Medimorphic</span>
				</a>
				<a className="privacy-home-link" href="/">Back to website <span aria-hidden="true">↗</span></a>
			</header>

			<section className="delete-account-content" aria-labelledby="delete-account-title">
				<div className="delete-account-copy">
					<span className="privacy-eyebrow">Account settings</span>
					<h1 id="delete-account-title">Delete your<br /><em>account</em></h1>
					<p>Enter your account details below to confirm that you want to permanently delete your Medimorphic account.</p>
				</div>

				<form className="delete-account-form" onSubmit={handleSubmit}>
					<label htmlFor="delete-email">Email address</label>
					<input
						id="delete-email"
						name="email"
						type="email"
						autoComplete="email"
						placeholder="you@example.com"
						required
					/>

					<label htmlFor="delete-password">Password</label>
					<input
						id="delete-password"
						name="password"
						type="password"
						autoComplete="current-password"
						placeholder="Enter your password"
						required
					/>

					<button type="submit" disabled={isDeleted}>
						{isDeleted ? "Account deleted" : "Delete account"}
					</button>
					<small>This action cannot be undone.</small>
				</form>
			</section>

			<footer className="privacy-footer delete-account-footer">
				<span>&copy; 2026 Medimorphic Clinic</span>
				<a href="mailto:medimorphicclinic@gmail.com">Need help? Contact us</a>
			</footer>
		</main>
	);
}

export default App;
