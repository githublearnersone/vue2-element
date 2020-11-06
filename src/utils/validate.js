/**
 * 过滤特殊字符
 * @param {*} value 
 */
export function stripscript(value) {
    value = value.replace(/[`～*~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g, '').replace(/\s/g, '');
    return value;
};

/**
 * 验证邮箱
 * @param {邮箱} value 
 */
export function validateEmail(value) {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return !reg.test(value) ? true : false;
}

/**
 * 验证密码 6至20位数字+密码
 * @param {密码} value 
 */
export function validatePass(value) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return !reg.test(value) ? true : false;
}

/**
 * 验证验证码
 * @param {验证码} value 
 */
export function validateVCode(value) {
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value) ? true : false;
}
