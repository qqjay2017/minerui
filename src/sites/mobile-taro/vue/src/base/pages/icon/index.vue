<template>
  <div class="demo">
    <h2>基础用法</h2>
    <miner-cell>
      <miner-icon name="dongdong"></miner-icon>
      <miner-icon name="JD"></miner-icon>
    </miner-cell>
    <h2>图片链接</h2>
    <miner-cell>
      <miner-icon
        size="40"
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      >
      </miner-icon>
    </miner-cell>
    <h2>图标颜色</h2>
    <miner-cell>
      <miner-icon name="dongdong" color="#fa2c19"></miner-icon>
      <miner-icon name="dongdong" color="#64b578"></miner-icon>
      <miner-icon name="JD" color="#fa2c19"></miner-icon>
    </miner-cell>

    <h2>图标大小</h2>
    <miner-cell>
      <miner-icon name="dongdong"></miner-icon>
      <miner-icon name="dongdong" size="24"></miner-icon>
      <miner-icon name="dongdong" size="26"></miner-icon>
    </miner-cell>

    <miner-cell-group v-for="item in icons.data" :title="item.name">
      <miner-cell>
        <ul>
          <li v-for="item in item.icons" :key="item">
            <miner-icon :name="item"></miner-icon>
            <span>{{ item }}</span>
          </li>
        </ul>
      </miner-cell>
    </miner-cell-group>
  </div>
</template>

<script lang="ts">
import icons from './../../../../../../../packages/styles/font/config.json';
export default {
  props: {},
  setup() {
    return { icons };
  }
};
</script>

<style lang="scss">
.miner-cell {
  > .minerui-iconfont {
    margin-right: 10px;
  }
}
ul {
  display: flex;
  flex-wrap: wrap;
  li {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      height: 40px;
      font-size: 12px;
      text-align: center;
    }
    .minerui-iconfont {
      margin: 16px 0 16px;
    }
  }
}
</style>
