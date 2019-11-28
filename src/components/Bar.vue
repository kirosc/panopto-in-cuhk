<template>
    <div class="bar">
        <div v-bind:id="id"></div>
    </div>
</template>

<script>
    const uuid = require('uuid/v4');

    export default {
        name: 'bar',
        data() {
            return {}
        },
        beforeCreate() {
            this.id = uuid();
        },
        mounted: function () {
            this.render()
        },
        methods: {
            render: function () {
                this.chart = new CanvasJS.Chart(this.id, {
                    animationEnabled: false,
                    title:{
                        text: this.data.title
                    },
                    axisX:{
                        interval: 1
                    },
                    axisY2:{
                        interlacedColor: "rgba(1,77,101,.2)",
                        gridColor: "rgba(1,77,101,.1)",
                    },
                    data: [{
                        type: "bar",
                        name: "companies",
                        axisYType: "secondary",
                        color: "#014D65",
                        dataPoints: this.data.result
                    }]
                });
                this.chart.render();
            }
        },
        props: ['data']
    }
</script>


<style lang="scss">
    .bar > div {
        height: 370px;
        width: 100%;
    }
</style>
