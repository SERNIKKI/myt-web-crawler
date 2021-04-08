<%--
  Created by IntelliJ IDEA.
  User: lenovo
  Date: 2020/2/28
  Time: 13:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charest=utf-8">
    <title>NIKKI的爬虫</title>
    <style type="text/css">
        body{
            background-image: url("https://7ny.mxlbs.cn/2020-02-28/3114be1c0fd1b8ea50e0f4f254edcd1c.jpg");
            background-size: cover;
        }
        h1{
            /*标题居中*/
            margin: 100px auto;
            text-align: center;
        }
        form{
            /*表单居中*/
            width: 300px;
            height: 220px;
            margin: 100px auto;
        }
        .item{
            width: 80px;
            display: inline-block;
            text-align: right;
        }
        .itemV{
            width: 180px;
            display: inline-block;
            text-align: right;
        }
        #btn{
            /*按钮居中*/
            margin-left: 80px;
        }
    </style>
</head>
<body>
    <h1>欢迎来到NIKKI的爬虫</h1>
    <form action="login" method="post">
        <span class="item">用户名</span>
        <span><input type="text" name="username"/></span><br><br>
        <span class="item">密码</span>
        <span><input type="password" name="password" /></span><br><br><br>
        <div id="btn">
            <input type="submit" value="登陆"/>
            <input type="reset" value="重置"/>
        </div>
    </form>
</body>
</html>
