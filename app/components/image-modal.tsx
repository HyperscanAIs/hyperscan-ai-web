"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

const ImageModal = ({ isOpen, onClose, src, alt }: ImageModalProps) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-muted/30 backdrop-blur-md rounded-lg overflow-hidden border border-muted"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 z-10 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full h-[80vh]">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-contain"
          />
        </div>

        <div className="p-4 text-center">
          <p className="text-lg">{alt}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
