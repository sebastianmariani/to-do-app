<template>
    <div>
        <div class="modal-backdrop">
                <div class="modal" v-if="questionary == false">
                    <p>How productive you felt?</p>
                    <p>{{productiveLevel}}</p>
                    <div id="productivity">
                        <div @click="productiveLevel = 'low'">
                            <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9142 0L16.7517 13.8656H0.310596L12.6458 26.2007L10.0805 41.0791L23.4118 33.9008L36.27 41.1013L33.1856 26.1936L45 13.8656H29.0766L22.9142 0ZM22.9142 1.23111L28.7517 14.3656H43.8283L32.6656 26.1936C32.5745 26.0983 33.1856 28 32.5 28.3722C31.9726 28.3722 32.4429 28.7542 32 28.6066C31.2768 28.3655 32.5985 28.5284 32 28.6066L31 28.3722C30.4399 28.4453 30.5254 28.68 30 28.7943L28.3741 28.3722C27.8002 28.4967 27.5544 27.9446 27 28C22.9975 28.4003 26.9173 29.0032 23 28C21.1394 27.5235 18.6206 27.0891 16.7517 27.1013C14.9954 27.1128 14.8571 25.5088 13.1825 26.0304C13.0667 26.0664 7.55633 20.2485 7.49503 20.3429L1.5177 14.3656H17.0766L22.9142 1.23111ZM16.7517 27.1013L13.1825 26.0304L10.7478 40.152L23.4165 33.3303L35.5583 40.1298L33.1856 28.3722L33 28.5C33.4465 28.6488 32.5416 28.4772 33 28.5C32.5131 28.3377 33.5225 28.4166 32.883 28.5C32.3669 28.5673 33.5334 28.384 33 28.5C33.6179 28.4382 32.428 28.6241 33 28.5C28.846 28.9154 30.9908 29.022 27 28C25.2605 27.5545 24.8338 27.988 23 28C21.3862 28.0105 18.2722 26.6412 16.7517 27.1013Z" fill="#FFC914"/>
                                <path d="M33 28.5C33.4465 28.6488 32.5416 28.4772 33 28.5C32.5131 28.3377 33.5225 28.4166 32.883 28.5C32.3669 28.5673 33.5334 28.384 33 28.5C32.428 28.6241 33.6179 28.4382 33 28.5C28.846 28.9154 30.9908 29.022 27 28C25.2605 27.5545 24.8338 27.988 23 28C21.3862 28.0105 18.2722 26.6412 16.7517 27.1013L13.1825 26.0304L10.7478 40.152L23.4165 33.3303L35.5583 40.1298L33.1856 28.3722L33 28.5Z" fill="#FFC914"/>
                            </svg>
                        </div>
                        <div @click="productiveLevel = 'medium'">
                            <svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 0.384399L16.8376 14.25H0.396484L12.7317 26.5851L10.1664 41.4635L23.4977 34.2852L36.3558 41.4857L33.2715 26.578L45.0859 14.25H29.1625L23 0.384399ZM23 1.61551L28.8376 14.75H43.9142L37.6879 21.247C37.5968 21.1516 37.4684 21.0922 37.3262 21.0922C36.7988 21.0922 36.2497 21.0444 35.8068 20.8968C35.0836 20.6557 34.387 20.7467 33.7885 20.8249L33.752 20.8297C33.1919 20.9027 32.6427 21.0223 32.1173 21.1366L31.9832 21.1657C31.4093 21.2902 30.861 21.4042 30.3066 21.4597C26.3041 21.8599 22.2303 21.3249 18.3129 20.3217C16.4523 19.8452 14.6745 19.7534 12.8056 19.7656C11.0493 19.7771 9.52596 20.001 7.85135 20.5226C7.73554 20.5586 7.64222 20.6329 7.58092 20.7273L1.60359 14.75H17.1625L23 1.61551ZM8.28816 21.4345L13.2684 26.4148L10.8337 40.5364L23.5024 33.7147L35.6442 40.5142L32.7286 26.4219L36.8879 22.0817C36.4295 22.0589 35.9371 21.9943 35.4905 21.8454C35.0037 21.6832 34.5209 21.7379 33.8814 21.8213C33.3652 21.8886 32.8562 21.9993 32.3228 22.1153L32.1952 22.143C31.6233 22.2671 31.0239 22.3929 30.4061 22.4547C26.2521 22.8701 22.0556 22.3125 18.0649 21.2904C16.3253 20.845 14.6459 20.7536 12.8121 20.7656C11.1983 20.7762 9.80864 20.9744 8.28816 21.4345Z" fill="#FFC914"/>
                                <path d="M36.8879 22.0817C36.4295 22.0589 35.9371 21.9943 35.4905 21.8454C35.0037 21.6832 34.5209 21.7379 33.8814 21.8213C33.3652 21.8886 32.8562 21.9993 32.3228 22.1153L32.1952 22.143C31.6233 22.2671 31.0239 22.3929 30.4061 22.4547C26.2521 22.8701 22.0556 22.3125 18.0649 21.2904C16.3253 20.845 14.6459 20.7536 12.8121 20.7656C11.1983 20.7762 9.80864 20.9744 8.28816 21.4345L13.2684 26.4148L10.8337 40.5364L23.5024 33.7147L35.6442 40.5142L32.7286 26.4219L36.8879 22.0817Z" fill="#FFC914"/>
                            </svg>
                        </div>
                        <div @click="productiveLevel = 'high'">
                            <svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 1L29 14.5H44.5L33 26.5L36 41L23.5 34L10.5 41L13 26.5L1 14.5H17L23 1Z" fill="#FFC914" stroke="#FFC914" stroke-width="0.5"/>
                            </svg>
                        </div>
                    </div>
                    <div id="controls">
                        <button><router-link to="/"></router-link>Go Back</button>
                        <button @click="questionary = !questionary">Next</button>
                    </div>
                </div>
                <div class="modal" v-if="questionary == true">
                    <p>Why you felt {{productiveLevel}} productivity?</p>
                    <textarea name="explanation" id="" cols="30" rows="10"></textarea>
                    <p>What would you do differently?</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <router-link to="/review-tasks"><button>submit</button></router-link>
                </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            productiveLevel: '',
            questionary: false,
        }
    },
    computed: mapGetters(['listToDo']),
}
</script>

<style scoped>
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
    width: 30%;
    height: auto;
    text-align: center;
    }
    #productivity{
        display: flex;
        justify-content: space-around;
        margin-top: 5%;
    }
    button {
        outline: none;
        border: none;
        background-color: #1778FA;
        color: #FFFFFF;
        border-radius: 5px;
        padding: 2%;
        margin-top: 10%;
        width: 30%;
    }
    #controls{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
</style>