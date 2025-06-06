export const handleShare = async (text) => {
  const shareData = {
    title: "Check this out",
    text,
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.error("Sharing failed:", error);
    }
  } else {
    // fallback (optional): open WhatsApp, Twitter, etc.
    const encoded = encodeURIComponent(`${text} - ${window.location.href}`);
    const fallbackUrl = `https://wa.me/?text=${encoded}`;
    window.open(fallbackUrl, "_blank");
  }
};
