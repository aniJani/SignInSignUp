import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>;
}
