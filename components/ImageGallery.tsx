import React from 'react';

const ImageGallery = () => {
  const images = [
    "https://res.cloudinary.com/dxj9qr5gj/image/upload/c_scale,f_auto,q_auto:best,w_800/v1614174712/maggieappleton.com/notes/garden-history/Hypertext_Gardens_fsudk6.png",
    "https://res.cloudinary.com/dxj9qr5gj/image/upload/c_scale,f_auto,q_auto:best,w_800/v1614174705/maggieappleton.com/notes/garden-history/Gardens_and_Paths_g0wfdw.png",
    "https://res.cloudinary.com/dxj9qr5gj/image/upload/c_scale,f_auto,q_auto:best,w_800/v1614174707/maggieappleton.com/notes/garden-history/Seven_Lessons_dng4bf.png",
    "https://res.cloudinary.com/dxj9qr5gj/image/upload/c_scale,f_auto,q_auto:best,w_800/v1614174712/maggieappleton.com/notes/garden-history/Establishing_Order_t1phoe.png"
  ];

  return (
    <section className="my-22">
      <div className="lg:container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <img key={index} className="rounded-md" alt={`A screenshot of Mark Bernstein's 1998 essay`} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;