package TimeTest;

import Spider.MySpider;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

import java.io.IOException;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class SpiderTime implements Job {
    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
//设置时间输出格式
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒");
        String time = simpleDateFormat.format(new Date());
        System.out.println(time);
        System.out.println("********************************************************************");
        try {
            new MySpider().spider();
        } catch (SQLException | ClassNotFoundException | IOException e) {
            e.printStackTrace();
        }
        System.out.println("********************************************************************");
    }
}
