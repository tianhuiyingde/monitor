<!--
 * @Author: your name
 * @Date: 2021-05-11 14:22:04
 * @LastEditTime: 2021-05-11 15:40:53
 * @LastEditors: Please set LastEditors
 * @Description: 饼图组件
 * @FilePath: /monitor/src/components/BorderRadius.vue
-->

<template>
  <div class="echarts-box">
    <div id="main" :style="{ width: '300px', height: '400px' }"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "BorderRadius",
  props: {
    msg: Array,
  },

  /**
   * @description: vue3.0的一些需要了解的常识
   * @param //https://v3.cn.vuejs.org/api/composition-api.html#setup
   */
  setup() {

    /**
     * @description: ref vue3.0详解setup中如何使用data,method,watch,computed,生命周期 
     * @param https://www.jianshu.com/p/fb54fcc6a229
     */
    let data = ref([
      // 定义一个响应式数据
      { value: 1048, name: "本周已上线" },
      { value: 735, name: "测试完成待上线" },
      { value: 580, name: "测试中" },
      { value: 484, name: "开发中" },
      { value: 300, name: "待排期" },
    ]);

    let echart = echarts;

    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echart.dispose;
    });

    // 基础配置一下Echarts
    function initChart() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);

      // 把配置和数据放这里
      var option;
      var list = data.value;

      option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: list,
          },
        ],
      };

      option && myChart.setOption(option);

      // 处理点击事件并且弹出数据名称
      myChart.on("click", function (params) {
        alert(params.name);
      });

    }
    return { initChart };
  },
};
</script>

<style scoped>
</style>
