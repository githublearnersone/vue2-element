import service from '@/utils/request';

/**
 * 获取验证码
 */
export function GetSms(){
    service.request({
        // `url` 是用于请求的服务器 URL
        url: '/GetSms',
    
        // `method` 是创建请求时使用的方法
        method: 'get', // default
        data: { },
    });
}

/**
 * 登录
 */
export function Login(){
    service.request({
        // `url` 是用于请求的服务器 URL
        url: '/Login',
    
        // `method` 是创建请求时使用的方法
        method: 'post', // default
        data: { },
    });
}