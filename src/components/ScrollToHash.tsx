import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Δίνουμε λίγο χρόνο να αποδομηθεί το DOM
    const id = hash.replace("#", "");
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    return () => clearTimeout(t);
  }, [hash]);

  return null;
}