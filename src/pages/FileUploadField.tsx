import { useState, useRef, ChangeEvent, DragEvent } from "react";
import { ImagePlus, Upload, X, File as FileIcon } from "lucide-react";
import {
  Controller,
  Control,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

interface FileUploadFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  error?: FieldError;
  required?: boolean;
}

const FileUploadField = <T extends FieldValues>({
  control,
  name,
  label,
  error,
  required = false,
}: FileUploadFieldProps<T>) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  // const [showLargePreview, setShowLargePreview] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (
    e: DragEvent<HTMLDivElement>,
    onChange: (file: File | null) => void
  ) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0], onChange);
    }

    // Manually update the file input's files property to properly trigger the onChange event
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(e.dataTransfer.files[0]);
    if (fileInputRef.current) {
      fileInputRef.current.files = dataTransfer.files;
    }
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (file: File | null) => void
  ) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0], onChange);
    }
  };

  const handleFile = (file: File, onChange: (file: File | null) => void) => {
    setFile(file);
    onChange(file); // Pass the file to React Hook Form

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleRemoveFile = (onChange: (file: File | null) => void) => {
    setFile(null);
    setPreviewUrl(null);
    // setShowLargePreview(false);
    onChange(null); // Clear the value in React Hook Form

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required ? "Please upload a valid image" : false }}
      render={({ field: { onChange } }) => (
        <div className="mb-4">
          <label htmlFor={name} className="flex items-center mb-2">
            <ImagePlus className="mr-2 text-[rgb(var(--color-accent))]" />
            {label || "Upload Screenshot"}
          </label>

          {/* {previewUrl && showLargePreview && (
            <div className="mb-4">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white mb-2">
                <img
                  src={previewUrl}
                  alt="Large Preview"
                  className="w-full h-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setShowLargePreview(false)}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-gray-900/50 hover:bg-gray-900/70 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )} */}

          <div
            className={`relative border-2 rounded-lg transition-all duration-200 ease-in-out ${
              isDragging
                ? "border-white bg-white/50 scale-102"
                : "border-white/50 hover:bg-white/10"
            } ${file ? "p-4" : "p-6"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, onChange)}
          >
            <input
              type="file"
              id={name}
              ref={fileInputRef}
              onChange={(e) => handleFileChange(e, onChange)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              accept="image/*"
            />
            {file ? (
              <div className="flex items-center space-x-4">
                {previewUrl ? (
                  <div className="relative group">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* <button
                      type="button"
                      onClick={() => setShowLargePreview(true)}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center"
                    >
                      <Maximize2 className="w-6 h-6 text-white" />
                    </button> */}
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-[rgb(var(--color-accent))]/10 flex items-center justify-center flex-shrink-0">
                    <FileIcon className="w-8 h-8 text-[rgb(var(--color-accent))]" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-base text-white truncate">{file.name}</p>
                  <p className="text-sm text-white/70 mt-1">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(onChange)}
                  className="p-2 rounded-full bg-transparent border-white hover:bg-white/50 transition-colors z-20"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            ) : (
              <div className="text-center text-white/70">
                <Upload className="mx-auto h-10 w-10" />
                <p className="mt-2 text-sm">Drag and drop your file here</p>
                <p className="mt-1 text-xs">or click to browse</p>
              </div>
            )}
          </div>

          {error && (
            <p className="text-[rgb(var(--color-primary))] mt-1">
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default FileUploadField;
