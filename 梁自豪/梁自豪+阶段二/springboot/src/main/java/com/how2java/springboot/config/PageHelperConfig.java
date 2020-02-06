package com.how2java.springboot.config;
 
import java.util.Properties;
 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
 
import com.github.pagehelper.PageHelper;

//下方注解表示PageHelperConfig 这个类是用来做配置的。 
@Configuration
public class PageHelperConfig {
 
	//注解@Bean 表示启动PageHelper这个拦截器。
    @Bean
    public PageHelper pageHelper() {
        PageHelper pageHelper = new PageHelper();
        Properties p = new Properties();
        p.setProperty("offsetAsPageNum", "true");//offsetAsPageNum:设置为true时，
        //会将RowBounds第一个参数offset当成pageNum页码使用.
        
        p.setProperty("rowBoundsWithCount", "true");//使用RowBounds分页会进行count查询.
       /*下方：启用合理化时，如果pageNum<1会查询第一页，如果pageNum>pages会查询最后一页。*/
        p.setProperty("reasonable", "true");
        pageHelper.setProperties(p);
        return pageHelper;
    }
}