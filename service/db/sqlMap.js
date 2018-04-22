// SQL语句映射文件，这里主要是对数据库的增改查操作
// select_name: 'select * from user where username = ?',
// node 报错将 where username = ?放在api中拼接
var sqlMap = {
  user: {
    add : 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
    select_name: 'select * from user',
    update_user: 'update user set'
  }
}

module.exports = sqlMap;
