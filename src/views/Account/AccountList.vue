<template>
  <div>
    <el-table :data="accounts" border style="width: 100%">
      <el-table-column prop="user" label="账户标识">
        <template #default="scope">
          {{ scope.row.user || '未提供' }}{{ scope.row.name ? '(' + scope.row.name + ')' : '' }}
        </template>
      </el-table-column>
      <el-table-column prop="type" label="账户类型" />
      <el-table-column prop="sn" label="账户序号" />
      <el-table-column fixed="right" label="操作" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from '/@/store/index'

export default defineComponent({
  name: 'AccountList',
  setup() {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('account/list')
    })
    const handleClick = (row: any) => {
      console.log(row)
    }
    const accounts = computed(() => store.state.account.accounts)
    return {
      accounts,
      handleClick
    }
  }
})
</script>
