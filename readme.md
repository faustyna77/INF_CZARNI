# Zakład pogrzebowy

## Baza danych

Schemat bazy danych znajduje się tutaj:  
![Schemat ERD](readme/erd.png)

```
INF_CZARNI
├─ .mvn
│  └─ wrapper
│     └─ maven-wrapper.properties
├─ database.sql
├─ frontend-next
│  ├─ app@0.0.0
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  └─ NotFound.jsx
│  │  ├─ hooks
│  │  │  └─ useClientData.jsx
│  │  ├─ index.css
│  │  ├─ layouts
│  │  │  └─ RootLayout.jsx
│  │  ├─ main.jsx
│  │  ├─ Navigation.jsx
│  │  ├─ pages
│  │  │  ├─ AddUser.jsx
│  │  │  ├─ admin-panel
│  │  │  │  ├─ Admin.jsx
│  │  │  │  ├─ AdminLayout.jsx
│  │  │  │  └─ UserManagement.jsx
│  │  │  ├─ App.jsx
│  │  │  ├─ ClientForm.jsx
│  │  │  ├─ ClientInfo.jsx
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ Log.jsx
│  │  │  ├─ MainPanel.jsx
│  │  │  ├─ Navigation.jsx
│  │  │  ├─ Profile.jsx
│  │  │  ├─ Raports.jsx
│  │  │  ├─ Recepcionist.jsx
│  │  │  ├─ TaskPlans.jsx
│  │  │  └─ UpdateUser.jsx
│  │  ├─ Profile.jsx
│  │  ├─ Raports.css
│  │  ├─ Recepcionist.jsx
│  │  ├─ styles
│  │  │  ├─ App.css
│  │  │  ├─ index.css
│  │  │  └─ styles.css
│  │  └─ TaskPlans.css
│  └─ vite.config.js
├─ GUI_realizacja_nowego_zlecenia.simp.bak
├─ mvnw
├─ mvnw.cmd
├─ pom.xml
├─ readme
│  └─ erd.png
├─ readme.md
├─ sample_sql_tmp.sql
└─ src
   ├─ main
   │  ├─ java
   │  │  ├─ db
   │  │  │  └─ SeedDB.java
   │  │  └─ zaklad
   │  │     └─ pogrzebowy
   │  │        └─ api
   │  │           ├─ config
   │  │           │  └─ WebConfig.java
   │  │           ├─ controllers
   │  │           │  ├─ AuthController.java
   │  │           │  ├─ ClientController.java
   │  │           │  ├─ OrderController.java
   │  │           │  ├─ ReportController.java
   │  │           │  ├─ TaskAssignmentController.java
   │  │           │  ├─ TaskController.java
   │  │           │  └─ UserController.java
   │  │           ├─ models
   │  │           │  ├─ Client.java
   │  │           │  ├─ Order.java
   │  │           │  ├─ Report.java
   │  │           │  ├─ Task.java
   │  │           │  ├─ TaskAssignment.java
   │  │           │  └─ User.java
   │  │           ├─ PogrzebowyApplication.java
   │  │           ├─ repositories
   │  │           │  ├─ ClientRepository.java
   │  │           │  ├─ OrderRepository.java
   │  │           │  ├─ ReportRepository.java
   │  │           │  ├─ TaskAssignmentRepository.java
   │  │           │  ├─ TaskRepository.java
   │  │           │  └─ UserRepository.java
   │  │           ├─ security
   │  │           │  ├─ JwtUtil.java
   │  │           │  └─ SecurityConfig.java
   │  │           └─ services
   │  │              ├─ ClientService.java
   │  │              ├─ IClientService.java
   │  │              ├─ IOrderService.java
   │  │              ├─ IReportService.java
   │  │              ├─ ITaskAssignmentService.java
   │  │              ├─ ITaskService.java
   │  │              ├─ IUserService.java
   │  │              ├─ OrderService.java
   │  │              ├─ ReportService.java
   │  │              ├─ TaskAssignmentService.java
   │  │              ├─ TaskService.java
   │  │              └─ UserService.java
   │  └─ resources
   │     ├─ application.properties
   │     └─ DB.sql
   └─ test
      └─ java
         └─ zaklad
            └─ pogrzebowy
               └─ PogrzebowyApplicationTests.java

```
