<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: -23.99147, lng: -46.27084 }
</script>

<template>
  <GoogleMap
    api-key="AIzaSyDCq88cj31ZOpUh_KjZdkFgCH8WsqD0vic"
    style="width: 100%; height: 300px; border-radius: 8px; overflow: hidden;"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
