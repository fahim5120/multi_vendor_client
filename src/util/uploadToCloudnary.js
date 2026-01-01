// export const uploadToCloudinary = async (file) => {
//   const cloud_name = "dyael40bu";
//   const upload_preset = "buyzaa";
//   const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

//   const data = new FormData();
//   data.append("file", file);
//   data.append("upload_preset", upload_preset);
//   data.append("cloud_name", cloud_name);
//   const res = await fetch(url, {
//     method: "POST",
//     body: data,
//   });

//   const fileData = await res.json();

//   console.log("image url", fileData.url);

//   return fileData.url;

 
// };
export const uploadToCloudinary = async (file) => {
  const cloud_name = "dyael40bu";
  const upload_preset = "buyzaa";

  const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", upload_preset);

  try {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });

    const fileData = await res.json();

    console.log("Cloudinary response:", fileData);

    return fileData.secure_url; // ✅ IMPORTANT
  } catch (error) {
    console.error("Upload error:", error);
  }
};

