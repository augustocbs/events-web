import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sistema de Eventos
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Gerencie seus eventos e realize inscrições de forma simples
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/eventos" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 min-w-[200px]"
            >
              Ver Eventos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}