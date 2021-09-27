<template>
    <footer>
        <div class="container">
            <div class="col-md-4">
                <TextWidget  title="Our Doord Are Always Open" :content="clientInfo.contactBrief"/>
            </div>
            <!-- /.col-md-4 -->
        </div>
    </footer>
</template>

<script>
import TextWidget from "@/components/shared/text-widget.vue"
export default {
    name: "Footer",
    components: {
        TextWidget
    },

    props: { 
        clientInfo: {}
        },

        created(){
            console.log(this.clientInfo)
        }
}
</script>