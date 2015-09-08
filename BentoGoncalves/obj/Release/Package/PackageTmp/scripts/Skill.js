
var margin = { top: 300, right: 400, bottom: 300, left: 400 },
    radius = Math.min(margin.top, margin.right, margin.bottom, margin.left) - 10;

function filter_min_arc_size_text(d, i) { return (d.dx * d.depth * radius / 3) > 14 };

var hue = d3.scale.category20();

var luminance = d3.scale.sqrt()
    .clamp(true)
    .range([100, 80, 60, 40]);

var svg = d3.select("#skills").append("svg")
    .attr("width", margin.left + margin.right)
    .attr("height", margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var partition = d3.layout.partition()
    .sort(function (a, b) { return d3.ascending(a.name, b.name); })
    .size([2 * Math.PI, radius]);

var arc = d3.svg.arc()
    .startAngle(function (d) { return d.x; })
    .endAngle(function (d) { return d.x + d.dx - .01 / (d.depth + .5); })
    .innerRadius(function (d) { return radius / 3 * d.depth; })
    .outerRadius(function (d) { return radius / 3 * (d.depth + 1) - 1; });

//Tooltip description
var tooltip = d3.select("#skills")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("opacity", 0);

function format_number(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function format_description(d) {
    var description = d.description;
    return '<b>' + d.name + '</b></br>' + d.description + '<br> (' + format_number(d.value) + ')';
}

function computeTextRotation(d) {
    var angle = (d.x + d.dx / 2) * 180 / Math.PI - 90
    
    return angle;
}

function mouseOverArc(d) {
    d3.select(this).attr("stroke", "black")

    tooltip.html(format_description(d));
    return tooltip.transition()
      .duration(50)
      .style("opacity", 0.9);
}

function mouseOutArc() {
    d3.select(this).attr("stroke", "")
    return tooltip.style("opacity", 0);
}

function mouseMoveArc(d) {
    return tooltip
      .style("top", (d3.event.pageY - 10) + "px")
      .style("left", (d3.event.pageX + 10) + "px");
}

var root = [
    {
        "name": "flare",
        "description": "flare",
        "color" : 0,
        "children": [
          {
              "name": "RPM",
              "description": "RECEITAS PRÓPRIAS MUNICIPAIS",
              "color" : 1,
              "children": [
                {
                    "name": "IPTU",
                    "description": "IPTU",
                    "children": [

                    ],
                    "size": 6920411.25
                },
                {
                    "name": "IRRF",
                    "description": "IRRF",
                    "children": [

                    ],
                    "size": 4738244.49
                },
                {
                    "name": "ITBI",
                    "description": "ITBI",
                    "children": [

                    ],
                    "size": 3684985.45
                },
                {
                    "name": "ISS",
                    "description": "ISS",
                    "children": [

                    ],
                    "size": 16629684.86
                },
                {
                    "name": "TAXAS",
                    "description": "TAXAS",
                    "children": [

                    ],
                    "size": 16142667.85
                },
                {
                    "name": "CM",
                    "description": "Contribuição Melhoria",
                    "children": [

                    ],
                    "size": 1130.73
                },
                {
                    "name": "CIP",
                    "description": "Custeio Iluminação Pública",
                    "children": [

                    ],
                    "size": 2113242.02
                },
                {
                    "name": "RP",
                    "description": "Receita Patrimonial",
                    "children": [

                    ],
                    "size": 2923581.34
                },
                {
                    "name": "RDS",
                    "description": "Receita De Serviços",
                    "children": [

                    ],
                    "size": 130014.87
                },
                {
                    "name": "RMEJDM",
                    "description": "Receita Multas E Juros De Mora",
                    "children": [

                    ],
                    "size": 1041925.08
                },
                {
                    "name": "RIER",
                    "description": "Receita Indenizações E Restituições",
                    "children": [

                    ],
                    "size": 224332.14
                },
                {
                    "name": "RDDA",
                    "description": "Receita De Dívida Ativa",
                    "children": [

                    ],
                    "size": 1755574.39
                },
                {
                    "name": "RD",
                    "description": "Receita DIVERSAS",
                    "children": [

                    ],
                    "size": 34832.39
                },
                {
                    "name": "RDC",
                    "description": "Receita De Capital",
                    "children": [

                    ],
                    "size": 4950724.42
                },
                {
                    "name": "ORC",
                    "description": "Outras Receitas Correntes",
                    "children": [

                    ],
                    "size": 1318023.51
                }
              ]
          },
          {
              "name": "RDTF",
              "description": "RECEITAS DE TRANSFERENCIAS FEDERAIS",
              "color" : 2,
              "children": [
                {
                    "name": "FPM",
                    "description": "FPM",
                    "children": [

                    ],
                    "size": 20864248.81
                },
                {
                    "name": "TRN",
                    "description": "Transferencias Recursos Naturais",
                    "children": [

                    ],
                    "size": 476281.82
                },
                {
                    "name": "TPOS",
                    "description": "Transferencias Para O SUS",
                    "children": [

                    ],
                    "size": 21827931.79
                },
                {
                    "name": "TPOFA",
                    "description": "Transferencias Para O FNAS",
                    "children": [

                    ],
                    "size": 300508.71
                },
                {
                    "name": "TPOF",
                    "description": "Transferencias Para O FNDE",
                    "children": [

                    ],
                    "size": 1926183.49
                },
                {
                    "name": "TDI",
                    "description": "Transferencias Desoneração ICMS",
                    "children": [

                    ],
                    "size": 384374.84
                },
                {
                    "name": "OT",
                    "description": "Outras Transf.União",
                    "children": [

                    ],
                    "size": 2771661.44
                }
              ]
          },
          {
              "name": "RDTE",
              "description": "RECEITAS DE TRANSFERENCIAS ESTADUAIS",
              "color" : 3,
              "children": [
                {
                    "name": "ICMS",
                    "description": "ICMS",
                    "children": [

                    ],
                    "size": 50197791.11
                },
                {
                    "name": "IPVA",
                    "description": "IPVA",
                    "children": [

                    ],
                    "size": 14627014.01
                },
                {
                    "name": "CPIE",
                    "description": "Cota Parte IPI Exportação",
                    "children": [

                    ],
                    "size": 1031558.89
                },
                {
                    "name": "CIDE",
                    "description": "CIDE",
                    "children": [

                    ],
                    "size": 13224.96
                },
                {
                    "name": "TDEPS",
                    "description": "Transferencias Do Estado Para Saúde",
                    "children": [

                    ],
                    "size": 3067533.72
                },
                {
                    "name": "OTDE",
                    "description": "Outras Transferencias Do Estado",
                    "children": [

                    ],
                    "size": 1540483.07
                }
              ]
          },
          {
              "name": "OTC",
              "description": "OUTRAS TRANSFERENCIAS CORRENTES",
              "color" : 4,
              "children": [
                {
                    "name": "TDM",
                    "description": "Transferencias Dos Municipios",
                    "children": [

                    ],
                    "size": 0
                },
                {
                    "name": "TMF",
                    "description": "Transferencias Multigov. FUNDEB",
                    "children": [

                    ],
                    "size": 18472292.31
                },
                {
                    "name": "TIP",
                    "description": "Transferencias Instituições Privadas",
                    "children": [

                    ],
                    "size": 120984.82
                },
                {
                    "name": "TDP",
                    "description": "Transferencias De Pessoas",
                    "children": [

                    ],
                    "size": 16933.88
                },
                {
                    "name": "TDC",
                    "description": "Transferencias De Convenios",
                    "children": [

                    ],
                    "size": 1975691.45
                },
                {
                    "name": "OR",
                    "description": "Outras Receitas",
                    "children": [

                    ],
                    "size": 2096676.27
                }
              ],
              
          }
        ]
    }];

root = root[0];

var sunburst = function () {
    partition
        .value(function (d) { return d.size; })
        .nodes(root)
        .forEach(function (d) {
            d._children = d.children;
            d.sum = d.value;
            d.key = key(d);
            d.fill = fill(d);
        });

    // Now redefine the value function to use the previously-computed sum.
    partition
        .children(function (d, depth) { return depth < 2 ? d._children : null; })
        .value(function (d) { return d.sum; });

    var center = svg.append("circle")
        .attr("r", radius / 3)
        .on("click", zoomOut);

    center.append("title")
        .text("zoom out");

    var partitioned_data = partition.nodes(root).slice(1);

    var path = svg.selectAll("path")
        .data(partitioned_data)
      .enter().append("path")
        .attr("d", arc)
        .style("fill", function (d) { return d.fill; })
        .each(function (d) { this._current = updateArc(d); })
        .on("click", zoomIn)
          .on("mouseover", mouseOverArc)
        .on("mousemove", mouseMoveArc)
        .on("mouseout", mouseOutArc);


    var texts = svg.selectAll("text")
        .data(partitioned_data)
      .enter().append("text")
          .filter(filter_min_arc_size_text)
          .attr("transform", function (d) { return "rotate(" + computeTextRotation(d) + ")"; })
          .attr("x", function (d) { return radius / 3 * d.depth; })
          .attr("dx", "6") // margin
        .attr("dy", ".35em") // vertical-align	
          .text(function (d, i) { return d.description + " - " + (d.sum * 100 / d.parent.sum).toFixed(2) + "%" })

    function zoomIn(p) {
        if (p.depth > 1) p = p.parent;
        if (!p.children) return;
        zoom(p, p);
    }

    function zoomOut(p) {
        if (!p.parent) return;
        zoom(p.parent, p);
    }

    // Zoom to the specified new root.
    function zoom(root, p) {
        if (document.documentElement.__transition__) return;

        // Rescale outside angles to match the new layout.
        var enterArc,
            exitArc,
            outsideAngle = d3.scale.linear().domain([0, 2 * Math.PI]);

        function insideArc(d) {
            return p.key > d.key
                ? { depth: d.depth - 1, x: 0, dx: 0 } : p.key < d.key
                ? { depth: d.depth - 1, x: 2 * Math.PI, dx: 0 }
                : { depth: 0, x: 0, dx: 2 * Math.PI };
        }

        function outsideArc(d) {
            return { depth: d.depth + 1, x: outsideAngle(d.x), dx: outsideAngle(d.x + d.dx) - outsideAngle(d.x) };
        }

        center.datum(root);

        // When zooming in, arcs enter from the outside and exit to the inside.
        // Entering outside arcs start from the old layout.
        if (root === p) enterArc = outsideArc, exitArc = insideArc, outsideAngle.range([p.x, p.x + p.dx]);

        var new_data = partition.nodes(root).slice(1);

        path = path.data(new_data, function (d) { return d.key; });

        // When zooming out, arcs enter from the inside and exit to the outside.
        // Exiting outside arcs transition to the new layout.
        if (root !== p) enterArc = insideArc, exitArc = outsideArc, outsideAngle.range([p.x, p.x + p.dx]);

        d3.transition().duration(d3.event.altKey ? 7500 : 750).each(function () {
            path.exit().transition()
                .style("fill-opacity", function (d) { return d.depth === 1 + (root === p) ? 1 : 0; })
                .attrTween("d", function (d) { return arcTween.call(this, exitArc(d)); })
                .remove();

            path.enter().append("path")
                .style("fill-opacity", function (d) { return d.depth === 2 - (root === p) ? 1 : 0; })
                .style("fill", function (d) { return d.fill; })
                .on("click", zoomIn)
                   .on("mouseover", mouseOverArc)
               .on("mousemove", mouseMoveArc)
               .on("mouseout", mouseOutArc)
                .each(function (d) { this._current = enterArc(d); });


            path.transition()
                .style("fill-opacity", 1)
                .attrTween("d", function (d) { return arcTween.call(this, updateArc(d)); });



        });


        texts = texts.data(new_data, function (d) { return d.key; })

        texts.exit()
                .remove()
        texts.enter()
                .append("text")

        texts.style("opacity", 0)
          .attr("transform", function (d) { return "rotate(" + computeTextRotation(d) + ")"; })
            .attr("x", function (d) { return radius / 3 * d.depth; })
            .attr("dx", "6") // margin
          .attr("dy", ".35em") // vertical-align
          .filter(filter_min_arc_size_text)
          .text(function (d, i) { return d.description + " - " + (d.sum * 100 / d.parent.sum).toFixed(2) + "%" })
            .transition().delay(750).style("opacity", 1)


    }
};

function key(d) {
    var k = [], p = d;
    while (p.depth) k.push(p.name), p = p.parent;
    return k.reverse().join(".");
}

var colors = [
    "#009688",
    "#D32F2F",
    "#E64A19",
    "#455A64",
    "#512DA8",
    "#F44336"
]

function fill(d) {
    var p = d;
    while (p.depth > 1) p = p.parent;
    var c = d3.lab(colors[p.color]); //hue(p.name)
    //c.l = luminance(d.sum);
    return c;
}

function arcTween(b) {
    var i = d3.interpolate(this._current, b);
    this._current = i(0);
    return function (t) {
        return arc(i(t));
    };
}

function updateArc(d) {
    return { depth: d.depth, x: d.x, dx: d.dx };
}

sunburst();
