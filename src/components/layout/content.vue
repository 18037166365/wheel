 <template class="layout-wrapper">
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'x-content'
    }
</script>

<style lang="scss" scoped>
.layout-wrapper{
    color:red;
  .content{
    flex-grow: 1;
    margin: 0;
  }
}

</style> 