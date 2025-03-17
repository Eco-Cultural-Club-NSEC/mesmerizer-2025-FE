export const uploadToCloudinary = async (
  file: File
): Promise<{ secure_url: string; public_id: string }> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "mesmerizer_payment_ss"); // Your upload preset
  formData.append("folder", "mesmerizer/payment_ss");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_VERCEL_ENV_CLOUDINARY_NAME
      }/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    return {
      secure_url: data.secure_url,
      public_id: data.public_id,
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload image");
  }
};

export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  try {
    const timestamp = new Date().getTime();
    const signature = await generateSignature(publicId, timestamp);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_VERCEL_ENV_CLOUDINARY_NAME
      }/image/destroy`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          public_id: publicId,
          signature: signature,
          api_key: import.meta.env.VITE_VERCEL_ENV_CLOUDINARY_APIK,
          timestamp: timestamp,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Delete failed");
    }

    const data = await response.json();
    if (data.result !== "ok") {
      throw new Error("Delete operation was not successful");
    }
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Failed to delete image");
  }
};

const generateSignature = async (
  publicId: string,
  timestamp: number
): Promise<string> => {
  const str = `public_id=${publicId}&timestamp=${timestamp}${
    import.meta.env.VITE_VERCEL_ENV_CLOUDINARY_APIS
  }`;

  // Using SubtleCrypto for SHA-256 hashing (more secure than SHA-1)
  const msgBuffer = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
};
