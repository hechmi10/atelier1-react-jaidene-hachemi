import { useState } from "react";
import PropTypes from "prop-types";

function TodoList(props) {
    const { initialTasks } = props;

    // State pour gérer les tâches
    const [tasks, setTasks] = useState(initialTasks);
    // State pour gérer la recherche
    const [searchTerm, setSearchTerm] = useState("");

    // Ajouter une nouvelle tâche
    const addTask = (name, priority) => {
        const newTask = { id: Date.now(), name, priority, completed: false };
        setTasks([...tasks, newTask]);
    };

    // Marquer une tâche comme terminée
    const toggleTaskCompletion = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Filtrer les tâches en fonction du terme de recherche
    const filteredTasks = tasks.filter((task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculer le nombre total de tâches et le nombre de tâches terminées
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        <div>
            <h1>Todo List</h1>

            {/* Formulaire pour ajouter une nouvelle tâche */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const name = e.target.taskName.value;
                    const priority = e.target.priority.value;
                    if (name.trim() === "") return; // Ne pas ajouter de tâche vide
                    addTask(name, priority);
                    e.target.reset(); // Réinitialiser le formulaire
                }}
            >
                <input
                    type="text"
                    name="taskName"
                    placeholder="Nom de la tâche"
                    required
                />
                <select name="priority">
                    <option value="Haute">Haute</option>
                    <option value="Moyenne">Moyenne</option>
                    <option value="Basse">Basse</option>
                </select>
                <button type="submit">Ajouter</button>
            </form>

            {/* Rechercher une tâche */}
            <input
                type="text"
                placeholder="Rechercher une tâche..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Afficher les tâches filtrées */}
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <span
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                                color: task.completed ? "gray" : "black",
                            }}
                        >
                            {task.name} (Priorité: {task.priority})
                        </span>
                        <button onClick={() => toggleTaskCompletion(task.id)}>
                            {task.completed ? "Annuler" : "Terminer"}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Afficher le nombre total de tâches et le nombre de tâches terminées */}
            <p>Total des tâches: {totalTasks}</p>
            <p>Tâches terminées: {completedTasks}</p>
        </div>
    );
}

// Validation des props
TodoList.propTypes = {
    initialTasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default TodoList;