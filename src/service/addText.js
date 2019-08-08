import fly from '@/utils/request';

// 添加面试
export let addSign = params=>{
  console.log(params)
  return fly.post('/sign', params);
}
