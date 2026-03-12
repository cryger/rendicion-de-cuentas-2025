import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Informe from "./pages/Informe";
import Avisos from "./pages/Avisos";
import Preguntas from "./pages/Preguntas";
import Infraestructura from "./pages/Infraestructura";
import Educacion from "./pages/Educacion";
import ProgramasSociales from "./pages/ProgramasSociales";
import EquiposBiomedicos from "./pages/EquiposBiomedicos";
import Portafolio from "./pages/Portafolio";
import ConvenioGranada from "./pages/ConvenioGranada";
import Laboratorio from "./pages/Laboratorio";
import Simposios from "./pages/Simposios";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/rendicion-de-cuentas-25">
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/informe" element={<Informe />} />
          <Route path="/avisos" element={<Avisos />} />
          <Route path="/preguntas" element={<Preguntas/>} />
          <Route path="/infraestructura" element={<Infraestructura/>}/>
          <Route path="/educacion" element={<Educacion/>}/>
          <Route path="/programas-sociales" element={<ProgramasSociales/>}/>
          <Route path="/equipos-biomedicos" element={<EquiposBiomedicos/>}/>
          <Route path="/nuevos-servicios" element={<Portafolio/>}/>
          <Route path="/convenio-granada" element={<ConvenioGranada/>}/>
          <Route path="/laboratorio" element={<Laboratorio/>}/>
          <Route path="/simposios" element={<Simposios/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
