package Dao;


import entity.Rhesis;

import java.sql.*;

public class RhesisDao implements RhesisDaoImpl {
    private Connection cn;
    private PreparedStatement stmt=null;
    private ResultSet rl=null;
//    DBUtils dbUtils = new DBUtils();
//    Connection connection = dbUtils.getConnection();
//    private QueryRunner queryRunner = new QueryRunner(dbUtils.getDataSource());
    /**
     * insert方法，增加数据
     * @return 返回一个布尔值，true为成功，false为失败
     * @throws SQLException
     * @param rhesis
     */
    @Override
    public boolean insert(Rhesis rhesis) throws SQLException, ClassNotFoundException {
        Class.forName("com.mysql.jdbc.Driver");
        //选择驱动类，连接地址、账号密码，连接MySQL
        String driverClass="com.mysql.jdbc.Driver";
        String url="jdbc:mysql://localhost:3306/nikki?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai";
        String sqlusername="root";
        String sqlpassword="remilia7";
        Connection conn = DriverManager.getConnection(url, sqlusername,
                sqlpassword);
        String sql = "insert ignore into rhesis(rhesis_sentence,rhesis_writer,rhesis_book,inputtime) values (?,?,?,?)";
        Object[] params = new Object[]{rhesis.getRhesis_sentence(),rhesis.getRhesis_writer(),rhesis.getRhesis_book(),rhesis.getInputtime()};
        cn = conn;
        stmt = cn.prepareStatement(sql);
        stmt.setString(1,rhesis.getRhesis_sentence());
        stmt.setString(2,rhesis.getRhesis_writer());
        stmt.setString(3,rhesis.getRhesis_book());
        stmt.setString(4,rhesis.getInputtime());
        return stmt.executeUpdate()>0;
//        int rows = queryRunner.update(sql,params);
        //System.out.println("所影响的行："+rows);
//        boolean bl = false;
//        if (rl.next()){bl = true;}
//        return bl;
    }

    public void close() throws SQLException {
//        dbUtils.myClose(null,null,connection);
        cn.close();
        System.out.println("成功关闭");
    }
}
