/**
 * The webinar's date, registration form and hosts, in one place because the
 * hero and the final CTA both show them and must never disagree.
 *
 * Everything on this page comes from the webinar deck of 17 November 2026.
 *
 * TODO: the date and time are not confirmed yet. Replace "Date to be confirmed"
 * with the day and the time once the speakers agree (for example "16 December",
 * "5 PM EET").
 */
// Only the date (Anzelika, 2026-11-23: no "Free webinar on eCommerce data" here).
export const EYEBROW_PARTS = ["Date to be confirmed"];

/** The same line for the final CTA. */
// Only the date as well: no "Free webinar" and no "60 minutes" (Anzelika, 2026-11-23).
export const CTA_EYEBROW_PARTS = ["Date to be confirmed"];

/**
 * TODO: insert the HubSpot formId for this webinar. While it is null the CTA
 * shows a placeholder form, which must not go live as the registration path.
 */
export const HUBSPOT_FORM: { portalId: string; formId: string; region: string } | null = null;

/* Photos are the round portraits from the deck's "Your hosts today" slide. */
export const SPEAKERS = [
  {
    name: "Dinesh Gurung",
    title: "Business Development, Analytics",
    bio: "Talks with eCommerce teams about their data every week.",
    photo: "/webinars/unifying-data/dinesh-gurung.webp",
  },
  {
    name: "Alina Draichuk",
    title: "Data Engineer, Analytics",
    bio: "Builds the data foundations that reports, marketing, and AI run on.",
    photo: "/webinars/unifying-data/alina-draichuk.webp",
  },
];
