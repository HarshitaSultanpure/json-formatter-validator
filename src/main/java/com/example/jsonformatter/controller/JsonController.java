package com.example.jsonformatter.controller;

import com.example.jsonformatter.dto.JsonRequest;
import com.example.jsonformatter.dto.JsonResponse;
import com.example.jsonformatter.service.JsonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/json")
@RequiredArgsConstructor
@CrossOrigin("*")
public class JsonController {

    private final JsonService jsonService;

    @PostMapping("/format")
    public ResponseEntity<JsonResponse> format(
            @RequestBody JsonRequest request) {

        return ResponseEntity.ok(
                jsonService.formatJson(
                        request.getJsonText()
                )
        );
    }
}
