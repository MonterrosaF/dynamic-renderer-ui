import { NextResponse } from "next/server";

export async function GET() {
  const response = {
    components: [
      {
        type: "productCard",
        props: {
          productId: "MLA75004334351",
          children: {
            type: "hstack",
            props: {
              hover: true,
              className:
                "bg-white rounded-xl shadow-md overflow-hidden max-w-4xl",
              valign: "center",
              children: [
                {
                  type: "image",
                  props: {
                    src: "https://http2.mlstatic.com/D_NQ_NP_810466-MLA75004334351_032024-O.webp",
                    alt: "Celular TCL 503",
                    className: "w-1/3 object-cover",
                  },
                },
                {
                  type: "vstack",
                  props: {
                    className: "p-4 flex-1 space-y-2",
                    children: [
                      {
                        type: "vstack",
                        props: {
                          children: [
                            {
                              type: "subtitle",
                              props: {
                                text: "TCL",
                                className: "font-bold text-sm text-gray-800",
                                variant: "h3",
                              },
                            },
                            {
                              type: "title",
                              props: {
                                text: "Celular Tcl 503 Space Gray Rv Gris",
                                className: "text-lg text-gray-900",
                                variant: "h2",
                              },
                            },
                            {
                              type: "hstack",
                              props: {
                                className: "w-full gap-1",
                                valign: "center",
                                children: [
                                  {
                                    type: "description",
                                    props: {
                                      text: "Por Mercado Libre",
                                      className:
                                        "text-sm text-gray-500 flex items-center gap-1",
                                    },
                                  },
                                  {
                                    type: "icon",
                                    props: {
                                      icon: "CheckCircleIcon",
                                      className: "min-w-4 w-4 text-blue-500",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "vstack",
                        props: {
                          className: "w-full mt-2",
                          children: [
                            {
                              type: "hstack",
                              props: {
                                className: "w-full",
                                valign: "center",
                                halign: "between",
                                children: [
                                  {
                                    type: "price",
                                    props: {
                                      value: "174.999",
                                      currencyType: "USD",
                                      className:
                                        "line-through text-sm text-gray-400",
                                    },
                                  },
                                  {
                                    type: "rating",
                                    props: {
                                      score: 3.5,
                                      votes: 78,
                                      className: "text-sm text-gray-600",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: "hstack",
                              props: {
                                className: "w-full gap-4",
                                valign: "center",
                                children: [
                                  {
                                    type: "price",
                                    props: {
                                      value: "144.999",
                                      currencyType: "USD",
                                      className:
                                        "text-2xl font-semibold text-gray-900",
                                    },
                                  },
                                  {
                                    type: "discount",
                                    props: {
                                      text: "17% OFF",
                                      className:
                                        "text-green-600 text-sm font-semibold",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "installments",
                        props: {
                          text: "Mismo precio en 12 cuotas de $12.083",
                          className: "text-green-700 text-sm",
                        },
                      },
                      {
                        type: "shipping",
                        props: {
                          text: "Llega gratis mañana",
                          className:
                            "bg-green-100 text-green-700 text-sm px-2 py-1 rounded w-fit font-bold",
                        },
                      },
                      {
                        type: "hstack",
                        props: {
                          className: "w-full gap-1",
                          valign: "center",
                          children: [
                            {
                              type: "badge",
                              props: {
                                text: "Enviado por",
                                className:
                                  "text-sm text-gray-500 flex items-center gap-1",
                              },
                            },
                            {
                              type: "icon",
                              props: {
                                icon: "LightningBoltIcon",
                                className:
                                  "min-w-4 w-4 text-green-700 fill-green-700",
                              },
                            },
                            {
                              type: "subtitle",
                              props: {
                                text: "FULL",
                                className:
                                  "font-bold text-sm text-green-700 fill-green-700 italic",
                                variant: "h3",
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "divider",
                      },
                      {
                        type: "vstack",
                        props: {
                          className: "w-full",
                          children: [
                            {
                              type: "subtitle",
                              props: {
                                text: "Otra opción de compra",
                                className: "text-sm text-gray-800",
                                variant: "h3",
                              },
                            },
                            {
                              type: "price",
                              props: {
                                value: "189.999",
                                currencyType: "USD",
                                className:
                                  "text-xl font-semibold text-gray-900",
                              },
                            },
                            {
                              type: "hstack",
                              props: {
                                className: "w-full gap-1",
                                valign: "center",
                                children: [
                                  {
                                    type: "subtitle",
                                    props: {
                                      text: "Por TCL",
                                      className: "text-sm text-gray-500",
                                      variant: "h3",
                                    },
                                  },
                                  {
                                    type: "icon",
                                    props: {
                                      icon: "CheckCircleIcon",
                                      className: "min-w-4 w-4 text-blue-500",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
      },
    ],
  };

  return NextResponse.json(response);
}
