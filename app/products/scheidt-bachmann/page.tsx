import { title } from "@/components/primitives";
import Footer from "@/components/footer";

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24 w-full">
        <h1
          className={`${title()} text-4xl font-extrabold text-gray-900 mb-8 text-center`}
        >
          About us
        </h1>
      </div>
    </div>
  );
}
