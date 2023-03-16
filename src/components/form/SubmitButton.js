import { RxPlus } from 'react-icons/rx';
import Button from 'react-bootstrap/Button';
import './SubmitButton.scss';

function SubmitButton({text}) {
  return (
    <div>
      <Button className='btnSubmit'><RxPlus></RxPlus>{text}</Button>
    </div>
  );
}

export default SubmitButton;