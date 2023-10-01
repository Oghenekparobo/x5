import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Auth from "./pages/Auth";
import SingleRecording from "./pages/SingleRecording";
import Private from "./components/private/Index";
import RedirectPage from "./pages/RedirectPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/profile" element={<Private />} />
        <Route path="/redirect" element={<RedirectPage />} />
        <Route path="/:id/recording" element={<SingleRecording />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
