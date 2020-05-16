<template>
  <div class="hero">
    <h1>{{ headline }}</h1>
  </div>
</template>

<script>
import { mapVariables } from '@variate/vue';

export default {
  computed: {
    ...mapVariables({
      headline: 'Default'
    })
  }
}
</script>
