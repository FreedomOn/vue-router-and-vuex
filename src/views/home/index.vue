<template>
  <div style="margin-top:20px;margin-left:20px;">
    <a-input placeholder="新增todolist" :value=inputValue  @change="inputchange" class="my_ipt" />
     <a-button type="primary" @click="addTodoList">新增事项</a-button>
    <a-list class="dt_list" bordered :data-source="changeListView">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked = "item.done" @change="(ev)=>{
          selectList(ev,item.id)}">{{item.title}}</a-checkbox>
        <a-button type="link" @click="removeList(item.id)">删除</a-button>
      </a-list-item>
      <div slot="footer" class="footer">
        <span>{{unDoneLen}}条剩余</span>
        <a-button-group>
          <a-button @click="changeList('all')" :type="viewkey === 'all' ? 'primary' :'defaault'">全部</a-button>
          <a-button @click="changeList('undone')" :type="viewkey === 'undone' ? 'primary' :'defaault'">未完成</a-button>
          <a-button @click="changeList('done')" :type="viewkey === 'done' ? 'primary' :'defaault'">已完成</a-button>
        </a-button-group>
        <a-button type="link" @click="clear">清除已完成</a-button>
      </div>
    </a-list>
  </div>
</template>
<script>
import { Button } from "ant-design-vue";
import { mapState ,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState(['inputValue','viewkey']),
    ...mapGetters(['unDoneLen','changeListView'])
  },
  data() {
    return {

    };
  },
  created(){
      this.$store.dispatch('getList')
  },
  methods:{
    inputchange(ev){
      // 获取input中最新的值
      console.log(ev.target.value)
      this.$store.commit('setInputValue',ev.target.value)
    },
    addTodoList(){
      if(this.inputValue.trim().length<=0){
          return this.$message.warning('不能输入为空')
      }
      this.$store.commit('addItem')
    },
    removeList(id){
      console.log(id)
      this.$store.commit('removeItem',id)
    },
    // 改变选择框事件
    selectList (ev,id){
      console.log(ev.target.checked)
      console.log(id)
      const param = {
        id:id,
        status:ev.target.checked
      }
      this.$store.commit('changeStatus',param)
    },
    // 清除已完成
    clear(){
        this.$store.commit('clear')
    },
    // 修改页面展示的列表数据
    changeList(key){
      console.log(key)
      this.$store.commit('changeViewKey',key)
    }
  }
};
</script>
<style  scoped>
.my_ipt {
  width: 400px;
  margin-right: 10px;
}
.dt_list {
  width: 500px;
  margin-top: 10px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>