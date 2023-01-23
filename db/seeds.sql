INSERT INTO departments (id, department_name)
VALUES (1, "Board"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Finance"),
       (5, "Legal");

-- Role seeds
INSERT INTO roles (department_id, title, salary)
VALUES (1, "CEO", 1000000),
       (2, "Sales Lead", 100000),
       (2, "Salesperson", 80000),
       (3, "Lead Engineer", 150000),
       (3, "Software Engineer", 120000),
       (4, "Accountant Manager", 160000),
       (4, "Accountant", 125000),
       (5, "Legal Team Lead", 250000),
       (5, "Lawyer", 190000);

-- Employee seeds
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Tyrese", "King", 1, null),
       ("Miles", "Davis", 2, 1),
       ("Louis", "Armstrong", 3, 3),
       ("John", "Coltrane", 4, 1),
       ("Charles", "Mingus", 5, 4), 
       ("Thelonious", "Monk", 6, 1),
       ("Ella", "Fitzgerald", 7, 5),
       ("Charlie", "Parker", 8, 1),
       ("Duke", "Ellington", 9, 6);
