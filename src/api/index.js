import { _axios } from '@/utils/axios';
const todoList = () => {
  return _axios.get(`/api/todo`);
};

export { todoList };
