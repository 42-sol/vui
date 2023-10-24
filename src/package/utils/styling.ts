import type { vClasses, vStyles } from '@/types.d';

export const styling = (
  callback: (params: { classes: vClasses, styles: vStyles}) => void
): { class: vClasses, style: vStyles } => {
  const classes: vClasses = [];
  const styles: vStyles = {};

  callback({ classes, styles });

  return {
    class: classes,
    style: styles
  }; 
};

export const pixelsFromNumber = (_: string | number): string => {
  if (typeof _ === 'number') return `${_}px`
  return _;
};
