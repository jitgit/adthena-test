package com.adthena.service;


import com.adthena.http.HttpClient;
import com.adthena.models.User;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

public class UserServiceTest {

    private static final HttpClient httpClient = mock(HttpClient.class);
    @Before
    public void setup() {
        when(httpClient.run("https://jsonplaceholder.typicode.com/users")).thenReturn("[{\"id\": 1, \"name\": \"Leanne Graham\", \"username\": \"Bret\", \"email\": \"Sincere@april.biz\", \"address\": {\"street\": \"Kulas Light\", \"suite\": \"Apt. 556\", \"city\": \"Gwenborough\", \"zipcode\": \"92998-3874\", \"geo\": {\"lat\": \"-37.3159\", \"lng\": \"81.1496\"} }, \"phone\": \"1-770-736-8031 x56442\", \"website\": \"hildegard.org\", \"company\": {\"name\": \"Romaguera-Crona\", \"catchPhrase\": \"Multi-layered client-server neural-net\", \"bs\": \"harness real-time e-markets\"} }, {\"id\": 2, \"name\": \"Ervin Howell\", \"username\": \"Antonette\", \"email\": \"Shanna@melissa.tv\", \"address\": {\"street\": \"Victor Plains\", \"suite\": \"Suite 879\", \"city\": \"Wisokyburgh\", \"zipcode\": \"90566-7771\", \"geo\": {\"lat\": \"-43.9509\", \"lng\": \"-34.4618\"} }, \"phone\": \"010-692-6593 x09125\", \"website\": \"anastasia.net\", \"company\": {\"name\": \"Deckow-Crist\", \"catchPhrase\": \"Proactive didactic contingency\", \"bs\": \"synergize scalable supply-chains\"} }]");
    }

    @After
    public void tearDown() {
        reset(httpClient);
    }

    @Test
    public void testUserFound(){
        UserService userService = new UserService(httpClient);
        Optional<User> bret = userService.getUser("Bret");
        assertTrue(bret.isPresent());
    }

    @Test
    public void testUserNotFound(){
        UserService userService = new UserService(httpClient);
        Optional<User> bret = userService.getUser("Foo");
        assertFalse(bret.isPresent());
    }
}
