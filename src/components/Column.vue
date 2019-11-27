<template>
    <div class="column">
        <div v-bind:id="id"></div>
    </div>
</template>

<script>
    const uuid = require('uuid/v4');

    export default {
        name: 'column',
        data() {
            return {}
        },
        beforeCreate() {
            this.id = uuid();
        },
        mounted: function () {
            this.renderPie()
        },
        methods: {
            renderPie: function () {
                let legendText = this.data.legendText || "1分為完全不同意，7分為完全同意";
                this.chart = new CanvasJS.Chart(this.id, {
                    animationEnabled: false,
                    theme: "dark2",
                    backgroundColor: "rgba(142,141,149,0.7)",
                    title: {
                        text: this.data.title,
                        fontFamily: "Noto Sans TC"
                    },
                    legend: {
                        fontFamily: "Noto Sans TC"
                    },
                    data: [{
                        type: "column",
                        indexLabel: "{y}",
                        showInLegend: true,
                        legendMarkerColor: "grey",
                        legendText,
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
    .column {
        margin: 4rem auto;
        width: 60%;
    }

    @media screen and (max-width: 768px) {
        .column {
            margin: 4rem auto;
            width: 80%;
        }
    }

    @media screen and (max-width: 600px) {
        .column {
            margin: 4rem auto;
            width: 100%;
        }
    }

    .column > div {
        height: 370px;
        width: 100%;
    }
</style>
