import { _axios } from '@/utils/axios';
let todoList = () => {
  return _axios.get(`/api/todo`);
};

export { todoList };
