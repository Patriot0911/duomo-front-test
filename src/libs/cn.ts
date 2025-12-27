import clsx from 'clsx';

// зазвичай, ми могли б ще використати інші бібліотеки тут, по типу tailwind-merge тощо
// проте для поточного прикладу - напевно це не має сенсу
export const cn = (...args: Parameters<typeof clsx>) =>
  clsx(...args);
