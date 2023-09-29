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

  loadingState?: 'process' | 'ready' | undefined
};

type SelectedOption = {
  cascadeId: number,
  option: CascadeOptionObj
};

type OptionClickEmitOptions = {
  option: CascadeOptionObj,
  last: boolean
};

type CascadeSelectEmitOptions = {
  cascade: CascadeObj,
  optionParams: OptionClickEmitOptions,
};