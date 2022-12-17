import { RxPlus } from 'react-icons/rx';

import styles from './SubmitButton.module.css';

function SubmitButton({text}) {

    return(
        <div>
            <button className={styles.btn}><RxPlus></RxPlus>{text}</button>
        </div>
    );
}

export default SubmitButton;