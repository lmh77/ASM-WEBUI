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
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)">变更配置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      v-if="dialogVisible"
      v-model="dialogVisible"
      :title="
        '配置[' +
        (currentRow.user || '未提供') +
        (currentRow.name ? `(${currentRow.name})` : '') +
        '-' +
        currentRow.type +
        ']'
      "
      width="50%"
      :before-close="handleClose"
    >
      <CodeEditor
        v-model="jsonData"
        lang="json"
        theme="monokai"
        @init="codeEditorInit"
      ></CodeEditor>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateConfig">更 新</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, reactive } from 'vue'
import { useStore } from '/@/store/index'
import CodeEditor from '/@/components/CodeEditor/index.vue'
import 'brace/theme/monokai'
import 'brace/mode/json'

export default defineComponent({
  name: 'AccountList',
  components: {
    CodeEditor
  },
  setup() {
    const store = useStore()
    onMounted(async () => {
      await store.dispatch('account/list')
    })
    let jsonData = ref('{}')
    let dialogVisible = ref(false)
    let currentRow = ref()

    const accounts = computed(() => store.state.account.accounts)

    const handleClick = (row: any) => {
      currentRow.value = row
      jsonData.value = JSON.stringify(JSON.parse(row.config), null, 2)
      dialogVisible.value = true
    }
    const codeEditorInit = () => {
      //
    }
    const updateConfig = async () => {
      console.log('updateConfig')
      let config = JSON.parse(jsonData.value)
      await store.dispatch('account/update', {
        ...currentRow.value,
        name: config.name || undefined,
        config: JSON.stringify(config)
      })
      dialogVisible.value = false
    }
    const handleClose = () => {
      dialogVisible.value = false
    }
    return {
      dialogVisible,
      accounts,
      currentRow,
      jsonData,
      codeEditorInit,
      handleClose,
      handleClick,
      updateConfig
    }
  }
})
</script>
