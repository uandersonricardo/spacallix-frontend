import { LaunchLinks } from "../types/launch";

export const getLinks = (links: LaunchLinks) => {
  if (!links) {
    return [];
  }

  const result = [];

  if (links.reddit?.campaign) {
    result.push({
      title: "Reddit (Campanha)",
      url: links.reddit.campaign
    });
  }

  if (links.reddit?.launch) {
    result.push({
      title: "Reddit (Lançamento)",
      url: links.reddit.launch
    });
  }

  if (links.reddit?.media) {
    result.push({
      title: "Reddit (Mídia)",
      url: links.reddit.media
    });
  }

  if (links.reddit?.recovery) {
    result.push({
      title: "Reddit (Recuperação)",
      url: links.reddit.recovery
    });
  }

  if (links.presskit) {
    result.push({
      title: "Material de imprensa",
      url: links.presskit
    });
  }

  if (links.webcast) {
    result.push({
      title: "Webcast",
      url: links.webcast
    });
  }

  if (links.youtubeId) {
    result.push({
      title: "Vídeo no YouTube",
      url: `https://youtube.com/watch?v=${links.youtubeId}`
    });
  }

  if (links.article) {
    result.push({
      title: "Matéria",
      url: links.article
    });
  }

  if (links.wikipedia) {
    result.push({
      title: "Artigo na Wikipédia",
      url: links.wikipedia
    });
  }

  return result;
};
