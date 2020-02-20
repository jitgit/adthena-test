package com.adthena.http;

import okhttp3.*;

import javax.inject.Inject;
import java.io.IOException;

public class HttpClient {
    private final OkHttpClient client = new OkHttpClient();

    @Inject
    public HttpClient() {
    }

    public String run(String url) {
        Request request = new Request.Builder()
                .url(url)
                .build();

        try {
            Response response = client.newCall(request).execute();
            return response.body().string();
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }
}
