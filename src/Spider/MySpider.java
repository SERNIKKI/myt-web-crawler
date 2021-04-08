package Spider;

import Dao.RhesisDao;
import entity.Rhesis;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

public class MySpider{
    @Test
    public void spider() throws SQLException, ClassNotFoundException, IOException {
        RhesisDao rhesisDao = new RhesisDao();
        String s = saveSnapshot("https://www.mingyantong.com/recommend");
        System.out.println("*************************");
        System.out.println(s);
        String[] strs = s.split("\\*");
        System.out.println(strs.length);
        for (int i = 0;i<strs.length;i++){
            String[] strings = strs[i].split("/");
            System.out.println("------------------------------");
            System.out.println("sentence: " + strings[0] + "writer: " + strings[1] + "book: " + strings[2]);
            String s1 = strings[0]; String s2 = strings[1]; String s3 = strings[2];
            Rhesis rhesis = new Rhesis();
            rhesis.setRhesis_sentence(s1);
            rhesis.setRhesis_writer(s2);
            rhesis.setRhesis_book(s3);
            rhesis.setInputdata();
            System.out.println(rhesis.getRhesis_sentence());
            boolean bl = rhesisDao.insert(rhesis);
            System.out.println(bl);
        }
        System.out.println("*************************");
    }

    public static String saveSnapshot(String url) throws IOException {
        Runtime rt = Runtime.getRuntime();
        //window下的位置,linux下需改动
        Process p = rt.exec("/www/server/tomcat/webapps/phantomjs /www/server/tomcat/webapps/Spiders.js " + url);
        InputStream is = p.getInputStream();
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        StringBuffer sbf = new StringBuffer();
        String tmp = "";
        while ((tmp = br.readLine()) != null) {
            sbf.append(tmp);
        }
        return sbf.toString();
    }
}
