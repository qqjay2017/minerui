<template>
  <div class="demo bg-w">
    <h2>基础用法</h2>
    <miner-uploader :url="uploadUrl" @start="start"></miner-uploader>
    <h2>自定义上传样式</h2>
    <miner-uploader :url="uploadUrl">
      <miner-button type="primary" icon="uploader">上传文件</miner-button>
    </miner-uploader>
    <h2>直接调起摄像头（移动端生效）</h2>
    <miner-uploader capture></miner-uploader>
    <h2>上传状态</h2>
    <miner-uploader :url="uploadUrl" multiple @delete="onDelete"></miner-uploader>
    <h2>限制上传数量5个</h2>
    <miner-uploader :url="uploadUrl" multiple maximum="5"></miner-uploader>
    <h2>限制上传大小（每个文件最大不超过 50kb）</h2>
    <miner-uploader
      :url="uploadUrl"
      multiple
      :maximize="1024 * 50"
      @oversize="onOversize"
    ></miner-uploader>
    <h2>限制上传大小（在beforeupload钩子中处理）</h2>
    <miner-uploader
      :url="uploadUrl"
      multiple
      :before-upload="beforeUpload"
      :maximize="1024 * 50"
      @oversize="onOversize"
    >
    </miner-uploader>
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
import { createComponent } from '../../utils/create';
import { FileItem } from './index.vue';
const { createDemo } = createComponent('uploader');
export default createDemo({
  setup() {
    const uploadUrl =
      'https://my-json-server.typicode.com/linrufeng/demo/posts';
    const formData = {
      custom: 'test'
    };
    const fileToDataURL = (file: Blob): Promise<any> => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = (e) => resolve((e.target as FileReader).result);
        reader.readAsDataURL(file);
      });
    };
    const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = dataURL;
      });
    };
    const canvastoFile = (
      canvas: HTMLCanvasElement,
      type: string,
      quality: number
    ): Promise<Blob | null> => {
      return new Promise((resolve) =>
        canvas.toBlob((blob) => resolve(blob), type, quality)
      );
    };
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };
    const onDelete = (file: FileItem, fileList: FileItem[]) => {
      console.log('delete 事件触发', file, fileList);
    };
    const beforeUpload = async (file: File[]) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      const base64 = await fileToDataURL(file[0]);
      const img = await dataURLToImage(base64);
      canvas.width = img.width;
      canvas.height = img.height;

      context.clearRect(0, 0, img.width, img.height);
      context.drawImage(img, 0, 0, img.width, img.height);

      let blob = (await canvastoFile(canvas, 'image/jpeg', 0.5)) as Blob; //quality:0.5可根据实际情况计算
      const f = await new File([blob], file[0].name);
      return [f];
    };
    return {
      onOversize,
      beforeUpload,
      onDelete,
      uploadUrl,
      formData
    };
  }
});
</script>

<style lang="scss" scoped></style>
