export default function Page({ children, cool }) {
  return (
    <div>
      <h2>I'm the page component</h2>
      {children}
      {cool}
    </div>
  );
}
