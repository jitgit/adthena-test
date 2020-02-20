package com.adthena.resources;

import com.adthena.models.Todo;
import com.adthena.models.User;
import com.adthena.service.TodoService;
import com.adthena.service.UserService;
import com.codahale.metrics.annotation.Timed;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.ws.rs.core.Response;

@Path("/data")
@Produces(MediaType.APPLICATION_JSON)
public class UserTodoResource {

    private final UserService userService;
    private final TodoService todoService;

    @Inject
    public UserTodoResource(UserService userService, TodoService todoService) {
        this.userService = userService;
        this.todoService = todoService;
    }

    @Timed
    @GET
    @Path("todos/{username}")
    public Response getTodo(@PathParam("username") String userName) {
        Optional<User> user = userService.getUser(userName);
        Map<String, Object> result = new HashMap<String, Object>();
        if (user.isPresent()) {
            List<Todo> todoList = todoService.getTodoList(user.get());
            result.put("user", user.get());
            result.put("todos", todoList);
            result.put("status", 200);
            return Response.status(Response.Status.OK).entity(result).build();
        } else {
            result.put("status", 404);
            result.put("error", String.format("User %s Not Found", userName));
            return Response.status(Response.Status.NOT_FOUND).entity(result).build();
        }
    }
}
