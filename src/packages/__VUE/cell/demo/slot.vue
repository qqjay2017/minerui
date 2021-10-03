<template>
  <div class="demo-space">
    <miner-cell title="我是标题" desc="描述文字">
      <div>自定义内容</div>
    </miner-cell>

    <miner-cell-group title="链接 | 分组用法">
      <miner-cell title="链接" is-link></miner-cell>
      <miner-cell title="URL 跳转" desc="https://jd.com" is-link url="https://jd.com"></miner-cell>
      <miner-cell title="路由跳转 ’/‘ " to="/"></miner-cell>
    </miner-cell-group>

    <miner-cell-group title="自定义右侧箭头区域">
      <miner-cell title="Switch">
        <template v-slot:link>
          <miner-switch v-model="switchChecked" />
        </template>
      </miner-cell>
    </miner-cell-group>

    <miner-cell-group title="自定义左侧 Icon 区域">
      <miner-cell title="图片">
        <template v-slot:icon>
          <img
            class="miner-icon"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          />
        </template>
      </miner-cell>
    </miner-cell-group>
  </div>
</template>
