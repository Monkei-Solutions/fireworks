$(function () {
    $('#fw_container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Current Fireworks Activity'
        },
        tooltip: {
    	    pointFormat: '<b>{point.y}</b> ({point.percentage:.2f}%)'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance: 35,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '{point.name}:<br> <b>{point.y}</b> ({point.percentage:.2f}%)'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Fireworks',
            data: [
                ['ARCHIVED', 943],
                ['DEFUSED', 921],
                ['WAITING', 94866],
                ['READY', 25342],
                ['RESERVED', 981],
                ['FIZZLED', 63],
                ['RUNNING', 57],
                ['COMPLETED', 164730]
            ]
        }]
    });

    $('#wf_container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Current Workflow Activity'
        },
        tooltip: {
    	    pointFormat: '<b>{point.y}</b> ({point.percentage:.2f}%)'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance: 35,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '{point.name}:<br> <b>{point.y}</b> ({point.percentage:.2f}%)'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Workflows',
            data: [
                ['ARCHIVED', 303],
                ['DEFUSED', 839],
                ['WAITING', 0],
                ['READY', 25888],
                ['RESERVED', 0],
                ['FIZZLED', 61],
                ['RUNNING', 592],
                ['COMPLETED', 53553]
            ]
        }]
    });
});