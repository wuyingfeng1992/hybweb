import instance from './index';


export const userLoginRequest=(data) =>{
  return instance.post('/user/login', data);
}

