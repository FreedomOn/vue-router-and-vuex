<template>
    <div class="outer-container">
     <div class="inner-container">
        <div class="content">
            <p>11</p>
             <p>11</p>
              <p>11</p>
               <p>11</p>
                <p>11</p>
                 <p>11</p>
                  <p>11</p>
                   <p>11</p>
                    <p>11</p>
                     <p>11</p>
                      <p>11</p>
                       <p>11</p>
                        <p>11</p>
        </div>
     </div>
 </div>
</template>
<style  scoped>
.outer-container,.content {
    width: 200px; height: 200px;
    border: 1px solid red;
}
.outer-container {
    position: relative;
    overflow: hidden;
}
.inner-container {
    position: absolute; left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
}

 /* for Chrome */
.inner-container::-webkit-scrollbar {
    display: none;
}
</style>
