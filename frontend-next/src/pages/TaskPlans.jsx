import { useEffect, useState } from "react";

const TaskPlans = () => {
  const [tasks, setTasks] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  useEffect(() => {
    const fetchAssignments = async (taskId, token) => {
      try {
        const res = await fetch(`http://localhost:8080/assignments/task/${taskId}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (!res.ok) throw new Error("Failed to fetch assignments");
        const data = await res.json();
        setAssignments(prev => ({ ...prev, [taskId]: data }));
      } catch (err) {
        console.error(`Error fetching assignments for task ${taskId}:`, err);
      }
    };

    // Fetch tasks
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:8080/tasks", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
    
        if (!res.ok) throw new Error("Failed to fetch tasks");
    
        const data = await res.json();
        console.log("Fetched tasks:", data); // ✅ Debug output
        setTasks(data);

        // fetch assignments for each task
        data.forEach(task => {
          fetchAssignments(task.id, token);
        });
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    

    // Fetch employees (users with role USER)
    const fetchEmployees = async () => {
      try {
        const res = await fetch("http://localhost:8080/users");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    
        const text = await res.text();
        if (!text) throw new Error("Empty response from /users");
    
        const data = JSON.parse(text);
        const filtered = data.filter(user => user.role === "USER");
        setEmployees(filtered);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchTasks();
    fetchEmployees();

    // Dropdown behavior
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".custom-dropdown")) {
        document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
          dropdown.classList.remove("active");
        });
      }
    });
  }, []);

  const handleCheckboxChange = (employeeId) => {
    setSelectedEmployees((prev) =>
      prev.includes(employeeId)
        ? prev.filter((id) => id !== employeeId)
        : [...prev, employeeId]
    );
  };

  return (
    <div className="container">
      <div className="header">
        <button>Przeglądaj zlecenia</button>
        <button>Generuj raport</button>
        <button>Wyloguj</button>
      </div>

      <div className="info-bar">
        <span>Nazwa/Id/Termin zlecenia</span>
        <span>Data</span>
        <span>Godzina</span>
      </div>

      <div className="task-creation">
        <div className="top-row">
          <div className="form-group">
            <label>Wprowadź nazwę zadania</label>
            <input type="text" className="form-input" />
          </div>

          <div className="form-group">
            <label>Termin wykonania</label>
            <input type="date" className="form-input" />
          </div>
        </div>

        <div className="bottom-row">
          <div className="form-group employee-select">
            <label>Wybierz pracowników</label>
            <div className="custom-dropdown">
              <button className="dropdown-toggle form-input">
                Lista pracowników <span className="arrow">▼</span>
              </button>
              <div className="dropdown-menu">
                {employees.map((employee) => (
                  <label key={employee.id} className="dropdown-item">
                    <input
                      type="checkbox"
                      checked={selectedEmployees.includes(employee.id)}
                      onChange={() => handleCheckboxChange(employee.id)}
                    />
                    {employee.firstName} {employee.lastName}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button className="add-task-button">+</button>
        </div>
      </div>

      <div className="task-panel">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <div className="task-header">
              <div className="task-name">{task.taskName}</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "50%" }} // You can replace this with dynamic progress if available
                ></div>
              </div>
            </div>

            <div className="task-content">
              <details className="employee-list">
                <summary>Lista przydzielonych pracowników</summary>
                <ul className="employee-dropdown">
                  {assignments[task.id]?.map((assignment) => (
                    <li key={assignment.id}>
                      {assignment.user.firstName} {assignment.user.lastName}
                    </li>
                  )) || <li>Brak przypisanych pracowników</li>}
                </ul>
              </details>

              <div className="task-buttons">
                <button>Edycja</button>
                <button>Usuń</button>
                <button>Wstrzymaj</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button>Dodaj zadanie</button>
        <button>Filtruj</button>
      </div>
    </div>
  );
};

export default TaskPlans;
