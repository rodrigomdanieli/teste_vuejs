import request from '@/utils/request'

export async function getLang(params) {
  let req = await request({
    url: '/lang/get_lang',
    method: 'GET',
    params
  });
  return req.data;
}

export function getAvailableLangs(){
  return request({
    url: '/lang/available_langs',
    method: 'GET'
  })
}
