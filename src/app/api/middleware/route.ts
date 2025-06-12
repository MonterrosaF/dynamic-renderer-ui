/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { simpleProductConfig } from "./lib/simple-product.config";
import { fullProductConfig } from "./lib/full-product.config";
import { ComponentConfig } from "@/core/components/typing";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const variant = searchParams.get("variant") || "full";

  const components = searchParams.get("components");

  let selectedConfig;

  if (components) {
    const componentList = components.split(",").map((c) => c.trim());
    selectedConfig = generateCustomConfig(componentList);
  } else {
    switch (variant) {
      case "simple":
        selectedConfig = simpleProductConfig;
        break;
      case "full":
      default:
        selectedConfig = fullProductConfig;
    }
  }

  const response = {
    components: [selectedConfig],
  };

  return NextResponse.json(response);
}

function generateCustomConfig(components: string[]) {
  const includeImage = !components.includes("no-image");
  const filteredComponents = components.filter((comp) => comp !== "no-image");

  const customConfig = {
    type: "productCard",
    props: {
      productId: "MLA75004334351",
      children: {
        type: "hstack",
        props: {
          className: "bg-white rounded-xl shadow-md overflow-hidden max-w-4xl",
          valign: "center",
          children: includeImage
            ? [
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
                    children: [],
                  },
                },
              ]
            : [
                {
                  type: "vstack",
                  props: {
                    className: "p-4 w-full space-y-2",
                    children: [],
                  },
                },
              ],
        },
      },
    },
  };

  const contentContainer: ComponentConfig[] = includeImage
    ? customConfig.props.children.props.children[1].props.children!
    : customConfig.props.children.props.children[0].props.children!;

  const componentMap: Record<string, any> = {
    title: {
      type: "title",
      props: {
        text: "Celular Tcl 503 Space Gray Rv Gris",
        className: "text-lg text-gray-900",
        variant: "h2",
      },
    },
    brand: {
      type: "subtitle",
      props: {
        text: "TCL",
        className: "font-bold text-sm text-gray-800",
        variant: "h3",
      },
    },
    seller: {
      type: "hstack",
      props: {
        className: "w-full gap-1",
        valign: "center",
        children: [
          {
            type: "description",
            props: {
              text: "Por Mercado Libre",
              className: "text-sm text-gray-500 flex items-center gap-1",
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
    oldPrice: {
      type: "price",
      props: {
        value: "174.999",
        currencyType: "USD",
        className: "line-through text-sm text-gray-400",
      },
    },
    rating: {
      type: "rating",
      props: {
        score: 3.5,
        votes: 78,
        className: "text-sm text-gray-600",
      },
    },
    price: {
      type: "price",
      props: {
        value: "144.999",
        currencyType: "USD",
        className: "text-2xl font-semibold text-gray-900",
      },
    },
    discount: {
      type: "discount",
      props: {
        text: "17% OFF",
        className: "text-green-600 text-sm font-semibold",
      },
    },
    installments: {
      type: "installments",
      props: {
        text: "Mismo precio en 12 cuotas de $12.083",
        className: "text-green-700 text-sm",
      },
    },
    shipping: {
      type: "shipping",
      props: {
        text: "Llega gratis mañana",
        className:
          "bg-green-100 text-green-700 text-sm px-2 py-1 rounded w-fit font-bold",
      },
    },
    seller_info: {
      type: "hstack",
      props: {
        className: "w-full gap-1",
        valign: "center",
        children: [
          {
            type: "badge",
            props: {
              text: "Enviado por",
              className: "text-sm text-gray-500 flex items-center gap-1",
            },
          },
          {
            type: "icon",
            props: {
              icon: "LightningBoltIcon",
              className: "min-w-4 w-4 text-green-700 fill-green-700",
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
    other_option: {
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
              className: "text-xl font-semibold text-gray-900",
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
    divider: {
      type: "divider",
      props: {
        className: "w-full",
      },
    },
  };

  const specialGroups: Record<string, string[]> = {
    pricing: ["oldPrice", "price", "discount"],
    basic: ["brand", "title", "price", "shipping"],
  };

  filteredComponents.forEach((comp) => {
    if (specialGroups[comp]) {
      // Si se solicita un grupo, agregamos todos sus componentes
      specialGroups[comp].forEach((subComp) => {
        if (componentMap[subComp]) {
          contentContainer?.push(componentMap[subComp]);
        }
      });
    } else if (componentMap[comp]) {
      // Agregar componente individual
      contentContainer?.push(componentMap[comp]);
    }
  });

  // Si no se especificaron componentes, devolvemos al menos el título
  if (contentContainer?.length === 0) {
    contentContainer.push(componentMap.title);
  }

  return customConfig;
}
