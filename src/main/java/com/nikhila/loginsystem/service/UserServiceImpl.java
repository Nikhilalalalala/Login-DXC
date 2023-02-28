package com.nikhila.loginsystem.service;

import com.nikhila.loginsystem.entity.Role;
import com.nikhila.loginsystem.entity.User;
import com.nikhila.loginsystem.repository.RoleRepository;
import com.nikhila.loginsystem.repository.UserRepository;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;



    public UserServiceImpl(UserRepository userRepository,
                           RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public void saveNewUser(String username, String password) {
        User user = new User();
        user.setUsername(username);

        //encrypt the password once we integrate spring security
        //user.setPassword(userDto.getPassword());
        user.setPassword(password);
        Role role = roleRepository.findByName("ROLE_ADMIN");
        if(role == null){
            role = checkRoleExist();
        }
        user.setRole(role);
        userRepository.save(user);

    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public boolean checkPassword(String username, String password) {
        User user = findByUsername(username);
        if (user == null) return false;
        else return user.getPassword().equals(password);
    }


    private Role checkRoleExist() {
        Role role = new Role();
        role.setName("ROLE_ADMIN");
        return roleRepository.save(role);
    }
}
