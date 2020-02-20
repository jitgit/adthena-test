package com.adthena.modules;

import com.adthena.conf.ApiConfiguration;
import com.adthena.http.HttpClient;
import com.adthena.resources.UserTodoResource;
import com.adthena.service.TodoService;
import com.adthena.service.UserService;
import com.google.inject.Binder;
import com.hubspot.dropwizard.guicier.DropwizardAwareModule;

public class TodoModule extends DropwizardAwareModule<ApiConfiguration> {
    @Override
    public void configure(Binder binder) {
        binder.bind(HttpClient.class);
        binder.bind(UserService.class);
        binder.bind(TodoService.class);
        binder.bind(UserTodoResource.class);
    }
}
