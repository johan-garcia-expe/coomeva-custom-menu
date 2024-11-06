import { string } from "prop-types";

export const SCHEMA = {
    title: "Sub menus bar",
    type: "object",
    properties: {
        links: {
            title: "Menú",
            type: "array",
            minItems: 0,
            maxItems: 20,
            items: {
                title: "Nombre Enlace",
                type: "object",
                properties: {
                    _editorItemTitle:{  
                        default:'',
                       title:"nombre de item",
                       type:"string"
                    },
                    externalPage: {
                        title: "Link Externo?",
                        description: "",
                        type: "boolean", 
                        default: false,
                    },
                    text: {
                        title: "Texto",
                        description: "",
                        type: "string",
                    },
                    page: {
                        title: "URL",
                        description: "",
                        type: "string",
                    },
                    checkIcon: {
                        title: "Icono Mobile",
                        description: "¿Tiene icono?",
                        type: "boolean",
                        default: false,
                    },
                    checkSubMenu: {
                        title: "Categoria",
                        description: "¿Tiene Categoria?",
                        type: "boolean",
                        default: false,
                    },
                    imageBanner: {
                        title: "Image Banner",
                        description: "Banner cuando el submenu tiene menos de 4 columnas",
                        type: "object",
                        properties: {
                            src: {
                                type: 'string',
                                title: 'URL',
                                description: 'URL de la imagen del banner'
                            },
                            alt: {
                                type: 'string',
                                title: 'Texto Alternativo del banner',
                            },
                            href: {
                                type: 'string',
                                title: 'Ruta de producto',
                                description: 'Redirección del banner'
                            }
                        },
                    },
                    subMenu: {
                        title: "Categoría SubMenu",
                        type: "array",
                        items: {
                            title: "Cabecera",
                            type: "object",
                            properties: {
                                _editorItemTitle:{
                                    default:'',
                                   title:"nombre de item",
                                   type:"string"
                                },
                                titleSubMenu: {
                                    title: "Título",
                                    description: "",
                                    type: "string",
                                },
                                images: {
                                    title: "Categoria imagen",
                                    type: "object",
                                    properties: {
                                        titleImg: {
                                            title: "nombre img de Categoria",
                                            description: "titulo",
                                            type: "string",
                                        },
                                        urlImg: {
                                            title: "url img de la Categoria",
                                            description: "url",
                                            type: "string",
                                        },
                                        icon: {
                                            title: "categoria icon",
                                            description: "Tamaño de la icon: 27x27px",
                                            type: "string",
                                            widget: {
                                                "ui:widget": "image-uploader",
                                            },
                                        }
                                    },
                                },
                                externalPage: {
                                    title: "Link Externo?",
                                    description: "",
                                    type: "boolean",
                                    default: false,
                                },
                                url: {
                                    title: "URL",
                                    description: "",
                                    type: "string",
                                },
                                checkSubMenu: {
                                    title: "SubCategoria",
                                    description: "¿Tiene SubCategoria?",
                                    type: "boolean",
                                    default: false,
                                },
                                links: {
                                    title: "Links SubMenu",
                                    description: "",
                                    type: "array",
                                    default: [],
                                    items: {
                                        title: "SubMenu Link 2",
                                        type: "object",
                                        properties: {
                                            _editorItemTitle:{
                                                default:'',
                                               title:"nombre de item",
                                               type:"string"
                                            },
                                            text: {
                                                title: "Texto",
                                                description: "",
                                                type: "string",
                                            },

                                            externalPage: {
                                                title: "¿Enlace externo?",
                                                description: "",
                                                type: "boolean",
                                                default: false,
                                            },
                                            page: {
                                                title: "URL",
                                                description: "",
                                                type: "string",
                                            }
                                        },
                                    },
                                },
                            },
                            default: {},
                        },
                        default: [],
                    },
                },
            },
        },
    },

}
