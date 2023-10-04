type vClasses = string[];
type vStyles = { [key: string]: string };

type CascadeObj = {
  id: number,
  options: CascadeOptionObj[]
};

type CascaderDataItem = {
  options: CascadeOptionObj[]
}

type CascadeOptionObj = {
  id?: string | number,
  value: string | number,
  title: string,
  children?: CascadeOptionObj[],
  options?: CascadeOptionObj[],
  getAsyncOptions?: () => Promise,
  onClick?: (params: { preventEmit: () => void, option: CascadeOptionObj }) => unknown;
  loadingState?: 'process' | 'ready' | undefined
};

type OptionClickEmitOptions = {
  option: CascadeOptionObj,
  last: boolean
};

type CascadeSelectEmitOptions = {
  cascade: CascadeObj,
  optionParams: OptionClickEmitOptions,
};

type CascadesConfig = {
  width: string | number,
  maxHeight: string | number,
  height: string | number
};
