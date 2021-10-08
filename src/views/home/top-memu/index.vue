<template>
  <div class="top-memu">
    <div class="left">我的笔记本</div>
    <div class="tabs">
      <!-- <div style="margin-bottom: 20px">
        <el-button size="small" @click="addTab(editableTabsValue)">
          add tab
        </el-button>
      </div> -->
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        @tab-remove="removeTab"
        @tab-click="onTabPane"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right">搜索</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
    // 点击tabs触发
    onTabPane(data) {
      this.$emit('changePage', data.name)
    }
  },
};
</script>
<style lang="less" scoped>
.top-memu {
  display: flex;
  height: 40px;
  line-height: 40px;
  justify-content: flex-start;
  padding: 12px;
  padding-bottom: 0;
  & > div {
    flex: 1;
  }
  .tabs {
    flex: 4;
  }
}
</style>