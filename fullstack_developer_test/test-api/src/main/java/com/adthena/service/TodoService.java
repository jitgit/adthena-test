package com.adthena.service;

import com.adthena.http.HttpClient;
import com.adthena.json.JsonParser;
import com.adthena.models.Todo;
import com.adthena.models.User;

import javax.inject.Inject;
import java.util.List;
import java.util.stream.Collectors;

public class TodoService {

    private final HttpClient httpClient;

    @Inject
    public TodoService(HttpClient httpClient) {
        this.httpClient = httpClient;
    }


    public List<Todo> getTodoList(User user) {
        String r = this.httpClient.run("https://jsonplaceholder.typicode.com/todos");
        List<Todo> todos = JsonParser.readValues(r, Todo.class);
        return todos.stream().filter((t) -> t != null && t.userId != null && t.userId.equals(user.id)).collect(Collectors.toList());
    }
}
