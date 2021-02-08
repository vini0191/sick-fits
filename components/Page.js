import Header from './Header';

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <h2>I'm the page component</h2>
      {children}
      {cool}
    </div>
  );
}
