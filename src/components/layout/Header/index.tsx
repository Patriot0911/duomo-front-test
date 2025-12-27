'use client';

import { GoArrowLeft } from 'react-icons/go';
import { IoMdMenu } from 'react-icons/io';

import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles['header-wrapper']}>
      <header className={styles['header']}>
        {/*
          чи потрібе нам тут реальний хедер - не певен,
          проте сам 'burger' від навбару присутній у макеті,
          як і навігаційна стрілочка, тож...
        */}
        <button onClick={() => router.back()} className={styles['prev-button']}>
          <GoArrowLeft />
        </button>
        <span onClick={() => router.push('/')} className={styles['heading']}>App</span>
        <button className={styles['nav-button']}>
          <IoMdMenu />
        </button>
      </header>
    </div>
  );
}

export default Header;
