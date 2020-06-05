(function() {
    window.onload = function() {
        // create an array with nodes
        var nodes = new vis.DataSet([
            { id: "MPMP", label: "MPMP"},
            { id: "MPFP", label: "MPFP"},
            { id: "FPMP", label: "FPMP"},
            { id: "FPFP", label: "FPFP"},
            { id: "MP", label: 'MP' },
            { id: "FP", label: 'FP' },
            { id: "FLC", label: 'FLC' },
            { id: "IC", label: 'IC' },
        ]);

        // create an array with edges
        var edges = new vis.DataSet([
            { from: "MPMP", to: "MPFP", dashes: true, arrows: ""},
            { from: "MPMP", to: "MP"},
            { from: "MPFP", to: "MP"},
            { from: "FPMP", to: "FPFP", dashes: true, arrows: ""},
            { from: "FPMP", to: "FP"},
            { from: "FPFP", to: "FP"},
            { from: "MP", to: "FP", dashes: true, arrows: ""},
            { from: "MP", to: "FLC" },
            { from: "FP", to: "FLC" },
            { from: "MP", to: "IC" },
            { from: "FLC", to: "IC" }
        ]);

        // create a network
        var container = document.getElementById('content');
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {
            edges: {
                arrows: {
                    to: true
                }
            },
            manipulation: {
                enabled: true,
                initiallyActive: false,
                addNode: true,
                addEdge: true,
                editNode: undefined,
                editEdge: true,
                deleteNode: true,
                deleteEdge: true,
                controlNodeStyle:{
                  // all node options are valid.
                }
              }
        };
        var network = new vis.Network(container, data, options);
    }
})();