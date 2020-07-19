<template>
    <div>
        <div class="inputToDo">
            <button @click="isActive = !isActive">add task</button>
        </div> 
        <div :class="{isActive: isActive}">
            <div class="modal-backdrop">
                <div class="modal">
                    <h3>Title</h3>
                    <input type="text" placeholder="Title" v-model="task.title">
                    <h3>Description</h3>
                    <textarea name="description" id="" cols="30" rows="10" v-model="task.description"></textarea>
                    <h3>Select importance</h3>
                    <select name="" id="" v-model="task.importance">
                        <option value="Priority">Priority</option>
                        <option value="Normal">Normal</option>
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
                importance:'',
            },
        }
    },
    computed : mapGetters(['listToDo']),
    methods: {
        addToDo(){
            this.listToDo.push(this.task);
            this.task = {title: '', description: '', importance:''};
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style scoped>
    .isActive{
        display: none;
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
</style>