// import showlist from './showList';
import addToDo from './addToDo'
import home from './home'

export const routes = [
    { path:'/add-to-do', component: addToDo},
    { path:'/', component: home},
];