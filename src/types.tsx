export type ErrorWithMessage = {
  status: number;
  data: {
    message: string;
  };
};

export type User = {
  email: string;
  password: string;
  name: string;
  createdEmployee: any[];
};
