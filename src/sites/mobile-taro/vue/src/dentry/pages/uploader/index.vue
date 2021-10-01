<template>
  <div class="demo bg-w">
    <h2>基础用法</h2>
    <miner-uploader :url="uploadUrl" @start="start"></miner-uploader>
    <h2>自定义上传样式</h2>
    <miner-uploader :url="uploadUrl">
      <miner-button type="primary" icon="uploader">上传文件</miner-button>
    </miner-uploader>
    <!-- 
      album 从相册选图
      camera 使用相机
      user 使用前置摄像头(仅H5纯浏览器使用)
      environment 使用后置摄像头(仅H5纯浏览器)
      -->
    <h2>直接调起摄像头 camera </h2>
    <miner-uploader :source-type="['camera']"></miner-uploader>
    <h2>上传状态</h2>
    <miner-uploader :url="uploadUrl" @delete="onDelete"></miner-uploader>
    <h2>限制上传数量5个</h2>
    <miner-uploader :url="uploadUrl" maximum="5"></miner-uploader>
    <h2>限制上传大小（每个文件最大不超过 50kb）</h2>
    <miner-uploader
      :url="uploadUrl"
      :maximize="1024 * 50"
      @oversize="onOversize"
    ></miner-uploader>
    <h2>自定义数据 FormData 、 headers </h2>
    <miner-uploader
      :url="uploadUrl"
      :data="formData"
      :headers="formData"
      :with-credentials="true"
    ></miner-uploader>
    <h2>禁用状态</h2>
    <miner-uploader disabled></miner-uploader>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const uploadUrl =
      'https://my-json-server.typicode.com/linrufeng/demo/posts';
    const formData = {
      custom: 'test'
    };
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };
    const onDelete = (file: any, fileList: any[]) => {
      console.log('delete 事件触发', file, fileList);
    };

    return {
      onOversize,
      onDelete,
      uploadUrl,
      formData
    };
  }
};
</script>

<style lang="scss" scoped></style>
