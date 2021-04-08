package Servlet;

import Spider.MySpider;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(urlPatterns = "/SpiderServlet",loadOnStartup = 1)
public class SpiderServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("233");
        MySpider mySpider = new MySpider();
        try {
            System.out.println("开始调用");
            mySpider.spider();
            System.out.println("爬虫程序执行中");
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        response.getWriter().append("Served at: ").append(request.getContextPath());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        MySpider mySpider = new MySpider();
//        try {
//            System.out.println("开始调用");
//            mySpider.spider();
//            System.out.println("爬虫程序执行中");
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
        System.out.println(233);
        doPost(request,response);
    }
}
