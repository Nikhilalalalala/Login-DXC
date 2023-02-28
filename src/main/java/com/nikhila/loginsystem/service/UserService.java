package com.nikhila.loginsystem.service;

import com.nikhila.loginsystem.entity.User;

public interface UserService {

    void saveNewUser(String username, String password);

    User findByUsername(String username);

    boolean checkPassword(String username, String password);

}
