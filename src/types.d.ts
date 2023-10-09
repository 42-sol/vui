import { h } from 'vue';

export type vClasses = string[];
export type vStyles = { [key: string]: string };

export type CascadeObj = {
  id: number,
  options: CascadeOptionObj[]
};

export type CascaderDataItem = {
  options: CascadeOptionObj[]
}

export type CascadeOptionObj = {
  id?: string | number,
  value: string | number,
  title: string,
  children?: CascadeOptionObj[],
  options?: CascadeOptionObj[],
  getAsyncOptions?: () => Promise,
  onClick?: (params: { preventEmit: () => void, option: CascadeOptionObj }) => unknown;
  loadingState?: 'process' | 'ready' | undefined,
  render?: () => h
};

export type OptionClickEmitOptions = {
  option: CascadeOptionObj,
  last: boolean
};

export type CascadeSelectEmitOptions = {
  cascade: CascadeObj,
  optionParams: OptionClickEmitOptions,
};

export type CascadesConfig = {
  width: string | number,
  maxHeight: string | number,
  height: string | number
};
