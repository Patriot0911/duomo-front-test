import { GoArrowLeft } from 'react-icons/go';
import { IoMdMenu } from 'react-icons/io';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles['header-wrapper']}>
      <header className={styles['header']}>
        {/*
          чи потрібе нам тут реальний хедер - не певен,
          проте сам 'burger' від навбару присутній у макеті,
          як і навігаційна стрілочка, тож...
        */}
        <button className={styles['prev-button']}>
          <GoArrowLeft />
        </button>
        <span className={styles['heading']}>App</span>
        <button className={styles['nav-button']}>
          <IoMdMenu />
        </button>
      </header>
    </div>
  );
}

export default Header;
