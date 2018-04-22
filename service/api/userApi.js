const models = require('../db/db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../db/sqlMap')


let conn = mysql.createConnection(models.mysql)

conn.connect()

let jsonWrite = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.send('err')
  } else {
    console.log(ret)
    res.send(ret)
  }
}

let dateStr = (str) => {
  return new Date(str.slice(0, 7))
}


// 增加用户接口
