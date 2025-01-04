import LocalButton from "./Button";

// const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
     <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
  </div>
);

export default App;