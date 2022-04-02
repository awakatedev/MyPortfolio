import '../assets/styles/components/ErrorPage.scss';
import awakateCry from '../assets/static/crying avocado 4.png';
const ErrorPage = () => {
  return (
    <>
      <main className="errorPage">
        <img src={awakateCry} />
        <div className="errorPage--container">
          <h2>Oops! something went wrong</h2>
          <p>
            The page you are searching does not exist, press the "back" button
            to come back to home.
          </p>
          <button className="btn btn__hover">
            <a href="https://awakate.dev">Go back</a>
          </button>
        </div>
      </main>
    </>
  );
};
export default ErrorPage;
