package com.nikhila.loginsystem.controller;

import com.nikhila.loginsystem.entity.Role;
import com.nikhila.loginsystem.requests.LoginRequest;
import com.nikhila.loginsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) throws Exception {
        final boolean isAuthenticated = userService.checkPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if (isAuthenticated) {
            Role role = userService.findByUsername(loginRequest.getUsername()).getRole();
            Map<String, String> response = new HashMap<>();
            response.put("role", role.getName());
            return ResponseEntity.ok()
                    .body(response);
        } else {
            return ResponseEntity.badRequest()
                    .build();
        }
    }

}
