<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script setup>
import { URI } from './services/services/conection';
import { fetchService } from './services/services/fetchService';
import { useCartStore } from './stores/cart';
import { onMounted,onUnmounted } from 'vue';
const cart = useCartStore()





 const fetchSiteStatus = async () => {
    if (cart.user?.site?.site_id ) {
      cart.site_status = await fetchService.get(`${URI}/site/${cart.user.site.site_id}/status`);
    }
  };

  // Configura el intervalo para llamarla cada 30 segundos
  let intervalId = 0


 onMounted(() => {

    fetchSiteStatus();
    setInterval(fetchSiteStatus, 30000);
  
});


onUnmounted(() => {
    clearInterval(intervalId);
  });



</script>