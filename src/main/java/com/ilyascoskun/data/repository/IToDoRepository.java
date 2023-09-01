package com.ilyascoskun.data.repository;

import com.ilyascoskun.business.dto.ToDoDto;
import com.ilyascoskun.data.entity.ToDoEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IToDoRepository extends CrudRepository<ToDoEntity,Long> {

    // Delivered Query (Kendi sorgumu yazdım)
    Optional<ToDoEntity> findByTodoContent(String categoryName);

    List<ToDoEntity> findByTodoComplete(ToDoDto.TodoStatus todoStatus);
}
