<template>
    <div>
        <div class="inputToDo">
            <svg @click="isActive = !isActive" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>
        </div> 
        <div :class="{isActive: isActive}">
            <div class="modal-backdrop">
                <div @keyup.enter="addToDo" class="modal">
                    <h3>Title</h3>
                    <input  @keyup.escape="abortToDo()" type="text" placeholder="Title" v-model="task.title" maxlength="60">
                    <h3>Description</h3>
                    <textarea v-if="task.type=='task'" name="description" id="" cols="30" rows="10" v-model="task.description"></textarea>
                    <select name="" id="" v-model="task.type">
                        <option default value="event">event</option>
                        <option value="task">task</option>
                        <option value="thought">thought</option>
                    </select>
                    <br>
                    <button @click="addToDo">confirm task</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            isActive: true,
            task: {
                title: '',
                description: '',
                type:'',
                editing:false,
            },
        }
    },
    computed : mapGetters(['listToDo']),
    methods: {
        addToDo(){
            if(this.task.title == 0){
                return
            } else {
                this.listToDo.push(this.task)
                this.task = {title: '', description: '', type:'event',editing:false};
                this.isActive = !this.isActive;
            }
        },
        abortToDo(){
            this.isActive = !this.isActive
            this.task.title = '';
        }
    }
}
</script>

<style scoped>
    .isActive{
        display: none;
    }
    .inputToDo{
        margin: 5%;
    }
    .inputToDo :hover {
        cursor: pointer;
    }
    .modal-backdrop {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    }
     .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 10px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding: 2% 2%;
    border-radius: 10px;
    }
    svg {
        background-color: #1778FA;
        border-radius: 50%;
        padding: 10px;
    }
</style>

