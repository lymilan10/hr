package org.liuy191.vhr.mapper;

import org.apache.ibatis.annotations.Param;
//import org.javaboy.vhr.model.MailSendLog;
import org.liuy191.vhr.model.MailSendLog;

import java.util.Date;
import java.util.List;

public interface MailSendLogMapper {
    Integer updateMailSendLogStatus(@Param("msgId") String msgId, @Param("status") Integer status);

    Integer insert(MailSendLog mailSendLog);

    List<MailSendLog> getMailSendLogsByStatus();

    Integer updateCount(@Param("msgId") String msgId, @Param("date") Date date);
}
