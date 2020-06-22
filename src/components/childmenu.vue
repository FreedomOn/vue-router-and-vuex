<template>
    <div>
      <template v-for="(child,index) in menuData">
        <el-submenu v-if="child.children.length > 0" :index="child.path">
          <template slot="title">
        
             <!-- <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon> -->
            <span slot="title">{{ child.name }}</span>
          </template>
          <menu-tree :menuData="child.children"></menu-tree>
        </el-submenu>

        <el-menu-item v-else :index="child.path">
            <!-- <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon> -->
          <span slot="title">{{ child.name }}</span>
        </el-menu-item>
      </template>
    </div>
</template>

<script>
export default {
  name: 'menuTree',
  props: ['menuData']
}
</script>

<style scoped>

</style>
