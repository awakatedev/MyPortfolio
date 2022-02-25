import awakateCry from '../assets/static/crying avocado 4.png';
const ErrorPage = () => {
  return (
    <>
      <img src={awakateCry} />
      <h2>Oops! something was wrong</h2>
      <p>
        The page you are searching does not exist, press the "Go back" button to
        come back to home.
      </p>
      <a href="https://awakate.dev">Go back</a>
    </>
  );
};
export default ErrorPage;
