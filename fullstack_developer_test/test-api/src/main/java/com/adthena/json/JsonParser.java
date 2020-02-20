package com.adthena.json;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;

import java.io.IOException;
import java.util.List;

public class JsonParser {
    private static final ObjectMapper mapper = new ObjectMapper();
    static
    {
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    }

    public static <T> T readValue(String s, Class<T> clazz) {
        try {
            return mapper.readValue(s, clazz);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static <T> List<T> readValues(String s, Class<T> clazz) {
        try {
            CollectionType javaType = mapper.getTypeFactory()
                    .constructCollectionType(List.class, clazz);
            return mapper.readValue(s, javaType);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
