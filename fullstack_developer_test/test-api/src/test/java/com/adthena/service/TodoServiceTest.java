package com.adthena.service;


import com.adthena.http.HttpClient;
import com.adthena.models.Todo;
import com.adthena.models.User;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.*;

public class TodoServiceTest {

    private static final HttpClient httpClient = mock(HttpClient.class);
    private static final TodoService todoService = mock(TodoService.class);
    @Before
    public void setup() {
        when(httpClient.run("https://jsonplaceholder.typicode.com/todos")).thenReturn("[{\"userId\": 1, \"id\": 1, \"title\": \"delectus aut autem\", \"completed\": false }, {\"userId\": 1, \"id\": 2, \"title\": \"quis ut nam facilis et officia qui\", \"completed\": false }]");
    }

    @After
    public void tearDown() {
        reset(httpClient);
    }

    @Test
    public void testTodoFound(){
        TodoService todoService = new TodoService(httpClient);
        User u = new User();
        u.id = 1L;
        List<Todo> todos = todoService.getTodoList(u);
        assertTrue(todos.size()==2);
    }

    @Test
    public void testTodoNotFound(){
        TodoService todoService = new TodoService(httpClient);
        User u = new User();
        u.id = 0L;
        List<Todo> todos = todoService.getTodoList(u);
        assertTrue(todos.size()==0);
    }
}
