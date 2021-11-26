////link para post
const API_URLP = "https://backagora.herokuapp.com/api/agora/new-announcie";
////link para get
const API_URL = "https://backagora.herokuapp.com/api/agora/get-announcies";

export const listAnnounces = async () => {
  return await fetch(API_URL);
};

export const registerAnnounce = async (newAnnounce) => {
  return await fetch(API_URLP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      textAnnouncement: String(newAnnounce.textAnnouncement).trim(),
      titleAnnouncement: String(newAnnounce.titleAnnouncement).trim(),
    }),
  });
};
