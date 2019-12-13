import axios from "axios";

const getCookie = function (key) {
  var cookieArr = document.cookie.split('; ')
  for (var i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i].split('=')[0] === key) {
      return cookieArr[i].split('=')[1]
    }
  }
}

export const getQuery = function (key) {
  var queryArr = location.search.slice(1).split('&')
  for (var i = 0; i < queryArr.length; i++) {
    if (queryArr[i].split('=')[0] === key) {
      return queryArr[i].split('=')[1]
    }
  }
}

export const myAjax = ({ url, method = 'GET', data = {} }) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      data,
    })
      .then(res => resolve(res))
      .catch(error => reject(error))
  })
}

export function $(ele) {
  return document.querySelector(ele)
}

export function $$(ele) {
  return document.querySelectorAll(ele)
}


