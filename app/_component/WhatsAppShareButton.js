import React from "react";

const WhatsAppShareButton = ({ status }) => {
  const encodedStatus = encodeURIComponent(status);
  const shareUrl = `https://wa.me/?text=${encodedStatus}`;

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:underline"
    >
      Share on WhatsApp
    </a>
  );
};

export default WhatsAppShareButton;
