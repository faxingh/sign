import fly from '@/utils/request';

// 添加面试
export let add = code=>{
  return fly.post('/sign', {code});
}
