package com.example.jsonformatter.service;

import com.example.jsonformatter.dto.JsonResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

@Service
public class JsonService {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public JsonResponse formatJson(String jsonText) {

        try {

            Object jsonObject =
                    objectMapper.readValue(jsonText, Object.class);

            String formatted =
                    objectMapper.writerWithDefaultPrettyPrinter()
                            .writeValueAsString(jsonObject);

            return new JsonResponse(
                    true,
                    formatted,
                    null
            );

        } catch (Exception e) {

            return new JsonResponse(
                    false,
                    null,
                    e.getMessage()
            );
        }
    }
}