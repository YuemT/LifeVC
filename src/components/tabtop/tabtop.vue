<template>
    <div class="tabtop">
      <ul>
        <li>
          <tabtopcontent></tabtopcontent>
        </li>
        <li>
          <tabtopcontent></tabtopcontent>
        </li>
        <li>
          <tabtopcontent></tabtopcontent>
        </li>
        <li>
          <tabtopcontent></tabtopcontent>
        </li>
        <li>
          <tabtopcontent></tabtopcontent>
        </li>
        <li>
          <tabtopcontent></tabtopcontent>
        </li>
        <li>
          <tabtopcontent></tabtopcontent>
        </li>
        <li>
          <tabtopcontent></tabtopcontent>
        </li>
        <li>
          <tabtopcontent></tabtopcontent>
        </li>
      </ul>
    </div>
</template>

<script>
    import tabtopcontent from '../tabtopcontent/tabtopcontent.vue'

    export default{
      components:{
        tabtopcontent
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tabtop
    width 100%
    height 369px
    background-color white
    margin-top 7px
    overflow hidden
    li
      width 25%
      float left

</style>
