package Dao;



import entity.Rhesis;

import java.sql.SQLException;

public interface RhesisDaoImpl {
    /**
     * insert方法，增加数据
     * @return 返回一个布尔值，true为成功，false为失败
     * @throws SQLException
     * @param rhesis rhesis对象
     */
    boolean insert(Rhesis rhesis) throws SQLException, ClassNotFoundException;
}
