<template>
  <div class="demo-space">
    <miner-price :price="99999999.99999" symbol="$" :decimal-digits="3" :need-symbol="true" :thousands="true" />
    <miner-price :price="99999999.99999" symbol="$" :decimal-digits="5" :need-symbol="true" :thousands="true" />
  </div>
</template>
