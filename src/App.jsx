import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";

//You can set the parameters for CoreConcept to 'props' and then extract each props data as 'props.image' etc.
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3> {title} </h3>
      <p>{description}</p>
    </li>
  );
}
// But when the props name is the same as the data in the object for instance. Use this shortcut.
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
