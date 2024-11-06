import React, { useContext, useEffect } from 'react'

import { MenuContext } from '../../context/MenuContext'

function AdminMenu({ menu }: any) {
    const { changeMenu } = useContext(MenuContext)

    useEffect(() => {
        changeMenu(menu)
    }, [changeMenu, menu])

    return <></>
}

AdminMenu.schema = {
    title: 'Admin menú',
    type: 'object',
    properties: {
        submenus: {
            title: "Submenus Departamentos",
            type: "array",
            minItems: 0,
            maxItems: 10,
            items: {
                title: "Nombre Departamento",
                type: "object",
                properties: {
                    _editorItemTitle:{  
                        default:'Área Submenu',
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
                        title: "URL de página",
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
                        title: "Áreas",
                        type: "array",
                        items: {
                            title: "Área Item",
                            type: "object",
                            properties: {
                                _editorItemTitle:{
                                    default:'Área Item',
                                   title:"Nombre de item",
                                   type:"string"
                                },
                                titleSubMenu: {
                                    title: "Subtitulo",
                                    description: "",
                                    type: "string",
                                },
                                // images: {
                                //     title: "Categoria imagen",
                                //     type: "object",
                                //     properties: {
                                //         titleImg: {
                                //             title: "nombre img de Categoria",
                                //             description: "titulo",
                                //             type: "string",
                                //         },
                                //         urlImg: {
                                //             title: "url img de la Categoria",
                                //             description: "url",
                                //             type: "string",
                                //         },
                                //         icon: {
                                //             title: "categoria icon",
                                //             description: "Tamaño de la icon: 27x27px",
                                //             type: "string",
                                //             widget: {
                                //                 "ui:widget": "image-uploader",
                                //             },
                                //         }
                                //     },
                                // },
                                externalPage: {
                                    title: "Link Externo?",
                                    description: "",
                                    type: "boolean",
                                    default: false,
                                },
                                url: {
                                    title: "URL del área",
                                    description: "",
                                    type: "string",
                                },
                                links: {
                                    title: "Links SubMenu",
                                    description: "",
                                    type: "array",
                                    default: [],
                                    items: {
                                        title: "SubMenu Item",
                                        type: "object",
                                        properties: {
                                            _editorItemTitle:{
                                                default:'',
                                               title:"Nombre de submenu item",
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
            // menuCategories: {
            //     title: 'Menú nivel 1',
            //     type: 'array',
            //     items: {
            //         type: 'object',
            //         properties: {
            //             __editorItemTitle: {
            //                 title: 'Nombre del componente',
            //                 type: 'string',
            //             },
            //             isActive: {
            //                 title: '¿El ítem está activo?',
            //                 type: 'boolean',
            //                 default: true,
            //             },
            //             id: {
            //                 title: 'Identificador del ítem de menú nivel 1',
            //                 type: 'number',
            //             },
            //             name: {
            //                 title: 'Nombre del ítem de menú nivel 1',
            //                 type: 'string',
            //             },
            //             href: {
            //                 title: 'Link al que redirecciona el ítem de menú level 1',
            //                 type: 'string',
            //             },
            //             isHighlight: {
            //                 title: '¿El ítem de menú level 1 es destacado?',
            //                 type: 'boolean',
            //             },
            //             iconProps: {
            //                 title: "Icono del ítem de menú level 1",
            //                 type: 'object',
            //                 properties: {
            //                     id: {
            //                         title: 'Identificador del icono',
            //                         type: 'string',
            //                     },
            //                     size: {
            //                         title: 'Tamaño del icono',
            //                         type: "number",
            //                     },
            //                     viewBox: {
            //                         title: 'ViewBox del icono',
            //                         type: "string",
            //                     },
            //                     isActive: {
            //                         title: '¿El icono está activo?',
            //                         type: 'boolean',
            //                     },
            //                     activeClassName: {
            //                         title: 'Clase del icono activo',
            //                         type: 'string',
            //                     }
            //                 }
            //             },
            //             imageProps: {
            //                 title: 'Imagen destacada del ítem de menú level 2',
            //                 type: 'object',
            //                 properties: {
            //                     src: {
            //                         title: "Imagen del item",
            //                         widget: {
            //                             'ui:widget': 'image-uploader',
            //                         },
            //                     },
            //                     alt: {
            //                         title: "Alt de la imagen",
            //                         type: 'string'
            //                     },
            //                     link: {
            //                         title: 'Link al que redirige el producto',
            //                         type: 'object',
            //                         properties: {
            //                             url: {
            //                                 title: "Url de redirección",
            //                                 type: 'string',
            //                             },
            //                             newTab: {
            //                                 title: "¿Abrir en nueva pestaña?",
            //                                 type: 'boolean'
            //                             }
            //                         }
            //                     },
            //                 },
            //             },
            //             menuLevel2: {
            //                 title: 'Menu ítems nivel 2',
            //                 type: 'array',
            //                 items: {
            //                     type: 'object',
            //                     properties: {
            //                         __editorItemTitle: {
            //                             title: 'Nombre del componente',
            //                             type: 'string',
            //                         },
            //                         isActive: {
            //                             title: '¿El ítem está activo?',
            //                             type: 'boolean',
            //                             default: true,
            //                         },
            //                         id: {
            //                             title: 'Identificador del ítem de menú nivel 2',
            //                             type: 'number',
            //                         },
            //                         name: {
            //                             title: 'Nombre del ítem de menú nivel 2',
            //                             type: 'string',
            //                         },
            //                         href: {
            //                             title: 'Link al que redirecciona el ítem de menú level 2',
            //                             type: 'string',
            //                         },
            //                         isHighlight: {
            //                             title: '¿El ítem de menú level 2 es destacado?',
            //                             type: 'boolean',
            //                         },
            //                         menuLevel3: {
            //                             title: 'Menu ítems nivel 3',
            //                             type: 'array',
            //                             items: {
            //                                 type: 'object',
            //                                 properties: {
            //                                     __editorItemTitle: {
            //                                         title: 'Nombre del componente',
            //                                         type: 'string',
            //                                     },
            //                                     isActive: {
            //                                         title: '¿El ítem está activo?',
            //                                         type: 'boolean',
            //                                         default: true,
            //                                     },
            //                                     id: {
            //                                         title: 'Identificador del ítem de menú nivel 3',
            //                                         type: 'number',
            //                                     },
            //                                     name: {
            //                                         title: 'Nombre del ítem de menú nivel 3',
            //                                         type: 'string',
            //                                     },
            //                                     href: {
            //                                         title:
            //                                             'Link al que redirecciona el ítem de menú level 3',
            //                                         type: 'string',
            //                                     },
            //                                     isHighlight: {
            //                                         title: '¿El ítem de menú level 3 es destacado?',
            //                                         type: 'boolean',
            //                                     },
            //                                     isUnderline: {
            //                                         title: '¿El ítem de menú level 3 es subrayado?',
            //                                         type: 'boolean',
            //                                     }
            //                                 },
            //                             },
            //                         },
            //                     },
            //                 },
            //             },
            //         },
            //     },
            // },
        }
    },
}

export default AdminMenu