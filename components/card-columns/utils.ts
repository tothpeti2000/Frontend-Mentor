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

export const getColorClass = (idx: number) => {
  switch (idx) {
    case 0:
      return "text-ccs-brightOrange";
    case 1:
      return "text-ccs-darkCyan";
    case 2:
      return "text-ccs-veryDarkCyan";
    default:
      return "";
  }
};

export const getBgColorClass = (idx: number) => {
  switch (idx) {
    case 0:
      return "bg-ccs-brightOrange";
    case 1:
      return "bg-ccs-darkCyan";
    case 2:
      return "bg-ccs-veryDarkCyan";
    default:
      return "";
  }
};
