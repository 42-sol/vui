export function createStyleClasses(
  callback: (params: { classes: vClasses, styles: vStyles}) => void
): { class: vClasses, style: vStyles } {
  const classes: vClasses = [];
  const styles: vStyles = {};

  callback({ classes, styles });

  return {
    class: classes,
    style: styles
  }; 
};