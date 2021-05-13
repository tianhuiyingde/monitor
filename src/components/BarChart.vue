<template>
  <div class=“echarts-box”>
      <div id="barChart" :style="{width:'1200px',height:'300px'}"></div>
  </div>
</template>

<script>
  import * as echarts from "echarts";
  import {onMounted,onUnmounted} from "vue";
  export default {
    name: 'BarChart',
    props: {
    msg: Array,
    },
    setup(){
      // let dimensions=['本周已上线', '测试完成待上线', '测试中', '开发中','待排期'];
      // let sourse= [
      //       {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
      //       {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
      //       {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
      //       {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
      //   ];
      let echart=echarts;
      onMounted(() => {
        initChart();
      });
      onUnmounted(() => {
        echart.dispose;
      });

      function initChart(){
        var chartDom=document.getElementById("barChart");
        var myChart=echarts.init(chartDom);
        var option;
        option={
          legend:{},
          tooltip:{},
          dataset: {
            dimensions: ['product', '2015', '2016', '2017'],
            source: [
              {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
              {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
              {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
              {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
            ]
          },
          xAxis:{type:'category'},
          yAxis:{},
          series:[
            {type:'bar'},
            {type:'bar'},
            {type:'bar'}
          ]
        };
        
        option&&myChart.setOption(option);

      }
      return{initChart};
    },
  };
</script>
<style scoped>
</style>