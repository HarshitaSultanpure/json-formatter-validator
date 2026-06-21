package com.example.jsonformatter.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JsonResponse {

    private boolean valid;
    private String formattedJson;
    private String errorMessage;
}
