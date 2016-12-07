var _style = {
 "draft": false,
 "id": "sputnik-night",
 "owner": "mapbox",
 "modified": 0,
 "version": 8,
 "name": "Sputnik Night",
 "metadata": {},
 "sources": {
  "sputnik-mvt": {
   "type": "vector",
   "tiles": [
     // "http://grechkin-wks.int.pv.km:11000/{z}/{x}/{y}.mvt"
     "http://mvt-rasterizer-rasterizers-rasterizer.dev-maps-2.dev.search.km/{z}/{x}/{y}.mvt"
   ],
   "minzoom": 10,
   "maxzoom": 19
  }
 },
 "sprite": "/sprite/svg-ico-sprite",
 "glyphs": "/fonts/glyphs/{fontstack}/{range}.pbf",
 "layers": [
  {
   "interactive": true,
   "paint": {
    "background-color": "#383838"
   },
   "layout": {
    "visibility": "visible"
   },
   "type": "background",
   "id": "background"
  },
  {
   "source-layer": "way2",
   "interactive": true,
   "layout": {
    "line-join": "round",
    "line-cap": "round",
    "visibility": "visible"
   },
   "metadata": {},
   "filter": [
    "==",
    "highway",
    "primary"
   ],
   "type": "line",
   "source": "sputnik-mvt",
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
    "line-color": "#18D948",
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
   "source-layer": "way2",
   "interactive": true,
   "layout": {
    "line-join": "round",
    "line-cap": "round",
    "visibility": "visible"
   },
   "metadata": {},
   "filter": [
    "==",
    "highway",
    "secondary"
   ],
   "type": "line",
   "source": "sputnik-mvt",
   "id": "road-secondary-case",
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
      "id": "POI_Point",
      "type": "symbol",
      "source": "sputnik-mvt",
      "source-layer": "POI_Point",
      "layout": {
          "icon-image": "_vulkan",
          "text-font": [
              "unifont"
          ],
          "text-field": "{name}",
          "text-max-width": 9,
          "text-padding": 2,
          "text-offset": [
              0,
              1
          ],
          "text-anchor": "top",
          "text-size": 12
      },
      "paint": {
          "text-color": "#ffffff"
      }
  }
 ],
 "created": 0
};
