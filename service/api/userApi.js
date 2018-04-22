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
router.post('/addUser', (req, res) => {
  let sql = $sql.user.add
  let params = req.body
  console.log(params)
  console.log(params.birth)
  conn.query(sql,
    [
      params.name,
      params.account,
      params.pass,
      params.checkPass,
      params.email,
      params.phone,
      params.card,
      dateStr(params.birth),
      params.sex
    ],
    function(erer, result){
      if(err){
        console.log(err)
      }
      if(result){
        jsonWrite(res, result)
      }
    }
  )
})


// 查找用户接口
router.post('/login',(req, res) => {
  let sql_name = $sql.user.select_name
  // let sql_password = $sql.user.select_password
  let params =- req.body
  console.log(params)
  if(params.name){
    sql_name += "where username = '" + params.name + "'"
  }

  let keywords = JSON.parse(Object.keys(params)[0])
  conn.query(sql_name, params.name, function(err, result){
    if(err){
      console.log(err)
    }

    // console.log(result)

    if(result[0] === undefined){
      res.send('-1') // 查询不出来username， data 返回 -1
    } else {
      let resultArray = result[0]
      console.log(resultArray.password)
      // console.log(keywords)
      if(resultArray.password === keywords.password){
        jsonWrite(res, result)
      } else {
        res.send('0') // username
      }
    }
  })
})


// 获取用户信息
router.get('/getUser', (req, res) => {
  let sql_name = $sql.user.select_name
  // let sql_password = $sql.user.select_password
  let params = req.body
  console.log(params)
  if(params.name){
    sql_name += "where username = '" + params.name + "'"
  }
  conn.query(sql_name, params.name, function(err, result){
    if(err){
      console.log(err)
    }
    // console.log(result)
    if(result[0] === undefined){
      res.send('-1') // 查询不出username data 返回 -1
    } else {
      jsonWrite(res, result)
    }
  })
})

//更新用户信息
router.post('/updateUser', (req, res) => {
  var sql_update = $sql.user.update_user
  var params = req.body
  console.log(params)
  if (params.id) {
      sql_update  += " email = '" + params.email +
                      "',phone = '" + params.phone +
                      "',card = '" + params.card +
                      "',birth = '" + params.birth +
                      "',sex = '" + params.sex +
                      "' where id ='"+ params.id + "'"
  }
  conn.query(sql_update, params.id, function(err, result) {
      if (err) {
          console.log(err)
      }
      console.log(result);
      if (result.affectedRows === undefined) {
          res.send('更新失败，请联系管理员')   //查询不出username，data 返回-1
      } else {
          res.send('ok');
      }
  })
})


//更改密码
router.post('/modifyPassword', (req, res) => {
  var sql_modify = $sql.user.update_user
  var params = req.body
  console.log(params)
  if (params.id) {
      sql_modify +=  " password = '" + params.pass +
                      "',repeatPass = '" + params.checkPass +
                      "' where id ='"+ params.id + "'"
  }
  conn.query(sql_modify, params.id, function(err, result) {
      if (err) {
          console.log(err)
      }
      // console.log(result);
      if (result.affectedRows === undefined) {
          res.send('修改密码失败，请联系管理员')   //查询不出username，data 返回-1
      } else {
          res.send('ok')
      }
  })
})


module.exports = router
