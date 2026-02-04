"use client"

import React, { useState, useRef, ChangeEvent, DragEvent, useEffect } from 'react';
import { Plus, X } from 'lucide-react';

interface ImageInputProps {
    onImageSelect?: (file: File | null) => void;
    maxSizeMB?: number;
    className?: string;
    label?: string;
}

export default function ImageInput({
    onImageSelect,
    maxSizeMB = 5,
    className = '',
    label
}: ImageInputProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const processFile = (file: File) => {
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }
        if (file.size > maxSizeMB * 1024 * 1024) {
            alert(`File size must be less than ${maxSizeMB}MB`);
            return;
        }

        setFile(file);
        setImagePreview(URL.createObjectURL(file));
        onImageSelect?.(file);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) processFile(selectedFile);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile) processFile(droppedFile);
    };

    const handleClick = () => fileInputRef.current?.click();

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setImagePreview(null);
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        onImageSelect?.(null);
    };

    // Cleanup URL object
    useEffect(() => {
        return () => {
            if (imagePreview) URL.revokeObjectURL(imagePreview);
        }
    }, [imagePreview]);

    return (
        <div className={`w-full max-w-md ${className}`}>
            {label && <p className="mb-2 font-medium text-slate-700">{label}</p>}
            <div
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                    relative border-2 border-dashed rounded-lg overflow-hidden
                    cursor-pointer transition-all duration-200
                    ${isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-400'}
                    ${imagePreview ? 'aspect-video' : 'aspect-[2/1]'}
                `}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />

                {imagePreview ? (
                    <div className="relative w-full h-full">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={handleRemove}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-colors shadow-lg"
                            aria-label="Remove image"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-3 p-8">
                        <div className="bg-teal-500 rounded-full p-3">
                            <Plus className="text-white" size={24} />
                        </div>
                        <span className="text-teal-600 text-lg font-medium">
                            Add Image
                        </span>
                        <p className="text-gray-400 text-sm text-center">
                            Click to browse or drag and drop
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
