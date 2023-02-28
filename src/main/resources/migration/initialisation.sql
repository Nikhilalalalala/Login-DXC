DROP DATABASE login;
CREATE DATABASE login;

CREATE TABLE login.roles (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE login.users (
    id INTEGER NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (role) REFERENCES login.roles(id)
);

INSERT INTO login.roles (name) VALUE ("ROLE_USER");
INSERT INTO login.roles (name) VALUE ("ROLE_MANAGER");
INSERT INTO login.users (username, password, role) VALUE ("user1", "password1", 1);
INSERT INTO login.users (username, password, role) VALUE ("manager1", "password1", 2);



