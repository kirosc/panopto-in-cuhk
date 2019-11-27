<template>
    <div class="pie">
        <div v-bind:id="id"></div>
    </div>
</template>

<script>
    const uuid = require('uuid/v4');

    export default {
        name: 'pie',
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
                this.chart = new CanvasJS.Chart(this.id, {
                    animationEnabled: false,
                    theme: "dark2",
                    backgroundColor: "rgba(255,255,255,0.0)",
                    title: {
                        text: this.data.title,
                        fontFamily: "Noto Sans TC"
                    },
                    legend: {
                        fontFamily: "Noto Sans TC",
                        fontWeight: "lighter"
                    },
                    data: [{
                        type: "pie",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}%",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabelFontFamily: "Noto Sans TC",
                        indexLabelFontWeight: "normal",
                        indexLabel: "{label} - {y}%",
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
    .pie > div {
    height: 370px;
    margin: 4rem auto;
    width: 60%;
    }

    @media screen and (max-width: 768px) {
        .pie > div {
            width: 100%;
        }
    }
</style>
