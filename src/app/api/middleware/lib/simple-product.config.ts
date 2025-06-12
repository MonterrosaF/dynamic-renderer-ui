export const simpleProductConfig = {
  type: "productCard",
  props: {
    productId: "MLA75004334351",
    children: {
      type: "hstack",
      props: {
        className: "bg-white rounded-xl shadow-md overflow-hidden max-w-4xl",
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
                  type: "title",
                  props: {
                    text: "Celular Tcl 503 Space Gray Rv Gris",
                    className: "text-lg text-gray-900",
                    variant: "h2",
                  },
                },
                {
                  type: "price",
                  props: {
                    value: "144.999",
                    currencyType: "USD",
                    className: "text-2xl font-semibold text-gray-900",
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
              ],
            },
          },
        ],
      },
    },
  },
};
