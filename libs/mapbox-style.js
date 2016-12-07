var _style = {
  "draft": false,
  "id": "streets-v8",
  "owner": "mapbox",
  "modified": 0,
  "version": 8,
  "name": "Mapbox Streets",
  "metadata": {
    "mapbox:groups": {
      "1444933837268.9458": {
        "collapsed": true,
        "name": "Contour lines"
      },
      "1444933456003.5437": {
        "collapsed": true,
        "name": "POI labels (scalerank 4)"
      },
      "1444856677484.5256": {
        "collapsed": true,
        "name": "High zoom level labels"
      },
      "1444856712129.5933": {
        "collapsed": true,
        "name": "Waterways"
      },
      "1444856144497.7825": {
        "collapsed": true,
        "name": "Country labels"
      },
      "1444855769305.6016": {
        "collapsed": true,
        "name": "Tunnels"
      },
      "1444856954425.4016": {
        "collapsed": true,
        "name": "Buildings"
      },
      "1444862510685.128": {
        "collapsed": true,
        "name": "City labels"
      },
      "1444856869758.2375": {
        "collapsed": true,
        "name": "Wetlands"
      },
      "1444856087950.3635": {
        "collapsed": true,
        "name": "Marine labels"
      },
      "1444855799204.86": {
        "collapsed": true,
        "name": "Bridges"
      },
      "1444933372896.5967": {
        "collapsed": true,
        "name": "POI labels (scalerank 3)"
      },
      "1444855831248.8289": {
        "collapsed": true,
        "name": "Landcover"
      },
      "1444855815295.714": {
        "collapsed": true,
        "name": "Hillshading"
      },
      "1444933808272.805": {
        "collapsed": true,
        "name": "Water labels"
      },
      "1444933358918.2366": {
        "collapsed": true,
        "name": "POI labels (scalerank 2)"
      },
      "1444855786460.0557": {
        "collapsed": true,
        "name": "Roads"
      },
      "1444855868004.2437": {
        "collapsed": false,
        "name": "Landuse"
      },
      "1444862074717.8372": {
        "collapsed": true,
        "name": "Waterways"
      },
      "1444934749452.0452": {
        "collapsed": true,
        "name": "Wetlands"
      },
      "1444862578782.6787": {
        "collapsed": true,
        "name": "Road labels"
      },
      "1444855898284.2651": {
        "collapsed": true,
        "name": "Aeroways"
      },
      "1444933322393.2852": {
        "collapsed": true,
        "name": "POI labels  (scalerank 1)"
      },
      "1444934828655.3389": {
        "collapsed": true,
        "name": "Aeroways"
      },
      "1444856968392.4368": {
        "collapsed": true,
        "name": "Contour lines"
      },
      "1444856071629.7817": {
        "collapsed": true,
        "name": "Place labels"
      },
      "1444933575858.6992": {
        "collapsed": true,
        "name": "Highway shields"
      },
      "1444934295202.7542": {
        "collapsed": true,
        "name": "Admin boundaries"
      },
      "1444856904773.373": {
        "collapsed": true,
        "name": "Land barriers"
      },
      "1444856931506.5164": {
        "collapsed": true,
        "name": "Barriers"
      },
      "1444856151690.9143": {
        "collapsed": true,
        "name": "State labels"
      },
      "1444933721429.3076": {
        "collapsed": true,
        "name": "Road labels"
      }
    },
    "mapbox:autocomposite": true
  },
  "sources": {
    "composite": {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7"
    }
  },
  "sprite": "mapbox://sprites/mapbox/streets-v8",
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  "layers": [
    {
      "interactive": true,
      "paint": {
        "background-color": "#ede9d9"
      },
      "layout": {
        "visibility": "visible"
      },
      "type": "background",
      "id": "background"
    },
    {
      "source-layer": "landcover",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              2,
              0.3
            ],
            [
              14,
              0
            ]
          ],
          "base": 1.5
        },
        "fill-color": "#ddecb1"
      },
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855831248.8289"
      },
      "maxzoom": 14,
      "filter": [
        "==",
        "class",
        "crop"
      ],
      "type": "fill",
      "source": "composite",
      "id": "landcover_crop"
    },
    {
      "source-layer": "landcover",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              2,
              0.3
            ],
            [
              14,
              0
            ]
          ],
          "base": 1.5
        },
        "fill-color": "#ddecb1"
      },
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855831248.8289"
      },
      "maxzoom": 14,
      "filter": [
        "==",
        "class",
        "grass"
      ],
      "type": "fill",
      "source": "composite",
      "id": "landcover_grass"
    },
    {
      "source-layer": "landcover",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              2,
              0.3
            ],
            [
              14,
              0
            ]
          ],
          "base": 1.5
        },
        "fill-color": "#ddecb1"
      },
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855831248.8289"
      },
      "maxzoom": 14,
      "filter": [
        "==",
        "class",
        "scrub"
      ],
      "type": "fill",
      "source": "composite",
      "id": "landcover_scrub"
    },
    {
      "source-layer": "landcover",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              2,
              0.3
            ],
            [
              14,
              0
            ]
          ],
          "base": 1.5
        },
        "fill-color": "#ddecb1"
      },
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855831248.8289"
      },
      "maxzoom": 14,
      "filter": [
        "==",
        "class",
        "wood"
      ],
      "type": "fill",
      "source": "composite",
      "id": "landcover_wood"
    },
    {
      "source-layer": "landcover",
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855831248.8289"
      },
      "filter": [
        "==",
        "class",
        "snow"
      ],
      "type": "fill",
      "source": "composite",
      "id": "landcover_snow",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": 0.2,
        "fill-color": "#fff"
      }
    },
    {
      "source-layer": "landuse_overlay",
      "paint": {
        "fill-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              6,
              0.5
            ]
          ],
          "base": 1
        },
        "fill-color": "#cde8a2"
      },
      "id": "national_park",
      "source": "composite",
      "type": "fill",
      "filter": [
        "==",
        "class",
        "national_park"
      ],
      "layout": {
        "visibility": "visible"
      },
      "interactive": true
    },
    {
      "source-layer": "landuse",
      "interactive": true,
      "minzoom": 9,
      "layout": {
        "visibility": "visible"
      },
      "filter": [
        "==",
        "class",
        "scrub"
      ],
      "type": "fill",
      "source": "composite",
      "id": "scrub",
      "paint": {
        "fill-opacity": {
          "stops": [
            [
              9,
              0
            ],
            [
              16,
              0.2
            ]
          ],
          "base": 1
        },
        "fill-color": "#ddecb1"
      }
    },
    {
      "source-layer": "landuse",
      "interactive": true,
      "minzoom": 9,
      "layout": {
        "visibility": "visible"
      },
      "filter": [
        "==",
        "class",
        "grass"
      ],
      "type": "fill",
      "source": "composite",
      "id": "grass",
      "paint": {
        "fill-opacity": {
          "stops": [
            [
              9,
              0
            ],
            [
              16,
              0.4
            ]
          ],
          "base": 1
        },
        "fill-color": "#ddecb1"
      }
    },
    {
      "source-layer": "landuse",
      "interactive": true,
      "minzoom": 6,
      "layout": {
        "visibility": "visible"
      },
      "filter": [
        "==",
        "class",
        "wood"
      ],
      "type": "fill",
      "source": "composite",
      "id": "wood",
      "paint": {
        "fill-opacity": {
          "stops": [
            [
              6,
              0
            ],
            [
              16,
              0.5
            ]
          ],
          "base": 1
        },
        "fill-color": "#ddecb1"
      }
    },
    {
      "source-layer": "landuse",
      "paint": {
        "fill-color": "#f4dcdc"
      },
      "id": "hospital",
      "source": "composite",
      "type": "fill",
      "filter": [
        "==",
        "class",
        "hospital"
      ],
      "layout": {
        "visibility": "visible"
      },
      "interactive": true
    },
    {
      "source-layer": "landuse",
      "paint": {
        "fill-color": "#f3ebb4"
      },
      "id": "school",
      "source": "composite",
      "type": "fill",
      "filter": [
        "==",
        "class",
        "school"
      ],
      "layout": {
        "visibility": "visible"
      },
      "interactive": true
    },
    {
      "source-layer": "landuse",
      "paint": {
        "fill-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              6,
              1
            ]
          ],
          "base": 1
        },
        "fill-color": "#cde8a2"
      },
      "id": "parks",
      "source": "composite",
      "type": "fill",
      "filter": [
        "==",
        "class",
        "park"
      ],
      "layout": {
        "visibility": "visible"
      },
      "interactive": true
    },
    {
      "source-layer": "landuse",
      "interactive": true,
      "minzoom": 9,
      "layout": {
        "visibility": "visible"
      },
      "filter": [
        "==",
        "class",
        "glacier"
      ],
      "type": "fill",
      "source": "composite",
      "id": "glaciers",
      "paint": {
        "fill-opacity": {
          "stops": [
            [
              9,
              0
            ],
            [
              10,
              0.25
            ]
          ],
          "base": 1
        },
        "fill-color": "#dcedf9"
      }
    },
    {
      "source-layer": "landuse",
      "paint": {
        "fill-color": "#c3e194"
      },
      "id": "pitch",
      "source": "composite",
      "type": "fill",
      "filter": [
        "==",
        "class",
        "pitch"
      ],
      "layout": {
        "visibility": "visible"
      },
      "interactive": true
    },
    {
      "source-layer": "landuse",
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "line-join": "miter"
      },
      "filter": [
        "==",
        "class",
        "pitch"
      ],
      "type": "line",
      "source": "composite",
      "id": "pitch-line",
      "paint": {
        "line-color": "#e1f2c6"
      }
    },
    {
      "source-layer": "landuse",
      "paint": {
        "fill-color": "#dde6c2"
      },
      "id": "cemetery",
      "source": "composite",
      "type": "fill",
      "filter": [
        "==",
        "class",
        "cemetery"
      ],
      "layout": {
        "visibility": "visible"
      },
      "interactive": true
    },
    {
      "source-layer": "landuse",
      "paint": {
        "fill-color": "#e0dae0"
      },
      "id": "industrial",
      "source": "composite",
      "type": "fill",
      "filter": [
        "==",
        "class",
        "industrial"
      ],
      "layout": {
        "visibility": "visible"
      },
      "interactive": true
    },
    {
      "source-layer": "landuse",
      "paint": {
        "fill-color": "#ededcf"
      },
      "id": "sand",
      "source": "composite",
      "type": "fill",
      "filter": [
        "==",
        "class",
        "sand"
      ],
      "layout": {
        "visibility": "visible"
      },
      "interactive": true
    },
    {
      "source-layer": "hillshade",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              15,
              0.12
            ],
            [
              18,
              0
            ]
          ]
        },
        "fill-color": "#fff"
      },
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855815295.714"
      },
      "maxzoom": 18,
      "filter": [
        "==",
        "level",
        94
      ],
      "type": "fill",
      "source": "composite",
      "id": "hillshade_highlight_bright"
    },
    {
      "source-layer": "hillshade",
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855815295.714"
      },
      "filter": [
        "==",
        "level",
        90
      ],
      "type": "fill",
      "source": "composite",
      "id": "hillshade_highlight_med",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              15,
              0.12
            ],
            [
              18,
              0
            ]
          ]
        },
        "fill-color": "#fff"
      }
    },
    {
      "source-layer": "hillshade",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              15,
              0.05
            ],
            [
              17,
              0
            ]
          ]
        },
        "fill-color": "#5a5517"
      },
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855815295.714"
      },
      "maxzoom": 17,
      "filter": [
        "==",
        "level",
        89
      ],
      "type": "fill",
      "source": "composite",
      "id": "hillshade_shadow_faint"
    },
    {
      "source-layer": "hillshade",
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855815295.714"
      },
      "filter": [
        "==",
        "level",
        78
      ],
      "type": "fill",
      "source": "composite",
      "id": "hillshade_shadow_med",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              15,
              0.05
            ],
            [
              17,
              0
            ]
          ]
        },
        "fill-color": "#5a5517"
      }
    },
    {
      "source-layer": "hillshade",
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855815295.714"
      },
      "filter": [
        "==",
        "level",
        67
      ],
      "type": "fill",
      "source": "composite",
      "id": "hillshade_shadow_dark",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              15,
              0.06
            ],
            [
              17,
              0
            ]
          ]
        },
        "fill-color": "#5a5517"
      }
    },
    {
      "source-layer": "hillshade",
      "paint": {
        "fill-antialias": false,
        "fill-opacity": {
          "stops": [
            [
              15,
              0.06
            ],
            [
              17,
              0
            ]
          ]
        },
        "fill-color": "#5a5517"
      },
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855815295.714"
      },
      "maxzoom": 17,
      "filter": [
        "==",
        "level",
        56
      ],
      "type": "fill",
      "source": "composite",
      "id": "hillshade_shadow_extreme"
    },
    {
      "source-layer": "waterway",
      "interactive": true,
      "minzoom": 8,
      "layout": {
        "line-join": "round",
        "line-cap": {
          "stops": [
            [
              0,
              "butt"
            ],
            [
              11,
              "round"
            ]
          ],
          "base": 1
        },
        "visibility": "visible"
      },
      "filter": [
        "any",
        [
          "==",
          "class",
          "river"
        ],
        [
          "==",
          "class",
          "canal"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "waterway-river-canal",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              8,
              0
            ],
            [
              8.5,
              1
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              8.5,
              0.1
            ],
            [
              20,
              8
            ]
          ],
          "base": 1.3
        },
        "line-color": "#8ccbf7"
      }
    },
    {
      "source-layer": "waterway",
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "filter": [
        "all",
        [
          "!=",
          "class",
          "river"
        ],
        [
          "!=",
          "class",
          "canal"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "waterway-small",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13,
              0
            ],
            [
              13.5,
              1
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              13.5,
              0.1
            ],
            [
              20,
              3
            ]
          ],
          "base": 1.35
        },
        "line-color": "#8ccbf7"
      }
    },
    {
      "interactive": true,
      "paint": {
        "fill-color": "#8ccbf7"
      },
      "layout": {
        "visibility": "visible"
      },
      "source-layer": "water",
      "source": "composite",
      "type": "fill",
      "id": "water"
    },
    {
      "source-layer": "landuse_overlay",
      "interactive": true,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444934749452.0452"
      },
      "filter": [
        "in",
        "class",
        "wetland_noveg",
        "wetland"
      ],
      "type": "fill",
      "source": "composite",
      "id": "wetlands",
      "paint": {
        "fill-opacity": {
          "stops": [
            [
              10,
              0.25
            ],
            [
              10.5,
              0.15
            ]
          ],
          "base": 1
        },
        "fill-color": "#9DD3D8"
      }
    },
    {
      "ref": "wetlands",
      "paint": {
        "fill-translate-anchor": "viewport",
        "fill-pattern": "marsh-16",
        "fill-opacity": {
          "stops": [
            [
              10,
              0
            ],
            [
              10.5,
              1
            ]
          ],
          "base": 1
        },
        "fill-color": "#9DD3D8"
      },
      "id": "wetlands-pattern",
      "metadata": {
        "mapbox:group": "1444934749452.0452"
      },
      "interactive": true
    },
    {
      "source-layer": "barrier_line",
      "paint": {
        "fill-color": "#ede9d9"
      },
      "id": "barrier_line-land-polygon",
      "source": "composite",
      "type": "fill",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "==",
          "class",
          "land"
        ]
      ],
      "layout": {},
      "interactive": true
    },
    {
      "source-layer": "barrier_line",
      "paint": {
        "line-color": "#ede9d9",
        "line-width": {
          "stops": [
            [
              14,
              0.75
            ],
            [
              20,
              40
            ]
          ],
          "base": 1.99
        }
      },
      "id": "barrier_line-land-line",
      "source": "composite",
      "type": "line",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "class",
          "land"
        ]
      ],
      "layout": {
        "line-cap": "round"
      },
      "interactive": true
    },
    {
      "source-layer": "building",
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "visibility": "visible"
      },
      "filter": [
        "==",
        "underground",
        "false"
      ],
      "type": "line",
      "source": "composite",
      "id": "building-line",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              15.5,
              0
            ],
            [
              16,
              1
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              15,
              0.75
            ],
            [
              20,
              3
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d0cbbb"
      }
    },
    {
      "source-layer": "building",
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "visibility": "visible"
      },
      "filter": [
        "==",
        "underground",
        "false"
      ],
      "type": "fill",
      "source": "composite",
      "id": "building",
      "paint": {
        "fill-outline-color": "#d0cbbb",
        "fill-opacity": {
          "stops": [
            [
              15.5,
              0
            ],
            [
              16,
              1
            ]
          ],
          "base": 1
        },
        "fill-color": {
          "stops": [
            [
              15,
              "#ede9d9"
            ],
            [
              16,
              "#e8e0cc"
            ]
          ],
          "base": 1
        }
      }
    },
    {
      "source-layer": "aeroway",
      "paint": {
        "fill-opacity": {
          "stops": [
            [
              11,
              0
            ],
            [
              11.5,
              1
            ]
          ],
          "base": 1
        },
        "fill-color": "#dbcedb"
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {},
      "metadata": {
        "mapbox:group": "1444934828655.3389"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Polygon"
        ],
        [
          "!=",
          "type",
          "apron"
        ]
      ],
      "type": "fill",
      "source": "composite",
      "id": "aeroway-polygon"
    },
    {
      "source-layer": "aeroway",
      "paint": {
        "line-width": {
          "stops": [
            [
              9,
              1
            ],
            [
              18,
              80
            ]
          ],
          "base": 1.5
        },
        "line-color": "#dbcedb"
      },
      "interactive": true,
      "minzoom": 9,
      "layout": {
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444934828655.3389"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "type",
          "runway"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "aeroway-runway"
    },
    {
      "source-layer": "aeroway",
      "paint": {
        "line-width": {
          "stops": [
            [
              10,
              0.5
            ],
            [
              18,
              20
            ]
          ],
          "base": 1.5
        },
        "line-color": "#dbcedb"
      },
      "interactive": true,
      "minzoom": 9,
      "layout": {
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444934828655.3389"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "type",
          "taxiway"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "aeroway-taxiway"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              11.5,
              0
            ],
            [
              12,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "street"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-street-low"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              11.5,
              0
            ],
            [
              12,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "street_limited"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-street_limited-low"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-dasharray": [
          3,
          3
        ],
        "line-gap-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ],
          "base": 1.5
        },
        "line-color": "#c4beb7",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "in",
          "class",
          "service",
          "link",
          "track"
        ],
        [
          "!=",
          "type",
          "trunk_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-service-link-track-case"
    },
    {
      "ref": "tunnel-street_limited-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-dasharray": [
          3,
          3
        ],
        "line-gap-width": {
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#c4beb7",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-street_limited-case",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "ref": "tunnel-street-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-dasharray": [
          3,
          3
        ],
        "line-gap-width": {
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#c4beb7",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-street-case",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-secondary-tertiary-case",
      "paint": {
        "line-color": "#c4beb7",
        "line-gap-width": {
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ],
          "base": 1.5
        },
        "line-dasharray": [
          3,
          3
        ],
        "line-width": {
          "stops": [
            [
              10,
              0.75
            ],
            [
              18,
              2
            ]
          ],
          "base": 1.2
        }
      }
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "primary"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-primary-case",
      "paint": {
        "line-color": "#c4beb7",
        "line-gap-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        },
        "line-dasharray": [
          3,
          3
        ],
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {
        "line-dasharray": [
          3,
          3
        ],
        "line-gap-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "type",
          "trunk_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-trunk_link-case"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-dasharray": [
          3,
          3
        ],
        "line-gap-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-motorway_link-case"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "type",
          "trunk"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-trunk-case",
      "paint": {
        "line-dasharray": [
          3,
          3
        ],
        "line-opacity": 1,
        "line-gap-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-motorway-case",
      "paint": {
        "line-dasharray": [
          3,
          3
        ],
        "line-opacity": 1,
        "line-gap-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {
        "line-dasharray": {
          "stops": [
            [
              14,
              [
                0.4,
                0.8
              ]
            ],
            [
              15,
              [
                0.3,
                0.6
              ]
            ],
            [
              16,
              [
                0.2,
                0.3
              ]
            ],
            [
              17,
              [
                0.2,
                0.25
              ]
            ],
            [
              18,
              [
                0.15,
                0.15
              ]
            ]
          ],
          "base": 1
        },
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "line-join": "miter",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "street_limited"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-construction"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "path"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-path",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              14,
              0
            ],
            [
              14.25,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#f5f2ee",
        "line-dasharray": {
          "stops": [
            [
              14,
              [
                1,
                0
              ]
            ],
            [
              15,
              [
                1.75,
                1
              ]
            ],
            [
              16,
              [
                1,
                0.75
              ]
            ],
            [
              17,
              [
                1,
                0.5
              ]
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              15,
              1
            ],
            [
              18,
              4
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "ref": "tunnel-trunk_link-case",
      "paint": {
        "line-dasharray": [
          1,
          0
        ],
        "line-opacity": 1,
        "line-color": "#f2de9e",
        "line-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-trunk_link",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "ref": "tunnel-motorway_link-case",
      "paint": {
        "line-dasharray": [
          1,
          0
        ],
        "line-opacity": 1,
        "line-color": "#ffbe8c",
        "line-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-motorway_link",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {
        "line-dasharray": {
          "stops": [
            [
              14,
              [
                1,
                0
              ]
            ],
            [
              15,
              [
                1.5,
                0.4
              ]
            ],
            [
              16,
              [
                1,
                0.2
              ]
            ]
          ],
          "base": 1
        },
        "line-opacity": 1,
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "pedestrian"
          ],
          [
            "==",
            "structure",
            "tunnel"
          ]
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-pedestrian"
    },
    {
      "ref": "tunnel-service-link-track-case",
      "paint": {
        "line-dasharray": [
          1,
          0
        ],
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-service-link-track",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "ref": "tunnel-street_limited-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#EFEDEB",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-street_limited",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "ref": "tunnel-street-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-street",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "ref": "tunnel-secondary-tertiary-case",
      "paint": {
        "line-blur": 0,
        "line-dasharray": [
          1,
          0
        ],
        "line-opacity": 1,
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-secondary-tertiary",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "ref": "tunnel-primary-case",
      "paint": {
        "line-blur": 0,
        "line-dasharray": [
          1,
          0
        ],
        "line-opacity": 1,
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-primary",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {},
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "icon-padding": 2,
        "icon-allow-overlap": false,
        "symbol-spacing": 250,
        "icon-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              16,
              "oneway-spaced-small"
            ],
            [
              17,
              "oneway-spaced-large"
            ]
          ],
          "base": 1
        },
        "symbol-placement": "line"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "street_limited"
        ],
        [
          "==",
          "oneway",
          "true"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "tunnel-oneway-arrows-other"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "trunk"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-trunk",
      "paint": {
        "line-color": "#f2de9e",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {},
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "icon-padding": 2,
        "icon-allow-overlap": false,
        "symbol-spacing": 250,
        "icon-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              16,
              "oneway-spaced-white-small"
            ],
            [
              17,
              "oneway-spaced-white-large"
            ]
          ],
          "base": 1
        },
        "symbol-placement": "line"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "type",
          "trunk"
        ],
        [
          "==",
          "oneway",
          "true"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "tunnel-oneway-arrows-trunk"
    },
    {
      "ref": "tunnel-motorway-case",
      "paint": {
        "line-blur": 0,
        "line-color": "#ffbe8c",
        "line-opacity": 1,
        "line-dasharray": [
          1,
          0
        ],
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        }
      },
      "id": "tunnel-motorway",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              1
            ]
          ],
          "base": 1.5
        },
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#c0beb2"
            ]
          ]
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "in",
          "class",
          "major_rail",
          "minor_rail"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "tunnel-rail"
    },
    {
      "ref": "tunnel-rail",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.75,
              0
            ],
            [
              20,
              1
            ]
          ],
          "base": 1
        },
        "line-dasharray": [
          0.1,
          15
        ],
        "line-width": {
          "stops": [
            [
              14,
              4
            ],
            [
              20,
              8
            ]
          ],
          "base": 1.5
        },
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#c0beb2"
            ]
          ]
        }
      },
      "id": "tunnel-rail-tracks",
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {},
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "icon-padding": 2,
        "icon-allow-overlap": false,
        "symbol-spacing": 250,
        "icon-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              16,
              "oneway-spaced-white-small"
            ],
            [
              17,
              "oneway-spaced-white-large"
            ]
          ],
          "base": 1
        },
        "symbol-placement": "line"
      },
      "metadata": {
        "mapbox:group": "1444855769305.6016"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "==",
          "oneway",
          "true"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "tunnel-oneway-arrows-motorway"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "==",
        "class",
        "ferry"
      ],
      "type": "line",
      "source": "composite",
      "id": "ferry",
      "paint": {
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              1
            ]
          ],
          "base": 1.5
        },
        "line-opacity": 1,
        "line-color": "#5eace5"
      }
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "class",
          "path"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-path-bg",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              14,
              0
            ],
            [
              14.25,
              0.5
            ]
          ],
          "base": 1
        },
        "line-blur": 0,
        "line-color": "#d9d3c9",
        "line-dasharray": [
          1,
          0
        ],
        "line-width": {
          "stops": [
            [
              15,
              2
            ],
            [
              18,
              7
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": 0,
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              14,
              2
            ],
            [
              18,
              14.5
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 12,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "pedestrian"
          ],
          [
            "==",
            "structure",
            "none"
          ]
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-pedestrian-case"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              11,
              0
            ],
            [
              11.25,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "street"
          ],
          [
            "==",
            "structure",
            "none"
          ]
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-street-low"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              11,
              0
            ],
            [
              11.25,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "street_limited"
          ],
          [
            "==",
            "structure",
            "none"
          ]
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-street_limited-low"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-gap-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "in",
          "class",
          "service",
          "link",
          "track"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ],
        [
          "!=",
          "type",
          "trunk_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-service-link-track-case"
    },
    {
      "ref": "road-street_limited-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": {
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-street_limited-case",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "ref": "road-street-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": {
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-street-case",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-main-case",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              9.99,
              0
            ],
            [
              10,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": {
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              10,
              0.75
            ],
            [
              18,
              2
            ]
          ],
          "base": 1.2
        }
      }
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-primary-case",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              9.99,
              0
            ],
            [
              10,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              10.99,
              0
            ],
            [
              11,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 10,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway_link"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-motorway_link-case"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              10.99,
              0
            ],
            [
              11,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "type",
          "trunk_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-trunk_link-case"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              5.9,
              0
            ],
            [
              6,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 5,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-trunk-case"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "class",
          "motorway"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-motorway-case",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              5.9,
              0
            ],
            [
              6,
              1
            ]
          ],
          "base": 1.2
        },
        "line-gap-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {
        "line-dasharray": {
          "stops": [
            [
              14,
              [
                0.4,
                0.8
              ]
            ],
            [
              15,
              [
                0.3,
                0.6
              ]
            ],
            [
              16,
              [
                0.2,
                0.3
              ]
            ],
            [
              17,
              [
                0.2,
                0.25
              ]
            ],
            [
              18,
              [
                0.15,
                0.15
              ]
            ]
          ],
          "base": 1
        },
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "line-join": "miter",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "construction"
          ],
          [
            "==",
            "structure",
            "none"
          ]
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-construction"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "class",
          "path"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-path",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              14,
              0
            ],
            [
              14.25,
              1
            ]
          ],
          "base": 1
        },
        "line-dasharray": {
          "stops": [
            [
              14,
              [
                1,
                0
              ]
            ],
            [
              15,
              [
                1.75,
                1
              ]
            ],
            [
              16,
              [
                1,
                0.75
              ]
            ],
            [
              17,
              [
                1,
                0.5
              ]
            ]
          ],
          "base": 1
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              15,
              1
            ],
            [
              18,
              4
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "ref": "road-trunk_link-case",
      "paint": {
        "line-opacity": 1,
        "line-color": "#f2cf60",
        "line-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-trunk_link",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "ref": "road-motorway_link-case",
      "paint": {
        "line-opacity": 1,
        "line-color": "#ffa159",
        "line-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-motorway_link",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "ref": "road-pedestrian-case",
      "paint": {
        "line-dasharray": {
          "stops": [
            [
              14,
              [
                1,
                0
              ]
            ],
            [
              15,
              [
                1.5,
                0.4
              ]
            ],
            [
              16,
              [
                1,
                0.2
              ]
            ]
          ],
          "base": 1
        },
        "line-opacity": 1,
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-pedestrian",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "in",
          "class",
          "service",
          "link",
          "track"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ],
        [
          "!=",
          "type",
          "trunk_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-service-link-track"
    },
    {
      "ref": "road-street_limited-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#EFEDEB",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-street_limited",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "ref": "road-street-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-street",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "ref": "road-main-case",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              5.5,
              1
            ]
          ],
          "base": 1.2
        },
        "line-color": {
          "stops": [
            [
              5,
              "#ede9d9"
            ],
            [
              8,
              "#fff"
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-secondary-tertiary",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "ref": "road-primary-case",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              5.5,
              1
            ]
          ],
          "base": 1.2
        },
        "line-color": {
          "stops": [
            [
              5,
              "#ede9d9"
            ],
            [
              8,
              "#fff"
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-primary",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {},
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "icon-allow-overlap": false,
        "symbol-spacing": 250,
        "icon-padding": 2,
        "icon-rotation-alignment": "map",
        "icon-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              16,
              "oneway-spaced-small"
            ],
            [
              17,
              "oneway-spaced-large"
            ]
          ],
          "base": 1
        },
        "symbol-placement": "line"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "oneway",
          "true"
        ],
        [
          "in",
          "class",
          "primary",
          "secondary",
          "tertiary",
          "street",
          "street_limited"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "road-oneway-arrows-other"
    },
    {
      "ref": "road-trunk-case",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              5.5,
              1
            ]
          ],
          "base": 1.2
        },
        "line-color": {
          "stops": [
            [
              5.9,
              "#fff"
            ],
            [
              6,
              "#f2cf60"
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-trunk",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {},
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "icon-allow-overlap": false,
        "symbol-spacing": 250,
        "icon-padding": 2,
        "icon-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              16,
              "oneway-spaced-white-small"
            ],
            [
              17,
              "oneway-spaced-white-large"
            ]
          ],
          "base": 1
        },
        "symbol-placement": "line"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "oneway",
          "true"
        ],
        [
          "==",
          "class",
          "trunk"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "road-oneway-arrows-trunk"
    },
    {
      "ref": "road-motorway-case",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              5.5,
              1
            ]
          ],
          "base": 1.2
        },
        "line-color": {
          "stops": [
            [
              5.9,
              "#fff"
            ],
            [
              6,
              "#ffa159"
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        }
      },
      "id": "road-motorway",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              1
            ]
          ],
          "base": 1.5
        },
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#b3b1a6"
            ]
          ]
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "in",
          "class",
          "major_rail",
          "minor_rail"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "road-rail"
    },
    {
      "ref": "road-rail",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.75,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-dasharray": [
          0.1,
          15
        ],
        "line-width": {
          "stops": [
            [
              14,
              4
            ],
            [
              20,
              8
            ]
          ],
          "base": 1.5
        },
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#b3b1a6"
            ]
          ]
        }
      },
      "id": "road-rail-tracks",
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {},
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "icon-allow-overlap": false,
        "symbol-spacing": 250,
        "icon-padding": 2,
        "icon-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              16,
              "oneway-spaced-white-small"
            ],
            [
              17,
              "oneway-spaced-white-large"
            ]
          ],
          "base": 1
        },
        "symbol-placement": "line"
      },
      "metadata": {
        "mapbox:group": "1444855786460.0557"
      },
      "filter": [
        "all",
        [
          "==",
          "oneway",
          "true"
        ],
        [
          "in",
          "class",
          "motorway",
          "motorway_link",
          "trunk"
        ],
        [
          "!in",
          "structure",
          "bridge",
          "tunnel"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "road-oneway-arrows-motorway"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "path"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-path-bg",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              15,
              0
            ],
            [
              15.25,
              0.75
            ]
          ],
          "base": 1
        },
        "line-blur": 0,
        "line-color": "#d9d3c9",
        "line-dasharray": [
          1,
          0
        ],
        "line-width": {
          "stops": [
            [
              15,
              2
            ],
            [
              18,
              7
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": 0,
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              14,
              2
            ],
            [
              18,
              14.5
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "==",
            "class",
            "pedestrian"
          ],
          [
            "==",
            "structure",
            "bridge"
          ]
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-pedestrian-case"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              11.5,
              0
            ],
            [
              12,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "street"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-street-low"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              11.5,
              0
            ],
            [
              12,
              1
            ],
            [
              14,
              1
            ],
            [
              14.01,
              0
            ]
          ]
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "street_limited"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-street_limited-low"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-gap-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "in",
          "class",
          "service",
          "link",
          "track"
        ],
        [
          "!=",
          "type",
          "trunk_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-service-link-track-case"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-gap-width": {
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "street_limited"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-street_limited-case"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-gap-width": {
          "stops": [
            [
              13,
              0
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "street"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-street-case"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-secondary-tertiary-case",
      "paint": {
        "line-translate": [
          0,
          0
        ],
        "line-gap-width": {
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              10,
              0.75
            ],
            [
              18,
              2
            ]
          ],
          "base": 1.2
        }
      }
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "primary"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-primary-case",
      "paint": {
        "line-translate": [
          0,
          0
        ],
        "line-gap-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {},
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "icon-padding": 2,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": false,
        "symbol-spacing": 250,
        "icon-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              16,
              "oneway-spaced-small"
            ],
            [
              17,
              "oneway-spaced-large"
            ]
          ],
          "base": 1
        },
        "symbol-placement": "line"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "in",
          "class",
          "street",
          "street_limited",
          "service",
          "path",
          "pedestrian",
          "track",
          "link"
        ],
        [
          "==",
          "oneway",
          "true"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "bridge-oneway-arrows-other"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              10.99,
              0
            ],
            [
              11,
              1
            ]
          ],
          "base": 1
        },
        "line-gap-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "type",
          "trunk_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-trunk_link-case"
    },
    {
      "source-layer": "road",
      "paint": {
        "line-opacity": 1,
        "line-gap-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12,
              0.75
            ],
            [
              20,
              2
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-motorway_link-case"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "trunk"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-trunk-case",
      "paint": {
        "line-gap-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-motorway-case",
      "paint": {
        "line-gap-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              16,
              2
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {
        "line-dasharray": {
          "stops": [
            [
              14,
              [
                0.4,
                0.8
              ]
            ],
            [
              15,
              [
                0.3,
                0.6
              ]
            ],
            [
              16,
              [
                0.2,
                0.3
              ]
            ],
            [
              17,
              [
                0.2,
                0.25
              ]
            ],
            [
              18,
              [
                0.15,
                0.15
              ]
            ]
          ],
          "base": 1
        },
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#d9d3c9",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "line-join": "miter",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "in",
          "class",
          "street",
          "street_limited",
          "service",
          "path",
          "pedestrian",
          "track",
          "link"
        ],
        [
          "==",
          "class",
          "construction"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-construction"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "path"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-path",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              14,
              0
            ],
            [
              14.25,
              1
            ]
          ],
          "base": 1
        },
        "line-dasharray": {
          "stops": [
            [
              14,
              [
                1,
                0
              ]
            ],
            [
              15,
              [
                1.75,
                1
              ]
            ],
            [
              16,
              [
                1,
                0.75
              ]
            ],
            [
              17,
              [
                1,
                0.5
              ]
            ]
          ],
          "base": 1
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              15,
              1
            ],
            [
              18,
              4
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "ref": "bridge-trunk_link-case",
      "paint": {
        "line-color": "#f2cf60",
        "line-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "bridge-trunk_link",
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {
        "line-color": "#ffa159",
        "line-width": {
          "stops": [
            [
              12,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-motorway_link"
    },
    {
      "ref": "bridge-pedestrian-case",
      "paint": {
        "line-dasharray": {
          "stops": [
            [
              14,
              [
                1,
                0
              ]
            ],
            [
              15,
              [
                1.5,
                0.4
              ]
            ],
            [
              16,
              [
                1,
                0.2
              ]
            ]
          ],
          "base": 1
        },
        "line-opacity": 1,
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ],
          "base": 1.5
        }
      },
      "id": "bridge-pedestrian",
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              18,
              12
            ]
          ],
          "base": 1.5
        }
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "in",
          "class",
          "service",
          "link",
          "track"
        ],
        [
          "!=",
          "type",
          "trunk_link"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-service-link-track"
    },
    {
      "ref": "bridge-street_limited-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#EFEDEB",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "bridge-street_limited",
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "interactive": true
    },
    {
      "ref": "bridge-street-low",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              12.5,
              0.5
            ],
            [
              14,
              2
            ],
            [
              18,
              18
            ]
          ],
          "base": 1.5
        }
      },
      "id": "bridge-street",
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "in",
          "type",
          "secondary",
          "tertiary"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-secondary-tertiary",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              5.5,
              1
            ]
          ],
          "base": 1.2
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              8.5,
              0.5
            ],
            [
              10,
              0.75
            ],
            [
              18,
              26
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "type",
          "primary"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-primary",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              5,
              0
            ],
            [
              5.5,
              1
            ]
          ],
          "base": 1.2
        },
        "line-color": "#fff",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "trunk"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-trunk",
      "paint": {
        "line-color": "#f2cf60",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {},
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "icon-padding": 2,
        "icon-allow-overlap": false,
        "symbol-spacing": 250,
        "icon-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              16,
              "oneway-spaced-white-small"
            ],
            [
              17,
              "oneway-spaced-white-large"
            ]
          ],
          "base": 1
        },
        "symbol-placement": "line"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "type",
          "trunk"
        ],
        [
          "==",
          "oneway",
          "true"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "bridge-oneway-arrows-trunk"
    },
    {
      "source-layer": "road",
      "interactive": true,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-motorway",
      "paint": {
        "line-color": "#ffa159",
        "line-width": {
          "stops": [
            [
              5,
              0.75
            ],
            [
              18,
              32
            ]
          ],
          "base": 1.5
        }
      }
    },
    {
      "source-layer": "road",
      "paint": {
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              1
            ]
          ],
          "base": 1.5
        },
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#b3b1a6"
            ]
          ]
        }
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "in",
          "class",
          "major_rail",
          "minor_rail"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-rail"
    },
    {
      "ref": "bridge-rail",
      "paint": {
        "line-opacity": {
          "stops": [
            [
              13.75,
              0
            ],
            [
              20,
              1
            ]
          ],
          "base": 1
        },
        "line-dasharray": [
          0.1,
          15
        ],
        "line-width": {
          "stops": [
            [
              14,
              4
            ],
            [
              20,
              8
            ]
          ],
          "base": 1.5
        },
        "line-color": {
          "stops": [
            [
              13,
              "#d8d5c8"
            ],
            [
              16,
              "#b3b1a6"
            ]
          ]
        }
      },
      "id": "bridge-rail-tracks",
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "interactive": true
    },
    {
      "source-layer": "road",
      "paint": {
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              1
            ]
          ],
          "base": 1.5
        },
        "line-color": "#b3ada6"
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "==",
          "class",
          "aerialway"
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "bridge-aerialway"
    },
    {
      "source-layer": "road",
      "paint": {},
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "icon-padding": 2,
        "icon-allow-overlap": false,
        "symbol-spacing": 250,
        "icon-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              16,
              "oneway-spaced-white-small"
            ],
            [
              17,
              "oneway-spaced-white-large"
            ]
          ],
          "base": 1
        },
        "symbol-placement": "line"
      },
      "metadata": {
        "mapbox:group": "1444855799204.86"
      },
      "filter": [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk"
        ],
        [
          "==",
          "oneway",
          "true"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "bridge-oneway-arrows-motorway"
    },
    {
      "source-layer": "barrier_line",
      "interactive": true,
      "minzoom": 16,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "filter": [
        "==",
        "class",
        "hedge"
      ],
      "type": "line",
      "source": "composite",
      "id": "hedges",
      "paint": {
        "line-dasharray": [
          1,
          2,
          5,
          2,
          1,
          2
        ],
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              16,
              1
            ],
            [
              20,
              3
            ]
          ],
          "base": 1
        },
        "line-color": "#e2f4c2"
      }
    },
    {
      "source-layer": "barrier_line",
      "interactive": true,
      "minzoom": 16,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "filter": [
        "==",
        "class",
        "fence"
      ],
      "type": "line",
      "source": "composite",
      "id": "fences",
      "paint": {
        "line-dasharray": [
          1,
          2,
          5,
          2,
          1,
          2
        ],
        "line-opacity": 1,
        "line-width": {
          "stops": [
            [
              16,
              1
            ],
            [
              20,
              3
            ]
          ],
          "base": 1
        },
        "line-color": "#cbc6b7"
      }
    },
    {
      "source-layer": "barrier_line",
      "interactive": true,
      "minzoom": 17,
      "layout": {
        "line-join": "round",
        "line-cap": "round",
        "visibility": "visible"
      },
      "filter": [
        "==",
        "class",
        "gate"
      ],
      "type": "line",
      "source": "composite",
      "id": "gates",
      "paint": {
        "line-dasharray": [
          1,
          2,
          5,
          2,
          1,
          2
        ],
        "line-opacity": 0.5,
        "line-width": {
          "stops": [
            [
              16,
              1
            ],
            [
              20,
              3
            ]
          ],
          "base": 1
        },
        "line-color": "#cbc6b7"
      }
    },
    {
      "source-layer": "admin",
      "interactive": true,
      "layout": {
        "line-join": "bevel",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444934295202.7542"
      },
      "filter": [
        "all",
        [
          ">=",
          "admin_level",
          3
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "admin-3-4-boundaries-bg",
      "paint": {
        "line-blur": {
          "stops": [
            [
              3,
              0
            ],
            [
              8,
              3
            ]
          ],
          "base": 1
        },
        "line-translate": [
          0,
          0
        ],
        "line-dasharray": [
          1,
          0
        ],
        "line-opacity": {
          "stops": [
            [
              7,
              0
            ],
            [
              8,
              0.75
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              3,
              3.5
            ],
            [
              10,
              8
            ]
          ],
          "base": 1
        },
        "line-color": {
          "stops": [
            [
              8,
              "#ede9d9"
            ],
            [
              16,
              "#f6e8e1"
            ]
          ],
          "base": 1
        }
      }
    },
    {
      "source-layer": "admin",
      "paint": {
        "line-blur": {
          "stops": [
            [
              3,
              0
            ],
            [
              10,
              2
            ]
          ],
          "base": 1
        },
        "line-translate": [
          0,
          0
        ],
        "line-opacity": {
          "stops": [
            [
              3,
              0
            ],
            [
              4,
              0.5
            ]
          ],
          "base": 1
        },
        "line-color": {
          "stops": [
            [
              6,
              "#ede9d9"
            ],
            [
              8,
              "#f6e8e1"
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              3,
              3.5
            ],
            [
              10,
              10
            ]
          ],
          "base": 1
        }
      },
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "line-cap": "butt",
        "line-join": "miter",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444934295202.7542"
      },
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "admin-2-boundaries-bg"
    },
    {
      "source-layer": "admin",
      "interactive": true,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444934295202.7542"
      },
      "filter": [
        "all",
        [
          ">=",
          "admin_level",
          3
        ],
        [
          "==",
          "maritime",
          0
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "admin-3-4-boundaries",
      "paint": {
        "line-color": {
          "stops": [
            [
              3,
              "#c3bfcc"
            ],
            [
              7,
              "#aba8b3"
            ]
          ],
          "base": 1
        },
        "line-opacity": {
          "stops": [
            [
              2,
              0
            ],
            [
              3,
              1
            ]
          ],
          "base": 1
        },
        "line-width": {
          "stops": [
            [
              7,
              0.75
            ],
            [
              12,
              1.5
            ]
          ],
          "base": 1
        },
        "line-dasharray": {
          "stops": [
            [
              6,
              [
                2,
                0
              ]
            ],
            [
              7,
              [
                2,
                2,
                6,
                2
              ]
            ]
          ],
          "base": 1
        }
      }
    },
    {
      "source-layer": "admin",
      "paint": {
        "line-width": {
          "stops": [
            [
              3,
              0.5
            ],
            [
              10,
              2
            ]
          ],
          "base": 1
        },
        "line-color": "#787680"
      },
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444934295202.7542"
      },
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ],
        [
          "==",
          "disputed",
          0
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "admin-2-boundaries"
    },
    {
      "source-layer": "admin",
      "paint": {
        "line-width": {
          "stops": [
            [
              3,
              0.5
            ],
            [
              10,
              2
            ]
          ],
          "base": 1
        },
        "line-color": "#787680",
        "line-dasharray": [
          1.5,
          1.5
        ]
      },
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "line-join": "round",
        "line-cap": "butt",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444934295202.7542"
      },
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "==",
          "maritime",
          0
        ],
        [
          "==",
          "disputed",
          1
        ]
      ],
      "type": "line",
      "source": "composite",
      "id": "admin-2-boundaries-dispute"
    },
    {
      "source-layer": "contour",
      "paint": {
        "line-color": "#66601a",
        "line-opacity": 0.07
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444933837268.9458"
      },
      "filter": [
        "!in",
        "index",
        5,
        10
      ],
      "type": "line",
      "source": "composite",
      "id": "contour"
    },
    {
      "source-layer": "contour",
      "paint": {
        "line-color": "#66601a",
        "line-opacity": 0.12
      },
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444933837268.9458"
      },
      "filter": [
        "in",
        "index",
        5,
        10
      ],
      "type": "line",
      "source": "composite",
      "id": "contour-index"
    },
    {
      "interactive": true,
      "paint": {
        "text-halo-blur": 0,
        "text-halo-width": 1.5,
        "text-halo-color": "#e8e0cc",
        "text-color": "#b2aca5"
      },
      "layout": {
        "text-size": 9.5,
        "text-max-width": 7,
        "text-padding": 4,
        "symbol-placement": "point",
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{house_num}",
        "visibility": "visible"
      },
      "minzoom": 17,
      "source-layer": "housenum_label",
      "source": "composite",
      "type": "symbol",
      "id": "housenum-label"
    },
    {
      "source-layer": "contour",
      "interactive": true,
      "minzoom": 14,
      "layout": {
        "text-size": 9.5,
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-padding": 5,
        "visibility": "visible",
        "text-max-angle": 25,
        "symbol-placement": "line",
        "text-field": "{ele} m"
      },
      "filter": [
        "in",
        "index",
        5,
        10
      ],
      "type": "symbol",
      "source": "composite",
      "id": "contour-index-label",
      "paint": {
        "text-halo-color": "rgba(237,233,217, 0.25)",
        "text-halo-blur": 1,
        "text-halo-width": 1,
        "text-color": "#a7a696"
      }
    },
    {
      "source-layer": "waterway_label",
      "interactive": true,
      "minzoom": 12,
      "layout": {
        "text-size": {
          "stops": [
            [
              13,
              12
            ],
            [
              18,
              16
            ]
          ],
          "base": 1
        },
        "text-max-angle": 30,
        "symbol-placement": "line",
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "visibility": "visible",
        "text-field": "{name_en}"
      },
      "filter": [
        "==",
        "class",
        "river"
      ],
      "type": "symbol",
      "source": "composite",
      "id": "waterway-label",
      "paint": {
        "text-halo-blur": 0.5,
        "text-color": "#004087",
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.5
      }
    },
    {
      "source-layer": "poi_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#65513d"
      },
      "interactive": true,
      "minzoom": 17,
      "layout": {
        "text-max-width": 8,
        "text-letter-spacing": 0.02,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "icon-image": "{maki}-11",
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933456003.5437"
      },
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "==",
          "scalerank",
          4
        ],
        [
          ">=",
          "localrank",
          15
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "poi-scalerank4-l15"
    },
    {
      "source-layer": "poi_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#65513d"
      },
      "interactive": true,
      "minzoom": 16,
      "layout": {
        "text-max-width": 8,
        "text-letter-spacing": 0.02,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "icon-image": "{maki}-11",
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "symbol-placement": "point",
        "text-padding": 1,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933456003.5437"
      },
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "==",
          "scalerank",
          4
        ],
        [
          "<=",
          "localrank",
          14
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "poi-scalerank4-l1"
    },
    {
      "source-layer": "poi_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#4c661f"
      },
      "interactive": true,
      "minzoom": 16,
      "layout": {
        "text-max-width": 8,
        "text-letter-spacing": 0.02,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "icon-image": "{maki}-11",
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "symbol-placement": "point",
        "text-padding": 1,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933456003.5437"
      },
      "filter": [
        "all",
        [
          "in",
          "maki",
          "park",
          "cemetery",
          "golf",
          "zoo",
          "playground"
        ],
        [
          "==",
          "scalerank",
          4
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "poi-parks_scalerank4"
    },
    {
      "source-layer": "poi_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#65513d"
      },
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "text-max-width": 8,
        "text-letter-spacing": 0.02,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "icon-image": "{maki}-11",
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "symbol-placement": "point",
        "text-padding": 1,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933372896.5967"
      },
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "==",
          "scalerank",
          3
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "poi-scalerank3"
    },
    {
      "source-layer": "poi_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#4c661f"
      },
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "text-max-width": 8,
        "text-letter-spacing": 0.02,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "icon-image": "{maki}-11",
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933372896.5967"
      },
      "filter": [
        "all",
        [
          "in",
          "maki",
          "park",
          "cemetery",
          "golf",
          "zoo"
        ],
        [
          "==",
          "scalerank",
          3
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "poi-parks-scalerank3"
    },
    {
      "source-layer": "road_label",
      "paint": {
        "text-halo-blur": 1,
        "text-halo-width": 1.25,
        "text-halo-color": "#ffffff",
        "text-color": "#3a3836"
      },
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "text-letter-spacing": 0.01,
        "text-field": "{name_en}",
        "text-rotation-alignment": "map",
        "text-size": {
          "stops": [
            [
              15,
              10
            ],
            [
              20,
              13
            ]
          ],
          "base": 1
        },
        "text-ignore-placement": false,
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444933721429.3076"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "!in",
          "class",
          "motorway",
          "street_limited",
          "street",
          "trunk",
          "primary",
          "secondary",
          "tertiary",
          "link",
          "pedestrian"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "road-label-small"
    },
    {
      "source-layer": "road_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#3a3836"
      },
      "interactive": true,
      "minzoom": 11,
      "layout": {
        "text-letter-spacing": 0.01,
        "text-field": "{name_en}",
        "text-size": {
          "stops": [
            [
              11,
              10
            ],
            [
              20,
              14
            ]
          ],
          "base": 1
        },
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "symbol-placement": "line",
        "text-padding": 1,
        "visibility": "visible",
        "text-rotation-alignment": "map"
      },
      "metadata": {
        "mapbox:group": "1444933721429.3076"
      },
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "street",
          "street_limited",
          "link",
          "pedestrian"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "road-label-medium"
    },
    {
      "source-layer": "road_label",
      "interactive": true,
      "layout": {
        "text-letter-spacing": 0.01,
        "text-field": "{name_en}",
        "text-keep-upright": true,
        "text-rotation-alignment": "map",
        "visibility": "visible",
        "text-size": {
          "stops": [
            [
              9,
              10
            ],
            [
              20,
              16
            ]
          ],
          "base": 1
        },
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-max-angle": 30,
        "symbol-spacing": 250,
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "symbol-placement": "line",
        "text-padding": 1
      },
      "metadata": {
        "mapbox:group": "1444933721429.3076"
      },
      "filter": [
        "in",
        "class",
        "motorway",
        "trunk",
        "primary",
        "secondary",
        "tertiary"
      ],
      "type": "symbol",
      "source": "composite",
      "id": "road-label-large",
      "paint": {
        "text-halo-blur": 1,
        "text-halo-width": 1,
        "text-halo-color": "rgba(255,255,255, 0.75)",
        "text-color": "#3a3836"
      }
    },
    {
      "source-layer": "road_label",
      "interactive": true,
      "layout": {
        "icon-padding": 2,
        "text-letter-spacing": 0.05,
        "text-field": "{ref}",
        "text-rotation-alignment": "viewport",
        "visibility": "visible",
        "text-padding": 2,
        "symbol-placement": {
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ],
          "base": 1
        },
        "text-font": [
          "DIN Offc Pro Bold",
          "Arial Unicode MS Bold"
        ],
        "text-size": 9,
        "text-allow-overlap": false,
        "icon-image": "{shield}-{reflen}",
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": false,
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "symbol-spacing": {
          "stops": [
            [
              11,
              150
            ],
            [
              14,
              200
            ]
          ],
          "base": 1
        }
      },
      "metadata": {
        "mapbox:group": "1444933575858.6992"
      },
      "filter": [
        "all",
        [
          "!in",
          "shield",
          "us-interstate",
          "us-interstate-business",
          "us-interstate-duplex",
          "se-main",
          "at-expressway",
          "at-motorway",
          "at-state-b",
          "de-motorway",
          "ch-motorway",
          "ch-main",
          "e-road",
          "hu-main",
          "hu-motorway",
          "gr-motorway",
          "gr-national",
          "bg-motorway",
          "bg-national",
          "hr-motorway",
          "hr-state",
          "cz-motorway",
          "cz-expressway",
          "cz-road",
          "fi-main",
          "nz-state",
          "pl-motorway",
          "pl-expressway",
          "pl-national",
          "ro-motorway",
          "ro-national",
          "ro-county",
          "sk-highway",
          "sk-road",
          "si-motorway",
          "si-expressway",
          "za-metropolitan",
          "za-national",
          "za-provincial",
          "za-regional",
          "rs-motorway",
          "rs-state-1b"
        ],
        [
          "<=",
          "reflen",
          6
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "road-shields-black",
      "paint": {
        "text-halo-width": 0,
        "text-halo-color": "#ffffff",
        "icon-color": "white",
        "text-opacity": 1,
        "icon-halo-width": 1,
        "icon-halo-color": "rgba(0, 0, 0, 1)",
        "text-color": "#3a3836"
      }
    },
    {
      "source-layer": "road_label",
      "interactive": true,
      "layout": {
        "icon-padding": 2,
        "text-letter-spacing": 0.05,
        "text-field": "{ref}",
        "text-rotation-alignment": "viewport",
        "visibility": "visible",
        "text-padding": 2,
        "symbol-placement": {
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ],
          "base": 1
        },
        "text-font": [
          "DIN Offc Pro Bold",
          "Arial Unicode MS Bold"
        ],
        "text-size": 9,
        "text-allow-overlap": false,
        "icon-image": "{shield}-{reflen}",
        "icon-rotation-alignment": "viewport",
        "symbol-avoid-edges": false,
        "text-ignore-placement": false,
        "text-max-angle": 38,
        "symbol-spacing": {
          "stops": [
            [
              11,
              150
            ],
            [
              14,
              200
            ]
          ],
          "base": 1
        }
      },
      "metadata": {
        "mapbox:group": "1444933575858.6992"
      },
      "filter": [
        "all",
        [
          "in",
          "shield",
          "us-interstate",
          "us-interstate-business",
          "us-interstate-duplex",
          "se-main",
          "at-expressway",
          "at-motorway",
          "at-state-b",
          "de-motorway",
          "ch-motorway",
          "ch-main",
          "e-road",
          "hu-main",
          "hu-motorway",
          "gr-motorway",
          "gr-national",
          "bg-motorway",
          "bg-national",
          "hr-motorway",
          "hr-state",
          "cz-motorway",
          "cz-expressway",
          "cz-road",
          "fi-main",
          "nz-state",
          "pl-motorway",
          "pl-expressway",
          "pl-national",
          "ro-motorway",
          "ro-national",
          "ro-county",
          "sk-highway",
          "sk-road",
          "si-motorway",
          "si-expressway",
          "za-metropolitan",
          "za-national",
          "za-provincial",
          "za-regional",
          "rs-motorway",
          "rs-state-1b"
        ],
        [
          "<=",
          "reflen",
          6
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "road-shields-white",
      "paint": {
        "text-halo-width": 0,
        "text-halo-color": "#ffffff",
        "icon-color": "white",
        "text-opacity": 1,
        "icon-halo-width": 1,
        "icon-halo-color": "rgba(0, 0, 0, 1)",
        "text-color": "#fff"
      }
    },
    {
      "source-layer": "poi_label",
      "paint": {
        "text-halo-width": 1.25,
        "text-halo-color": "#ffffff",
        "text-color": "#65513d"
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "text-max-width": 8,
        "text-letter-spacing": 0.02,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              14,
              "{maki}-11"
            ],
            [
              15,
              "{maki}-15"
            ]
          ]
        },
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              14,
              11
            ],
            [
              20,
              14
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1.25
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933358918.2366"
      },
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "==",
          "scalerank",
          2
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "poi-scalerank2"
    },
    {
      "source-layer": "poi_label",
      "paint": {
        "text-halo-width": 1.25,
        "text-halo-color": "#ffffff",
        "text-color": "#4c661f"
      },
      "interactive": true,
      "minzoom": 13,
      "layout": {
        "text-max-width": 8,
        "text-letter-spacing": 0.02,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              14,
              "{maki}-11"
            ],
            [
              15,
              "{maki}-15"
            ]
          ]
        },
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              14,
              11
            ],
            [
              20,
              14
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1.25
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933358918.2366"
      },
      "filter": [
        "all",
        [
          "in",
          "maki",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "==",
          "scalerank",
          2
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "poi-parks-scalerank2"
    },
    {
      "source-layer": "rail_station_label",
      "paint": {
        "text-opacity": {
          "stops": [
            [
              13.99,
              0
            ],
            [
              14,
              1
            ]
          ],
          "base": 1
        },
        "icon-halo-color": "#fff",
        "icon-halo-width": 4,
        "text-halo-width": 1.5,
        "text-halo-color": "#ffffff",
        "text-color": "#65513d"
      },
      "id": "rail-label",
      "source": "composite",
      "type": "symbol",
      "layout": {
        "text-max-width": 7,
        "icon-padding": 0,
        "text-letter-spacing": 0.02,
        "text-field": {
          "stops": [
            [
              0,
              ""
            ],
            [
              13,
              "{name_en}"
            ]
          ],
          "base": 1
        },
        "text-anchor": "top",
        "text-rotation-alignment": "viewport",
        "text-offset": [
          0,
          1
        ],
        "visibility": "visible",
        "text-size": {
          "stops": [
            [
              16,
              11
            ],
            [
              20,
              13
            ]
          ],
          "base": 1
        },
        "icon-image": "{network}",
        "symbol-avoid-edges": true,
        "symbol-spacing": 250,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "icon-allow-overlap": false,
        "symbol-placement": "point",
        "text-justify": "center"
      },
      "minzoom": 12,
      "interactive": true
    },
    {
      "source-layer": "water_label",
      "paint": {
        "text-halo-blur": 1.5,
        "text-color": "#004087",
        "text-halo-color": "#ffffff",
        "text-halo-width": 0
      },
      "interactive": true,
      "minzoom": 15,
      "layout": {
        "text-size": {
          "stops": [
            [
              16,
              13
            ],
            [
              20,
              16
            ]
          ],
          "base": 1
        },
        "text-max-width": 7,
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "visibility": "visible",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933808272.805"
      },
      "filter": [
        "<=",
        "area",
        10000
      ],
      "type": "symbol",
      "source": "composite",
      "id": "water-label-sm"
    },
    {
      "source-layer": "water_label",
      "paint": {
        "text-halo-blur": 1.5,
        "text-color": "#004087",
        "text-halo-color": "#ffffff",
        "text-halo-width": 0
      },
      "interactive": true,
      "minzoom": 5,
      "layout": {
        "text-size": {
          "stops": [
            [
              13,
              13
            ],
            [
              18,
              18
            ]
          ],
          "base": 1
        },
        "text-max-width": 7,
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "visibility": "visible",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933808272.805"
      },
      "filter": [
        ">",
        "area",
        10000
      ],
      "type": "symbol",
      "source": "composite",
      "id": "water-label"
    },
    {
      "source-layer": "poi_label",
      "interactive": true,
      "layout": {
        "text-max-width": 8,
        "text-letter-spacing": 0.02,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              13,
              "{maki}-11"
            ],
            [
              14,
              "{maki}-15"
            ]
          ]
        },
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              10,
              11
            ],
            [
              18,
              14
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933322393.2852"
      },
      "filter": [
        "all",
        [
          "in",
          "maki",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "<=",
          "scalerank",
          1
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "poi-parks-scalerank1",
      "paint": {
        "text-halo-blur": 0,
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#4c661f"
      }
    },
    {
      "source-layer": "poi_label",
      "interactive": true,
      "layout": {
        "text-max-width": 8,
        "text-letter-spacing": 0.02,
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "icon-image": {
          "stops": [
            [
              13,
              "{maki}-11"
            ],
            [
              14,
              "{maki}-15"
            ]
          ]
        },
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              10,
              11
            ],
            [
              18,
              14
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "symbol-placement": "point",
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          1
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "top",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444933322393.2852"
      },
      "filter": [
        "all",
        [
          "!in",
          "maki",
          "park",
          "golf",
          "cemetery",
          "zoo",
          "campsite",
          "swimming",
          "dog-park"
        ],
        [
          "<=",
          "scalerank",
          1
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "poi-scalerank1",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#65513d"
      }
    },
    {
      "source-layer": "airport_label",
      "interactive": true,
      "minzoom": 9,
      "layout": {
        "text-max-width": 9,
        "text-letter-spacing": 0.02,
        "text-field": {
          "stops": [
            [
              12,
              "{ref}"
            ],
            [
              13,
              "{name_en}"
            ]
          ]
        },
        "text-anchor": "top",
        "text-rotation-alignment": "viewport",
        "icon-optional": false,
        "text-offset": {
          "stops": [
            [
              12,
              [
                0,
                1
              ]
            ],
            [
              13,
              [
                0,
                1.25
              ]
            ]
          ],
          "base": 1
        },
        "visibility": "visible",
        "text-size": {
          "stops": [
            [
              10,
              12
            ],
            [
              18,
              18
            ]
          ],
          "base": 1
        },
        "text-allow-overlap": false,
        "icon-image": {
          "stops": [
            [
              12,
              "{maki}-11"
            ],
            [
              13,
              "{maki}-15"
            ]
          ]
        },
        "text-ignore-placement": false,
        "symbol-spacing": 250,
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "symbol-placement": "point",
        "text-padding": 2
      },
      "filter": [
        "<=",
        "scalerank",
        2
      ],
      "type": "symbol",
      "source": "composite",
      "id": "airport-label",
      "paint": {
        "text-halo-width": 1.25,
        "text-halo-color": "#ffffff",
        "text-color": "#000000"
      }
    },
    {
      "source-layer": "place_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#65513d"
      },
      "id": "place-islets",
      "source": "composite",
      "type": "symbol",
      "filter": [
        "==",
        "type",
        "islet"
      ],
      "layout": {
        "text-max-width": 8,
        "symbol-placement": "point",
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              10,
              11
            ],
            [
              14,
              16
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          0
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "center",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02
      },
      "interactive": true
    },
    {
      "source-layer": "place_label",
      "paint": {
        "text-halo-blur": 0,
        "text-color": "#805540",
        "text-halo-width": 1.75,
        "text-halo-color": "rgba(255,255,255, 0.5)"
      },
      "interactive": true,
      "minzoom": 10,
      "layout": {
        "text-size": {
          "stops": [
            [
              12,
              11
            ],
            [
              16,
              16
            ]
          ],
          "base": 1
        },
        "text-padding": 3,
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-max-width": 7,
        "text-letter-spacing": 0.1,
        "text-transform": "uppercase",
        "text-field": "{name_en}",
        "visibility": "visible"
      },
      "maxzoom": 16,
      "filter": [
        "==",
        "type",
        "neighbourhood"
      ],
      "type": "symbol",
      "source": "composite",
      "id": "place-neighbourhood"
    },
    {
      "source-layer": "place_label",
      "paint": {
        "text-color": "#805540",
        "text-halo-width": 1.75,
        "text-halo-color": "rgba(255,255,255, 0.5)"
      },
      "interactive": true,
      "minzoom": 10,
      "layout": {
        "text-size": {
          "stops": [
            [
              11,
              11
            ],
            [
              15,
              18
            ]
          ],
          "base": 1
        },
        "text-padding": 3,
        "text-max-width": 7,
        "text-letter-spacing": 0.15,
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-transform": "uppercase",
        "text-field": "{name_en}",
        "visibility": "visible"
      },
      "maxzoom": 16,
      "filter": [
        "==",
        "type",
        "suburb"
      ],
      "type": "symbol",
      "source": "composite",
      "id": "place-suburb"
    },
    {
      "source-layer": "place_label",
      "paint": {
        "text-color": "#000000",
        "text-halo-width": 1.25,
        "text-halo-color": "#ffffff"
      },
      "interactive": true,
      "minzoom": 10,
      "layout": {
        "text-size": {
          "stops": [
            [
              12,
              11.5
            ],
            [
              15,
              16
            ]
          ],
          "base": 1
        },
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name_en}",
        "visibility": "visible"
      },
      "maxzoom": 16,
      "filter": [
        "==",
        "type",
        "hamlet"
      ],
      "type": "symbol",
      "source": "composite",
      "id": "place-hamlet"
    },
    {
      "source-layer": "place_label",
      "paint": {
        "text-color": "#000000",
        "text-halo-width": 1.25,
        "text-halo-color": "#ffffff"
      },
      "interactive": true,
      "minzoom": 8,
      "layout": {
        "text-size": {
          "stops": [
            [
              10,
              11.5
            ],
            [
              16,
              18
            ]
          ],
          "base": 1
        },
        "text-max-width": 7,
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "text-field": "{name_en}",
        "visibility": "visible"
      },
      "maxzoom": 15,
      "filter": [
        "==",
        "type",
        "village"
      ],
      "type": "symbol",
      "source": "composite",
      "id": "place-village"
    },
    {
      "source-layer": "place_label",
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ],
          "base": 1
        },
        "text-halo-width": 1.25,
        "text-halo-color": "#ffffff",
        "text-color": "#000000"
      },
      "interactive": true,
      "minzoom": 6,
      "layout": {
        "text-size": {
          "stops": [
            [
              7,
              11.5
            ],
            [
              15,
              20
            ]
          ],
          "base": 1
        },
        "text-max-width": 7,
        "text-field": "{name_en}",
        "text-anchor": {
          "stops": [
            [
              7,
              "bottom"
            ],
            [
              8,
              "center"
            ]
          ],
          "base": 1
        },
        "text-offset": {
          "stops": [
            [
              7,
              [
                0,
                -0.15
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ],
          "base": 1
        },
        "visibility": "visible",
        "text-font": {
          "stops": [
            [
              11,
              [
                "DIN Offc Pro Regular",
                "Arial Unicode MS Regular"
              ]
            ],
            [
              12,
              [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Regular"
              ]
            ]
          ],
          "base": 1
        },
        "icon-image": "dot-9"
      },
      "maxzoom": 15,
      "filter": [
        "==",
        "type",
        "town"
      ],
      "type": "symbol",
      "source": "composite",
      "id": "place-town"
    },
    {
      "source-layer": "place_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#65513d"
      },
      "id": "place-islands",
      "source": "composite",
      "type": "symbol",
      "filter": [
        "==",
        "type",
        "island"
      ],
      "layout": {
        "text-max-width": 7,
        "symbol-placement": "point",
        "text-font": [
          "DIN Offc Pro Regular",
          "Arial Unicode MS Regular"
        ],
        "symbol-spacing": 250,
        "text-max-angle": 38,
        "text-ignore-placement": false,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              10,
              11
            ],
            [
              18,
              16
            ]
          ],
          "base": 1
        },
        "text-line-height": 1.2,
        "text-padding": 2,
        "visibility": "visible",
        "text-offset": [
          0,
          0
        ],
        "icon-optional": false,
        "text-rotation-alignment": "viewport",
        "text-anchor": "center",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.02
      },
      "interactive": true
    },
    {
      "source-layer": "place_label",
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ],
          "base": 1
        },
        "text-halo-width": 1.25,
        "text-halo-color": "#ffffff",
        "text-color": "#000000"
      },
      "interactive": true,
      "layout": {
        "text-max-width": 7,
        "text-size": {
          "stops": [
            [
              6,
              12
            ],
            [
              14,
              22
            ]
          ],
          "base": 1
        },
        "icon-image": "dot-9",
        "text-transform": "none",
        "text-font": {
          "stops": [
            [
              7,
              [
                "DIN Offc Pro Regular",
                "Arial Unicode MS Regular"
              ]
            ],
            [
              8,
              [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Regular"
              ]
            ]
          ],
          "base": 1
        },
        "visibility": "visible",
        "text-offset": {
          "stops": [
            [
              7.99,
              [
                0,
                -0.2
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ],
          "base": 1
        },
        "text-anchor": {
          "stops": [
            [
              7,
              "bottom"
            ],
            [
              8,
              "center"
            ]
          ],
          "base": 1
        },
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444862510685.128"
      },
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "!in",
          "scalerank",
          0,
          1,
          2,
          3,
          4,
          5
        ],
        [
          "==",
          "type",
          "city"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "place-city-sm"
    },
    {
      "source-layer": "place_label",
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ],
          "base": 1
        },
        "text-halo-blur": 1,
        "text-color": "#000000",
        "text-halo-color": "#ffffff",
        "text-halo-width": 1
      },
      "interactive": true,
      "layout": {
        "text-size": {
          "stops": [
            [
              5,
              12
            ],
            [
              12,
              22
            ]
          ],
          "base": 0.9
        },
        "text-font": {
          "stops": [
            [
              7,
              [
                "DIN Offc Pro Regular",
                "Arial Unicode MS Regular"
              ]
            ],
            [
              8,
              [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Regular"
              ]
            ]
          ],
          "base": 1
        },
        "text-offset": {
          "stops": [
            [
              7.99,
              [
                0,
                0.1
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ],
          "base": 1
        },
        "text-anchor": {
          "stops": [
            [
              7,
              "top"
            ],
            [
              8,
              "center"
            ]
          ],
          "base": 1
        },
        "icon-image": "dot-10",
        "text-field": "{name_en}",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444862510685.128"
      },
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "in",
          "scalerank",
          3,
          4,
          5
        ],
        [
          "==",
          "type",
          "city"
        ],
        [
          "in",
          "ldir",
          "S",
          "SE",
          "SW",
          "E"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "place-city-md-s"
    },
    {
      "source-layer": "place_label",
      "paint": {
        "text-halo-blur": 1,
        "icon-opacity": {
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ],
          "base": 1
        },
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#000000"
      },
      "interactive": true,
      "layout": {
        "text-size": {
          "stops": [
            [
              5,
              12
            ],
            [
              12,
              22
            ]
          ],
          "base": 0.9
        },
        "text-max-width": 7,
        "text-field": "{name_en}",
        "text-anchor": {
          "stops": [
            [
              7,
              "bottom"
            ],
            [
              8,
              "center"
            ]
          ],
          "base": 1
        },
        "text-offset": {
          "stops": [
            [
              7.99,
              [
                0,
                -0.25
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ],
          "base": 1
        },
        "visibility": "visible",
        "text-font": {
          "stops": [
            [
              7,
              [
                "DIN Offc Pro Regular",
                "Arial Unicode MS Regular"
              ]
            ],
            [
              8,
              [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Regular"
              ]
            ]
          ],
          "base": 1
        },
        "icon-image": "dot-10"
      },
      "metadata": {
        "mapbox:group": "1444862510685.128"
      },
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "in",
          "scalerank",
          3,
          4,
          5
        ],
        [
          "==",
          "type",
          "city"
        ],
        [
          "in",
          "ldir",
          "N",
          "NE",
          "NW",
          "W"
        ]
      ],
      "type": "symbol",
      "source": "composite",
      "id": "place-city-md-n"
    },
    {
      "source-layer": "place_label",
      "paint": {
        "text-halo-blur": 1,
        "icon-opacity": {
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ],
          "base": 1
        },
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#000000"
      },
      "id": "place-city-lg-s",
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "text-size": {
          "stops": [
            [
              4,
              12
            ],
            [
              10,
              22
            ]
          ],
          "base": 0.9
        },
        "text-max-width": 7,
        "text-field": "{name_en}",
        "text-anchor": {
          "stops": [
            [
              7,
              "top"
            ],
            [
              8,
              "center"
            ]
          ],
          "base": 1
        },
        "text-offset": {
          "stops": [
            [
              7.99,
              [
                0,
                0.15
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ],
          "base": 1
        },
        "visibility": "visible",
        "text-font": {
          "stops": [
            [
              7,
              [
                "DIN Offc Pro Regular",
                "Arial Unicode MS Regular"
              ]
            ],
            [
              8,
              [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Regular"
              ]
            ]
          ],
          "base": 1
        },
        "icon-image": "dot-11"
      },
      "metadata": {
        "mapbox:group": "1444862510685.128"
      },
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "<=",
          "scalerank",
          2
        ],
        [
          "==",
          "type",
          "city"
        ],
        [
          "in",
          "ldir",
          "S",
          "SE",
          "SW",
          "E"
        ]
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "place_label",
      "paint": {
        "text-halo-blur": 1,
        "icon-opacity": {
          "stops": [
            [
              7.99,
              1
            ],
            [
              8,
              0
            ]
          ],
          "base": 1
        },
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-opacity": 1,
        "text-color": "#000000"
      },
      "id": "place-city-lg-n",
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "text-size": {
          "stops": [
            [
              4,
              12
            ],
            [
              10,
              22
            ]
          ],
          "base": 0.9
        },
        "text-max-width": 7,
        "text-field": "{name_en}",
        "text-anchor": {
          "stops": [
            [
              7,
              "bottom"
            ],
            [
              8,
              "center"
            ]
          ],
          "base": 1
        },
        "text-offset": {
          "stops": [
            [
              7.99,
              [
                0,
                -0.25
              ]
            ],
            [
              8,
              [
                0,
                0
              ]
            ]
          ],
          "base": 1
        },
        "visibility": "visible",
        "text-font": {
          "stops": [
            [
              7,
              [
                "DIN Offc Pro Regular",
                "Arial Unicode MS Regular"
              ]
            ],
            [
              8,
              [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Regular"
              ]
            ]
          ],
          "base": 1
        },
        "icon-image": "dot-11"
      },
      "metadata": {
        "mapbox:group": "1444862510685.128"
      },
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "<=",
          "scalerank",
          2
        ],
        [
          "==",
          "type",
          "city"
        ],
        [
          "in",
          "ldir",
          "N",
          "NE",
          "NW",
          "W"
        ]
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "marine_label",
      "paint": {
        "text-color": "#c8e5f9"
      },
      "id": "marine-label-sm-ln",
      "interactive": true,
      "minzoom": 3,
      "layout": {
        "text-max-width": 5,
        "text-line-height": 1.1,
        "text-size": {
          "stops": [
            [
              3,
              12
            ],
            [
              6,
              16
            ]
          ],
          "base": 1
        },
        "symbol-spacing": {
          "stops": [
            [
              4,
              100
            ],
            [
              6,
              400
            ]
          ],
          "base": 1
        },
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "symbol-placement": "line",
        "visibility": "visible",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.1
      },
      "metadata": {
        "mapbox:group": "1444856087950.3635"
      },
      "maxzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          ">=",
          "labelrank",
          4
        ]
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "marine_label",
      "paint": {
        "text-color": "#c8e5f9"
      },
      "id": "marine-label-sm-pt",
      "interactive": true,
      "minzoom": 3,
      "layout": {
        "text-size": {
          "stops": [
            [
              3,
              12
            ],
            [
              6,
              16
            ]
          ],
          "base": 1
        },
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "symbol-placement": "point",
        "text-line-height": 1.5,
        "text-letter-spacing": 0.1,
        "text-max-width": 5,
        "text-field": "{name_en}",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444856087950.3635"
      },
      "maxzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          ">=",
          "labelrank",
          4
        ]
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "marine_label",
      "paint": {
        "text-color": "#c8e5f9"
      },
      "id": "marine-label-md-ln",
      "interactive": true,
      "minzoom": 2,
      "layout": {
        "text-max-width": 5,
        "text-line-height": 1.1,
        "text-size": {
          "stops": [
            [
              2,
              12
            ],
            [
              5,
              20
            ]
          ],
          "base": 1.1
        },
        "symbol-spacing": 250,
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "symbol-placement": "line",
        "visibility": "visible",
        "text-field": "{name_en}",
        "text-letter-spacing": 0.15
      },
      "metadata": {
        "mapbox:group": "1444856087950.3635"
      },
      "maxzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "labelrank",
          2,
          3
        ]
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "marine_label",
      "paint": {
        "text-color": "#c8e5f9"
      },
      "id": "marine-label-md-pt",
      "interactive": true,
      "minzoom": 2,
      "layout": {
        "text-size": {
          "stops": [
            [
              2,
              14
            ],
            [
              5,
              20
            ]
          ],
          "base": 1.1
        },
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "text-line-height": 1.5,
        "text-letter-spacing": 0.15,
        "text-max-width": 5,
        "text-field": "{name_en}",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444856087950.3635"
      },
      "maxzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "in",
          "labelrank",
          2,
          3
        ]
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "marine_label",
      "paint": {
        "text-color": "#c8e5f9"
      },
      "id": "marine-label-lg-ln",
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "text-size": {
          "stops": [
            [
              1,
              14
            ],
            [
              4,
              30
            ]
          ],
          "base": 1
        },
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "symbol-placement": "line",
        "text-line-height": 1.1,
        "text-letter-spacing": 0.25,
        "text-max-width": 4,
        "text-field": "{name_en}",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444856087950.3635"
      },
      "maxzoom": 4,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "==",
          "labelrank",
          1
        ]
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "marine_label",
      "paint": {
        "text-color": "#c8e5f9"
      },
      "id": "marine-label-lg-pt",
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "text-size": {
          "stops": [
            [
              1,
              14
            ],
            [
              4,
              30
            ]
          ],
          "base": 1
        },
        "text-font": [
          "DIN Offc Pro Italic",
          "Arial Unicode MS Regular"
        ],
        "text-line-height": 1.5,
        "text-letter-spacing": 0.25,
        "text-max-width": 4,
        "text-field": "{name_en}",
        "visibility": "visible"
      },
      "metadata": {
        "mapbox:group": "1444856087950.3635"
      },
      "maxzoom": 4,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "labelrank",
          1
        ]
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "state_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#242424",
        "text-opacity": 1
      },
      "id": "state-label-sm",
      "interactive": true,
      "minzoom": 3,
      "layout": {
        "text-max-width": 5,
        "text-size": {
          "stops": [
            [
              6,
              10
            ],
            [
              9,
              14
            ]
          ],
          "base": 1
        },
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-transform": "uppercase",
        "text-font": [
          "DIN Offc Pro Bold",
          "Arial Unicode MS Bold"
        ],
        "visibility": "visible",
        "text-field": {
          "stops": [
            [
              0,
              "{abbr}"
            ],
            [
              6,
              "{name_en}"
            ]
          ],
          "base": 1
        },
        "text-letter-spacing": 0.15
      },
      "metadata": {
        "mapbox:group": "1444856151690.9143"
      },
      "maxzoom": 9,
      "filter": [
        "<",
        "area",
        20000
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "state_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#242424",
        "text-opacity": 1
      },
      "id": "state-label-md",
      "interactive": true,
      "minzoom": 3,
      "layout": {
        "text-max-width": 6,
        "text-size": {
          "stops": [
            [
              5,
              10
            ],
            [
              8,
              16
            ]
          ],
          "base": 1
        },
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-transform": "uppercase",
        "text-font": [
          "DIN Offc Pro Bold",
          "Arial Unicode MS Bold"
        ],
        "visibility": "visible",
        "text-field": {
          "stops": [
            [
              0,
              "{abbr}"
            ],
            [
              5,
              "{name_en}"
            ]
          ],
          "base": 1
        },
        "text-letter-spacing": 0.15
      },
      "metadata": {
        "mapbox:group": "1444856151690.9143"
      },
      "maxzoom": 8,
      "filter": [
        "all",
        [
          "<",
          "area",
          80000
        ],
        [
          ">=",
          "area",
          20000
        ]
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "state_label",
      "paint": {
        "text-halo-width": 1,
        "text-halo-color": "#ffffff",
        "text-color": "#242424",
        "text-opacity": 1
      },
      "id": "state-label-lg",
      "interactive": true,
      "minzoom": 3,
      "layout": {
        "text-max-width": 6,
        "text-letter-spacing": 0.15,
        "text-size": {
          "stops": [
            [
              4,
              10
            ],
            [
              7,
              18
            ]
          ],
          "base": 1
        },
        "text-allow-overlap": false,
        "text-ignore-placement": false,
        "text-transform": "uppercase",
        "text-font": [
          "DIN Offc Pro Bold",
          "Arial Unicode MS Bold"
        ],
        "text-padding": 1,
        "visibility": "visible",
        "text-field": {
          "stops": [
            [
              0,
              "{abbr}"
            ],
            [
              4,
              "{name_en}"
            ]
          ],
          "base": 1
        }
      },
      "metadata": {
        "mapbox:group": "1444856151690.9143"
      },
      "maxzoom": 7,
      "filter": [
        ">=",
        "area",
        80000
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "country_label",
      "paint": {
        "text-halo-width": 1.25,
        "text-halo-color": {
          "stops": [
            [
              2,
              "rgba(255,255,255,0.75)"
            ],
            [
              3,
              "#ffffff"
            ]
          ],
          "base": 1
        },
        "text-color": "#000000"
      },
      "id": "country-label-sm",
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "text-size": {
          "stops": [
            [
              5,
              14
            ],
            [
              9,
              22
            ]
          ],
          "base": 0.9
        },
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "text-max-width": 6,
        "visibility": "visible",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444856144497.7825"
      },
      "maxzoom": 10,
      "filter": [
        ">=",
        "scalerank",
        5
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "country_label",
      "paint": {
        "text-halo-width": 1.25,
        "text-halo-color": {
          "stops": [
            [
              2,
              "rgba(255,255,255,0.75)"
            ],
            [
              3,
              "#ffffff"
            ]
          ],
          "base": 1
        },
        "text-color": "#000000"
      },
      "id": "country-label-md",
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "text-size": {
          "stops": [
            [
              3,
              10
            ],
            [
              8,
              24
            ]
          ],
          "base": 1
        },
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "text-max-width": 6,
        "visibility": "visible",
        "text-field": {
          "stops": [
            [
              0,
              "{code}"
            ],
            [
              2,
              "{name_en}"
            ]
          ],
          "base": 1
        }
      },
      "metadata": {
        "mapbox:group": "1444856144497.7825"
      },
      "maxzoom": 8,
      "filter": [
        "in",
        "scalerank",
        3,
        4
      ],
      "type": "symbol",
      "source": "composite"
    },
    {
      "source-layer": "country_label",
      "paint": {
        "text-halo-width": 1.25,
        "text-halo-color": {
          "stops": [
            [
              2,
              "rgba(255,255,255,0.75)"
            ],
            [
              3,
              "#ffffff"
            ]
          ],
          "base": 1
        },
        "text-color": "#000000"
      },
      "id": "country-label-lg",
      "interactive": true,
      "minzoom": 1,
      "layout": {
        "text-size": {
          "stops": [
            [
              1,
              10
            ],
            [
              6,
              24
            ]
          ],
          "base": 1
        },
        "text-font": [
          "DIN Offc Pro Medium",
          "Arial Unicode MS Regular"
        ],
        "text-max-width": {
          "stops": [
            [
              0,
              5
            ],
            [
              3,
              6
            ]
          ],
          "base": 1
        },
        "visibility": "visible",
        "text-field": "{name_en}"
      },
      "metadata": {
        "mapbox:group": "1444856144497.7825"
      },
      "maxzoom": 7,
      "filter": [
        "in",
        "scalerank",
        1,
        2
      ],
      "type": "symbol",
      "source": "composite"
    }
  ],
  "created": 0
}
