<template>
    <div>
        <h6 v-if="title">{{title}}</h6>
        <p>
            {{content}}
        </p>
    </div>
</template>

<script>
export default {
    name: "TextWidget",
    props: {
        title: String,
        content: String
    }
}
</script>