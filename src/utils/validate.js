import { checkEmail } from "@/api/auth/main"
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str))
  {
    return true
  }
    return false
}

export async function validDBEmail(email){
  //return true;
  let valid = await checkEmail({email: email})
  if(valid.status == 'ok'){
    if(valid.data == 'VALID_EMAIL'){
      return true
    }
  }
  return false;
}
