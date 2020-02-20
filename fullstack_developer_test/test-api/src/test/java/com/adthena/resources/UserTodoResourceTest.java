package com.adthena.resources;


import com.adthena.models.User;
import com.adthena.service.TodoService;
import com.adthena.service.UserService;
import io.dropwizard.testing.junit.ResourceTestRule;
import org.junit.After;
import org.junit.Before;
import org.junit.ClassRule;

import java.util.Optional;

import static org.mockito.Mockito.*;


public class UserTodoResourceTest {

    private static final UserService userService = mock(UserService.class);
    private static final TodoService todoService = mock(TodoService.class);
    @Before
    public void setup() {
        when(userService.getUser("John")).thenReturn(Optional.of(new User()));
//        List<Part> parts = new ArrayList<>();
//        parts.add(part);
//        when(partsService.getParts()).thenReturn(parts);
//        when(partsService.createPart(any(Part.class))).thenReturn(part);
//        when(partsService.editPart(any(Part.class))).thenReturn(part);
//        when(partsService.deletePart(eq(1))).thenReturn(SUCCESS);
    }

    @After
    public void tearDown() {
        reset(userService);
    }
//
//    @ClassRule
//    public static final ResourceTestRule resources =
//            ResourceTestRule.builder().addResource(new UserTodoResource(userTodoService)).build();
//    @ClassRule
//    public static final DropwizardClientRule dropwizard = new DropwizardClientRule(new TodoModule());
//
//    public static final DropwizardTestSupport<TestConfiguration> SUPPORT =
//            new DropwizardTestSupport<TestConfiguration>(AdthenaApi.class,
//                    ResourceHelpers.resourceFilePath("my-app-config.yaml"),
//                    ConfigOverride.config("server.applicationConnectors[0].port", "0") // Optional, if not using a separate testing-specific configuration file, use a randomly selected port
//            );
//
//    @BeforeAll
//    public void beforeClass() {
//        SUPPORT.before();
//    }
//
//    @AfterAll
//    public void afterClass() {
//        SUPPORT.after();
//    }
//
//    @Test
//    public void loginHandlerRedirectsAfterPost() {
//        Client client = new JerseyClientBuilder(SUPPORT.getEnvironment()).build("test client");
//
//        Response response = client.target(
//                String.format("http://localhost:%d/login", SUPPORT.getLocalPort()))
//                .request()
//                .post(Entity.json(loginForm()));
//
//        assertThat(response.getStatus()).isEqualTo(302);
//    }
}
