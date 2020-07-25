// import showlist from './showList';
import endDay from './endDay';
import addToDo from './addToDo'
import reviewTasks from './reviewtasks'
import home from './home'

export const routes = [
    { path:'/end-day', component: endDay},
    { path:'/add-to-do', component: addToDo},
    { path:'/review-tasks', component: reviewTasks},
    { path:'/', component: home},
];