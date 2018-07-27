import variable from "./../variables/platform";

export default (variables = variable) => {
  const h3Theme = {
    color: variables.textColor,
    fontFamily: variables.fontFamilyH3,
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3
  };

  return h3Theme;
};
