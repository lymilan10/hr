package org.liuy191.vhr.mapper;

import org.apache.ibatis.annotations.Param;
import org.liuy191.vhr.model.Position;
//import org.javaboy.vhr.model.Position;

import java.util.List;

public interface PositionMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Position record);

    int insertSelective(Position record);

    Position selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Position record);

    int updateByPrimaryKey(Position record);

    List<Position> getAllPositions();

    Integer deletePositionsByIds(@Param("ids") Integer[] ids);
}