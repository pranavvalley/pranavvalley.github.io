<template>
    <div id="out">
        <div id="brand">
            <h1>Pranavvalley</h1>
        </div>
        <div id="options">
            <a href="">Home</a>
            <a href="">Our Work</a>
        </div>
    </div>
</template>


<style scoped>
*{
transition: 250ms ease-in-out;
color: var(--accent);
}

a{
padding: 1%;
font-size: large;
text-decoration: none;
font-weight: bolder;
}

a:hover{

background: rgba(255, 255, 255, 0.123);

}



#out{
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
}

#brand{
width: 50%;
}
#options{

width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;
gap:3%
}

@media  screen and (orientation:portrait) {
  .button{
    padding:2%;
  }
  h1{
    font-size: 2.5em;
  }
  #options{
    visibility: hidden;
  }
}
</style>