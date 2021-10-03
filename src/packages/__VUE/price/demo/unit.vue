<template>
  <div class="demo-space">
    <miner-price :price="1010" :need-symbol="false" :thousands="true" unit="FIL/2TiB" />

    <miner-price :price="1010" :decimal-digits="0" :need-symbol="false" :thousands="true" unit="FIL" />
  </div>
</template>
