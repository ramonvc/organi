import Banner from "./components/Banner/Banner";
import Form from "./components/Form"

function App() {
	return (
		<div>
			<header>
				<Banner />
			</header>
			<main>
				<article>
          <Form />
        </article>
			</main>
		</div>
	);
}

export default App;
