import NewPage from "./icons/NewPage.jsx";
import {Button} from "react-bootstrap";

function NewPageButton(props) {
  return (
    <Button size='sm' className='new-page-button' onClick={() =>
      window.open(props.url, '_blank')}>
      <NewPage />
    </Button>
  );
}

export default NewPageButton;