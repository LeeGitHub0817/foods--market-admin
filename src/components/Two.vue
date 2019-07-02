<template>
    <div>
        <h1>This is page two!</h1>
        <hr>
        <t-s>
            <h1>这个内容是插槽分发过来的</h1>
            <p>{{ text }}</p>
        </t-s>
    </div>
</template>

<script>
import TestSlot from './TestSlot';
export default {
    data: function(){
        return {
            text: 'hello slot'
        }
    },
    components: {
        't-s': TestSlot
    }
}
</script>

<style scoped>

</style>
