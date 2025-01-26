export default function ControlPage() {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            Panel de Control
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Acceso administrativo del proyecto Mineral Scope Sonora
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200">Usuarios</h2>
              <p className="text-gray-600 dark:text-gray-400">Gestión de cuentas</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">Datos</h2>
              <p className="text-gray-600 dark:text-gray-400">Registros minerales</p>
            </div>
          </div>
  
          <div className="mt-8">
            <a
              href="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              ← Volver al inicio
            </a>
          </div>
        </div>
      </div>
    );
  }