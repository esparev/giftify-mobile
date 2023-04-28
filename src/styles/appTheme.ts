import color from './color';

/**
 * App theme based on the color palette established in the design system.
 * @see https://www.figma.com/file/7SwSIEODuH8LUTmfhMrh1o/Giftify?node-id=47%3A4108&t=60TpZxKB9d49JEjy-1
 */
const appTheme = {
  dark: true,
  colors: {
    primary: color.primary,
    text: color.primary_text,
    card: color.background,
    border: color.background,
    background: color.background,
    notification: color.danger,
  },
};

export default appTheme;
