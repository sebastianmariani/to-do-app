// import showlist from './showList';
import endDay from './endDay';
import addToDo from './addToDo'
import reviewTasks from './reviewtasks'

export const routes = [
    { path:'/end-day', component: endDay},
    { path:'/', component: addToDo},
    { path:'/review-tasks', component: reviewTasks},
];