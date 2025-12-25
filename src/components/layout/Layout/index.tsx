import type { PropsWithChildren } from 'react';
import Header from '../Heading';

import styles from './styles.module.scss';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main id='main-content' className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
