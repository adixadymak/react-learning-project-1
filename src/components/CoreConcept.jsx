//You can set the parameters for CoreConcept to 'props' and then extract each props data as 'props.image' etc.
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3> {title} </h3>
      <p>{description}</p>
    </li>
  );
}
