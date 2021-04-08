package Servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class LoginServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        //第一步，把字符集设为utf-8，否则会出现乱码
        request.setCharacterEncoding("utf-8");
        //把用户输入的用户名和密码拿出来
        String un = request.getParameter("username");
        String pw = request.getParameter("password");
        if(pw.equals("")){
            request.getRequestDispatcher("errors.jsp").forward(request,response);
        }else {
            //把用户名设置到request属性里，这样跳转到欢迎或者错误界面时就知道叫什么
            request.setAttribute("username",un);
            //此时开始在数据库中搜寻有没有同时满足用户名、密码的行，有就对，没有就错：
            //先加载lib目录下的java-connect-mysql.jar驱动包
            try {
                Class.forName("com.mysql.jdbc.Driver");
                //选择驱动类，连接地址、账号密码，连接MySQL
                String driverClass="com.mysql.jdbc.Driver";
                String url="jdbc:mysql://localhost:3306/nikki?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai";
                String sqlusername="****";
                String sqlpassword="****";
                Connection conn = DriverManager.getConnection(url, sqlusername,
                        sqlpassword);
                String sql = "select * from user where user_name = ? and user_password = ?";
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setString(1, un);
                ps.setString(2, pw);
                ResultSet rs=ps.executeQuery();
                if(rs.next()){
//                    MySpider spider = new MySpider();
//                    System.out.println("---------------");
//                    new SpiderTimer();
//                    System.out.println("---------------");
                    request.getRequestDispatcher("welcome.jsp").forward(request,response);
                }else {
                    request.getRequestDispatcher("error.jsp").forward(request,response);
                }
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        doGet(request,response);
    }
}
