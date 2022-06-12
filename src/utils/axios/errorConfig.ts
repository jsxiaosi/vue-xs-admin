import type { AxiosError } from 'axios';

export const errorData = (res: AxiosError) => {
  return {
    data: null,
    message: res.message,
    code: res.code,
  };
};
