// Problem: Props Are Not Forwarded To Inner Elements
//Problem occur if you will need to set many props

export default function Section({ title, id, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
