// taskResolver.js
let tasks = [
    {
    id: '1',
    title: 'Développement Front-end pour Site E-commerce',
    description: 'Créer une interface utilisateur réactive en utilisant React et Redux pour un site e-commerce.',
    completed: false,
    duration:1
    },
    {
    id: '2',
    title: 'Développement Back-end pour Authentification Utilisateur',
    description: "Implémenter un système d'authentification et d'autorisation pour une application web en utilisant Node.js, Express, et Passport.js",
    completed: false,
    duration:2
    },
    {
    id: '3',
    title: 'Tests et Assurance Qualité pour Application Web',
    description: 'Développer et exécuter des plans de test et des cas de test complets.',
    completed: false,
    duration:3
    },
    ];
    const taskResolver = {
    Query: {
    task: (_, { id }) => tasks.find(task => task.id === id),
    tasks: () => tasks,
    },
    Mutation: {
    addTask: (_, { title, description, completed,duration }) => {
    const task = {
    id: String(tasks.length + 1),
    title,
    description,
    completed,
    duration,
    };
    tasks.push(task);
    return task;
    },
    completeTask: (_, { id }) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
    tasks[taskIndex].completed = true;
    return tasks[taskIndex];
    }
    return null;
    },
    
    changeDescription: (_, { id, newDescription }) => {
        const task = tasks.find(task => task.id === id);
        if (!task) {
          throw new Error("Task not found");
        }
        task.description = newDescription;
        return task;
      },
      deleteTask: (_, { id }) => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
          return false; 
        }
        tasks.splice(taskIndex, 1); 
        return true;
      },
    
    },
    };
    module.exports = taskResolver;