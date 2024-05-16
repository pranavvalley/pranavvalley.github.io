<script setup>
import { ref } from 'vue';
import Mynav from './components/mydearnavbar.vue'
let socials = ref()
function loadsocials(){
    socials.value.hidden = false
}

function unloadsocials(){
    socials.value.hidden = true
}

</script>


<template>
<div id="bodi">
    <div id="innerbody">
        <Mynav style="height: 10%;" />
        <div id="content">  
            <h1>Elevate Your Digital Presence</h1>
            <p style="color:var(--accent)">From sleek website overhauls to intuitive app interfaces, we specialize in elevating digital landscapes. Our process is driven by innovation, creativity, and a dedication to excellence. We understand that your online presence is more than just pixels on a screen – it's your brand's identity in the digital world.</p>
            <a  href="mailto:pranav1038@outlook.com" class="button">Contact us</a> 
        </div>
    </div>
</div>
</template>


<style scoped>
h1{
color:var(--heavyaccent);
font-size:5em;
}

@keyframes bringupdialog {
    0%{scale: 1.5;opacity: 0;}
    30%{opacity: 1;}
    100% {scale: 1;opacity: 1;}
}

#socc{
    background: var(--accent);
    height: 50vh;
    width: 50vw;
    position: absolute;
    animation: bringupdialog 500ms ease-out;
}


#content{
display:flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
height: 90%;
}

.button{
border: none;
outline: none;
transition:250ms;
color:var(--bg);
margin-top:1.5%;
background:var(--heavyaccent);
padding: 1%;
font-size: large;
text-decoration: none;
font-weight: bolder;

}

.button:hover{

background:#1e3226;
color:white ;
}


@media  screen and (orientation:portrait) {
  .button{
    padding:2%;
  }
  h1{
    font-size: 3.4em;
    margin-bottom: 2vh;
  }
p{
    font-weight: 300;
    margin-bottom: 2vh;

}

  #options{
    visibility: hidden;
  }
}


</style>