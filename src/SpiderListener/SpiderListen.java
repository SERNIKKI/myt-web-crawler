package SpiderListener;

import TimeTest.SpiderTimer;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class SpiderListen implements HttpSessionListener {
    static {
        System.out.println("---------------");
        new SpiderTimer();
        System.out.println("---------------");
    }

    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {

    }

    @Override
    public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {

    }
}
