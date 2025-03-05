
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index";
import BookTrip from "./pages/BookTrip/BookTrip";
import Flights from "./pages/BookTrip/Flights";
import Hotels from "./pages/BookTrip/Hotels";
import Cars from "./pages/BookTrip/Cars";
import TripsExpenses from "./pages/TripsExpenses";
import Analytics from "./pages/Analytics";
import Company from "./pages/Company/Company";
import Policy from "./pages/Company/Policy";
import Approval from "./pages/Company/Approval";
import Integrations from "./pages/Company/Integrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/book-trip" element={<BookTrip />} />
                <Route path="/book-trip/flights" element={<Flights />} />
                <Route path="/book-trip/hotels" element={<Hotels />} />
                <Route path="/book-trip/cars" element={<Cars />} />
                <Route path="/trips-expenses" element={<TripsExpenses />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/company" element={<Company />} />
                <Route path="/company/policy" element={<Policy />} />
                <Route path="/company/approval" element={<Approval />} />
                <Route path="/company/integrations" element={<Integrations />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
