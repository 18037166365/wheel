<template>
    <div class="layout" :class="{'hasSlider': layoutClass.hasSlider}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'x-layout',
        data() {
            return {
                layoutClass: {
                    hasSlider: false
                }
            }
        },
        mounted () {
            console.log(this.$children)
            this.$children.forEach(item => {
                console.log(item.$options.name)
                if(item.$options.name =='x-sider') {
                    this.layoutClass.hasSlider = true 
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
.layout{
    display: flex;
    flex-direction: column;
    flex-grow: 1; 
    height: 100vh;
    &.hasSlider{
        flex-direction: row;
    }
}
</style>