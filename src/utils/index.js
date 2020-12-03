import moment from 'moment-timezone'
import store from '@/store'

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * @param {array} a
 * @param {array} b
 * @returns {boolean}
 */
export function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

/**
 * Clone a Object
 * @param {object} a
 */
export function cloneObject(obj) {
  if (null == obj || "object" != typeof obj) return obj;
  var copy = obj.constructor();
  for (let attr in obj) {
    if (obj.hasOwnProperty(attr) && typeof obj[attr] == 'object')
      copy[attr] = cloneObject(obj[attr])
    else if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}

/**
 * Check if Array is Empty
 * @param {array}
 */
export function isEmpty(arr) {
  if (typeof arr == 'array' && arr.length > 0)
    return false;
  return true;
}

/**
 * @param {string} Timestamp
 * @param {string} Fromat
 * @return {string} time converted
 */
export function getMomentTime(a, b) {
  let time = moment(a);
  if (time.isValid())
    return time.format(b)
  return a

}

export function formatTimeZone(a, b){

  let time = moment(a);
  if (time.isValid()){
    let tz = store.getters.timezone
    let reg = /-(\d\d):(\d\d)/
    let reg2   = /\+(\d\d):(\d\d)/
    let match = /(\d\d):\d\d/.exec(tz)
    if(reg.test(tz)){
      return time.subtract(match[1],'hours').format(b)
    }else if(reg2.test(tz)){
      return time.add(match[1],'hours').format(b)
    }
    return time.tz(tz).format(b)
  }

  return a
}

export function toUTC(a){
  return moment(a).utc().format()
}


/**
 * Filter properties of Object
 *
 * @param {object} obj
 * @param {function} predicate
 */
export function filterObj(obj, predicate) {
  const result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
      result[key] = obj[key];
    }
  }

  return result;
};

export function countObj(obj) {
  let count = 0;
  for (let i in obj) {
    count++
  }
  return count;
}

export function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
      return false;
  }

  for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      if(typeof a[propName] !== 'string'){
        if(!isEquivalent(a[propName], b[propName])){
          return false
        }
      }
      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
          return false;
      }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}
