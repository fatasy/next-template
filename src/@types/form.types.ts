export type FormType<D> = {
  data?: D;
  onSubmit: (data: D) => void;
};
