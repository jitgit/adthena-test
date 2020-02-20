package com.adthena.service;

import com.adthena.http.HttpClient;
import com.adthena.json.JsonParser;
import com.adthena.models.User;

import javax.inject.Inject;
import java.util.List;
import java.util.Optional;

public class UserService {

    private final HttpClient httpClient;

    @Inject
    public UserService(HttpClient httpClient) {
        this.httpClient = httpClient;
    }

    public Optional<User> getUser(String userName) {
        String r = this.httpClient.run("https://jsonplaceholder.typicode.com/users");
        List<User> users = JsonParser.readValues(r, User.class);
        return users.stream().filter((user -> userName != null && userName.equalsIgnoreCase(user.username))).findAny();
    }
}
