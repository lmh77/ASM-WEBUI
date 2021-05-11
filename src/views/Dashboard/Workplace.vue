<template>
  <div class="content">
    <a href="https://github.com/lunnlew/AutoSignMachine" class="absolute right-0 top-0 z-10">
      <img
        width="149"
        height="149"
        src="../../assets/images/forkme_right_red_aa0000.png"
        class="attachment-full size-full"
        alt="Fork me on GitHub"
        data-recalc-dims="1"
      />
    </a>
    <el-card class="mb-2" shadow="hover">
      <div class="py-4 font-bold">工作台</div>
      <el-row>
        <el-col :xs="24" :md="16">
          <div class="flex items-center">
            <div class="pr-4 flex items-center">
              <el-avatar
                class="w-16 h-16"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              />
            </div>
            <div>
              <div class="text-xl">你好，{{ user.name }} ，祝你开心每一天！</div>
              <div class="text-sm text-gray-400 pt-2">应用签到管理平台</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :md="8">
          <div class="flex items-center flex-row-reverse">
            <div class="px-1 text-center">
              <div class="text-sm text-gray-400 pb-2">访问量</div>
              <div class="text-xl">3,344</div>
            </div>
            <el-divider direction="vertical" class="h-8" />
            <div class="px-1 text-center">
              <div class="text-sm text-gray-400 pb-2">排名</div>
              <div class="text-xl">1/100</div>
            </div>
            <el-divider direction="vertical" class="h-8" />
            <div class="px-1 text-center">
              <div class="text-sm text-gray-400 pb-2">项目数量</div>
              <div class="text-xl">100</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from '/@/store/index'

export default defineComponent({
  name: 'Workplace',
  components: {},
  setup() {
    const store = useStore()

    return {
      user: store.state.layout.userInfo
    }
  }
})
</script>
