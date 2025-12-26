export const baseOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-GB', options ?? baseOptions).format(new Date(date));

export default formatDate;
