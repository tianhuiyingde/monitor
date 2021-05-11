<template>
  <div class="echarts-box">
    <div id="main" :style="{ width: '300px', height: '400px' }"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
//https://v3.cn.vuejs.org/api/composition-api.html#setup
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "BorderRadius",
  props: {
    msg: Array,
  },
  setup() {
    let data = ref([
      { value: 1048, name: "搜索引擎" },
      { value: 735, name: "直接访问" },
      { value: 580, name: "邮件营销" },
      { value: 484, name: "联盟广告" },
      { value: 300, name: "视频广告" },
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
      console.log(data.value, "--1--");
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
      window.onresize = function () {
        //自适应大小
        myChart.resize();
      };
    }
    return { initChart };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
