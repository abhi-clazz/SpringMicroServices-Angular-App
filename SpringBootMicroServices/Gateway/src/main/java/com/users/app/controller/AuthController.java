package com.users.app.controller;

import com.users.app.dto.LoginRequest;
import com.users.app.dto.RegisterRequest;
import com.users.app.repository.UserRepository;
import com.users.app.service.AuthService;
import com.users.app.service.AuthenticationResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;
    @Autowired
    private UserRepository u;
  

    @PostMapping("/signup")
    public ResponseEntity signup(@RequestBody RegisterRequest registerRequest) {
        authService.signup(registerRequest);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }
    @RequestMapping("/userdetails")
    public Long getUserId() {
        User loggedInUser = authService.getCurrentUser().orElseThrow(() -> new IllegalArgumentException("User Not Found"));
        loggedInUser.getUsername();
        System.out.println( u.findByUserName(loggedInUser.getUsername()).get().getId());
        return  u.findByUserName(loggedInUser.getUsername()).get().getId();

    }
}
