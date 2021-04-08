package TimeTest;

import org.quartz.CronTrigger;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.impl.StdSchedulerFactory;


public class SpiderTimer {
    static {
        try {
            //获取一个默认调度器
            Scheduler defaultScheduler = StdSchedulerFactory.getDefaultScheduler();
            //开启调度器
            defaultScheduler.start();

            //封装要调度的任务
            String simpleName = SpiderTime.class.getSimpleName();
            JobDetail jobDetail = new JobDetail(simpleName, Scheduler.DEFAULT_GROUP, SpiderTime.class);
            //表示设置定时操作(每隔5秒执行一次)
            CronTrigger trigger = new CronTrigger(simpleName, Scheduler.DEFAULT_GROUP,"0 26 09,17,22 * * ?");
            //执行调度任务
            defaultScheduler.scheduleJob(jobDetail,trigger);
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
