export type FormType<D> = {
  data?: D;
  inSubmit?: boolean;
  loading?: boolean;
  onSubmit: (data: D) => void;
};
