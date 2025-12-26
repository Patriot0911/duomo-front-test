import { IButtonProps } from '@/types/ui/button';

import styles from './styles.module.scss';

const Button = ({ children, icon, className, ...rest }: IButtonProps) => {
  return (
    <button
      className={`${styles['button']} ${
        rest.disabled ? styles['disabled'] : ''
      } ${className}`}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default Button;
