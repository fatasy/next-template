import { FieldValues, SubmitHandler } from "react-hook-form";

export type FormType<D> = {
  data?: D;
  inSubmit?: boolean;
  loading?: boolean;
  onSubmit: (data: D) => void;
  onFinish?: SubmitHandler<D & FieldValues>;
};
