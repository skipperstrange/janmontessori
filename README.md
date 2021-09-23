# janmontessori

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Data Schemas and prop variables
```
Slides (Slider component)
[
    {
            "title": String,
            "subtitle": String,
            "img": String , // URL
            "link" :{ 
                "title": String ,
                "href":  String , // URL
            },
            "show": boolean
        }
]


section-title props
    title: String,
    icon: String
```

### Data sorces
```
Data sources can be found in the data folder and contain the basic schema for props required by most components.
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
