import { DynamicRenderer } from "@/core/components/dynamic-renderer";
import Link from "next/link";

async function getData(variant?: string, components?: string) {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/middleware`
  );

  if (variant) {
    url.searchParams.append("variant", variant);
  }

  if (components) {
    url.searchParams.append("components", components);
  }

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch configuration");
  }

  return res.json();
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ variant?: string; components?: string }>;
}) {
  const params = await searchParams;
  const variant = params.variant || "full";
  const components = params.components;
  const data = await getData(variant, components);

  const exampleComponents = [
    { name: "Básico", value: "basic" },
    { name: "Solo Precios", value: "pricing" },
    { name: "Título y Envío", value: "title,shipping" },
    { name: "Sin Imagen", value: "title,price,shipping,no-image" },
    { name: "Marca, Título y Rating", value: "brand,title,rating" },
    { name: "Versión Completa", value: "" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Renderizador Dinámico
        </h1>

        {!components && (
          <div className="mb-8 flex justify-center space-x-4">
            <Link
              href="/"
              className={`px-4 py-2 rounded-md ${
                variant === "full"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
            >
              Versión Completa
            </Link>
            <Link
              href="/?variant=simple"
              className={`px-4 py-2 rounded-md ${
                variant === "simple"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
            >
              Versión Simple
            </Link>
          </div>
        )}

        <div className="mb-8 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">
            Configuración personalizada
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Selecciona los componentes a mostrar o escribe tus propios
            componentes separados por comas:
          </p>

          <p className="text-sm text-gray-600 mb-4">
            Desde la respuesta simulada de backend en el middleware se puede
            configurar la forma en la que se quiere renderizar en el frontend,
            acá se esta tomando para ejemplo una respuesta ya definida en donde
            podemos mostrar/ocultar componentes, sin embargo, se puede modificar
            formas, estilos y posiciones desde el middleware
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {exampleComponents.map((example) => (
              <Link
                key={example.value}
                href={example.value ? `/?components=${example.value}` : "/"}
                className={`px-3 py-1 text-sm rounded-md ${
                  components === example.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {example.name}
              </Link>
            ))}
          </div>

          <details className="text-sm text-gray-700 mb-4">
            <summary className="cursor-pointer font-medium">
              Componentes disponibles (Ya configurados en el middleware)
            </summary>
            <div className="mt-2 p-3 bg-gray-50 rounded">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <code>title</code> - Título del producto
                </li>
                <li>
                  <code>brand</code> - Marca del producto
                </li>
                <li>
                  <code>price</code> - Precio actual
                </li>
                <li>
                  <code>oldPrice</code> - Precio anterior
                </li>
                <li>
                  <code>discount</code> - Porcentaje de descuento
                </li>
                <li>
                  <code>rating</code> - Calificación del producto
                </li>
                <li>
                  <code>shipping</code> - Información de envío
                </li>
                <li>
                  <code>installments</code> - Información de cuotas
                </li>
                <li>
                  <code>seller</code> - Información del vendedor
                </li>
                <li>
                  <code>seller_info</code> - Insignia del vendedor
                </li>
                <li>
                  <code>other_option</code> - Otras opciones de compra
                </li>
                <li>
                  <code>divider</code> - Línea divisoria
                </li>
                <li>
                  <code>no-image</code> - Ocultar la imagen del producto
                </li>
                <li>
                  <code>basic</code> - Grupo: marca, título, precio y envío
                </li>
                <li>
                  <code>pricing</code> - Grupo: precio anterior, precio actual y
                  descuento
                </li>
              </ul>
            </div>
          </details>

          <form className="flex" action="/">
            <input
              type="text"
              name="components"
              placeholder="title,price,shipping,seller"
              defaultValue={components || ""}
              className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
            >
              Aplicar
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <DynamicRenderer config={data.components} />
        </div>
      </div>
    </main>
  );
}
