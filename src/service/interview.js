import fly from '@/utils/request';
// 获取面试列表
export let sign = ()=>{
  return fly.get('/sign');
}
//获取页面详情
export let detail = (id)=>{
  return fly.get(`/sign/${id}`);
}