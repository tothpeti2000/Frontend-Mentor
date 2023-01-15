export const getBorderRadiusClasses = (idx: number) => {
  switch (idx) {
    case 0:
      return "rounded-t-lg lg:rounded-t-none lg:rounded-l-lg";
    case 2:
      return "rounded-b-lg lg:rounded-b-none lg:rounded-r-lg";
    default:
      return "";
  }
};

export const getColor = (idx: number) => {
  switch (idx) {
    case 0:
      return "brightOrange";
    case 1:
      return "darkCyan";
    case 2:
      return "veryDarkCyan";
    default:
      return "";
  }
};
