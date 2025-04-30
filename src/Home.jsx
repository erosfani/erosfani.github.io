import reactLogo from './assets/react.svg'
import {useState} from "react";
import {Button} from "react-bootstrap";

function Home(props) {

  const [count, setCount] = useState(0)

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Eros Fanì</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <p className="read-the-docs">
        Work in progress...
      </p>
    </>

  );

}

export default Home;