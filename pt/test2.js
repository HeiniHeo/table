const express = require('express');
const app = express();
const {sequelize} = require('./models');
const {skill,skill_item,test,supercalifragilisticexpialidocious} = require('./models/index')

/*
    sequelize-auto DB데이터 베이스에 있는 테이블 구조를 가지고 와서 그대로
    모델.js를 만들어준다.
    class라는 데이터 베이스에 총3개

    sequelize-auto -o "./models" | -d class | -h localhost | -u root | -p 3306 | -x 1234 | -e mysql
    -o "경로"
    -d "데이터 베이스"
    -h "url : 우리같은 경우는 localhost"
    -u "root"
    -p "port"
    -x "password"
    -e "mysql"
*/

sequelize.sync({force:false})
.then( _=>{
    console.log('connection succeed')
})
.catch((e)=>{
    console.log(e)
    console.log('connection failed')
});

app.get('/', async (req,res)=>{
    let result = await skill.findAll({
        include:{model:skill_item,as:'item'}
    });
    console.log(result);
    res.json({result});
});

app.listen(3000,()=>{
    console.log('server starting port 3000')
});