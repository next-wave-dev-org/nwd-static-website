/**
 * Centralized metadata configuration for all pages
 * Used with react-helmet for SEO and social sharing
 */

export const BASE_URL = "https://nextwave-dev.org"; // Update with your actual domain
export const LOGO_URL = `${BASE_URL}/og-logo.png`;

export const generateMetadata = ({
  title,
  description,
  pageUrl = "/",
  imageUrl = LOGO_URL,
  imageAlt = "Next Wave Dev",
  type = "website",
  twitterHandle = "@NextWaveDev", // Update with your actual Twitter handle
}) => ({
  title,
  description,
  pageUrl: `${BASE_URL}/#${pageUrl}`,
  imageUrl,
  imageAlt,
  type,
  twitterHandle,
});

/**
 * Metadata for all pages in the application
 */
export const pageMetadata = {
  home: {
    title: "Next Wave Dev - Bridge Classroom to Career",
    description:
      "Bridging the gap between classroom learning and career success. We equip students and recent graduates with real-world experience, mentorship, and tech skills needed to launch their careers.",
    pageUrl: "/Home",
    type: "website",
  },
  about: {
    title: "About Next Wave Dev - Our Mission & Team",
    description:
      "Learn about Next Wave Dev's mission to solve the experience gap in tech careers. Connecting graduates with real-world projects and mentorship.",
    pageUrl: "/About",
    type: "website",
  },
  portfolio: {
    title: "Portfolio - Next Wave Dev Projects",
    description:
      "Explore our portfolio of real-world development projects built by our talented developers. From websites to full-stack applications.",
    pageUrl: "/Portfolio",
    type: "website",
  },
  contact: {
    title: "Contact Next Wave Dev - Get in Touch",
    description:
      "Have questions? Get in touch with the Next Wave Dev team. We're here to help graduates, companies, and partners connect.",
    pageUrl: "/Contact",
    type: "website",
  },
  contactThankYou: {
    title: "Thank You - Next Wave Dev",
    description:
      "Thank you for reaching out to Next Wave Dev. We'll be in touch soon with more information.",
    pageUrl: "/Contact-Thank-You",
    type: "website",
  },
  developers: {
    title: "Our Developers - Next Wave Dev Team",
    description:
      "Meet the talented developers in the Next Wave Dev program. View their profiles, projects, and professional backgrounds.",
    pageUrl: "/Developers",
    type: "website",
  },
  graduates: {
    title: "For Graduates - Launch Your Tech Career",
    description:
      "Start your tech career with Next Wave Dev. Get real-world experience, professional mentorship, and build a portfolio with meaningful projects.",
    pageUrl: "/Graduates",
    type: "website",
  },
  companies: {
    title: "For Companies - Find Your Next Tech Team",
    description:
      "Connect with talented developers through Next Wave Dev. Get projects completed and identify future hires from our graduate program.",
    pageUrl: "/Companies",
    type: "website",
  },
  services: {
    title: "Services - Next Wave Dev Development Solutions",
    description:
      "Full-stack development, AI integration, and scalable web solutions. Modern tech services for startups and enterprises.",
    pageUrl: "/Services",
    type: "website",
  },
  pricing: {
    title: "Pricing - Next Wave Dev Services & Plans",
    description:
      "Transparent pricing for web development, mobile apps, AI integration, and more. Find the right plan for your project.",
    pageUrl: "/Pricing",
    type: "website",
  },
  apply: {
    title: "Apply - Next Wave Dev Graduate Program",
    description:
      "Apply to the Next Wave Dev graduate program. Start building real-world experience and launch your tech career.",
    pageUrl: "/Apply",
    type: "website",
  },
  donation: {
    title: "Support Next Wave Dev - Make a Donation",
    description:
      "Help us empower the next generation of developers. Your donation supports meaningful tech education and career launch opportunities.",
    pageUrl: "/Donation",
    type: "website",
  },
  notFound: {
    title: "Page Not Found - Next Wave Dev",
    description:
      "The page you're looking for doesn't exist. Return home or explore our services.",
    pageUrl: "/404",
    type: "website",
  },
};

/**
 * Helper function to create Helmet metadata tags
 * Usage in components:
 * // In your page component
 * // import { pageMetadata, BASE_URL } from "../utils/metadataConfig";
 * // const metadata = pageMetadata.yourPage;
 * // Then in JSX:
 * // <Helmet>
 * //   <title>{metadata.title}</title>
 * //   <meta name="description" content={metadata.description} />
 * // </Helmet>
 */
export const getHelmetTags = (pageConfig) => {
  const metadata = generateMetadata(pageConfig);
  return {
    title: metadata.title,
    description: metadata.description,
    og: {
      title: metadata.title,
      description: metadata.description,
      image: metadata.imageUrl,
      imageAlt: metadata.imageAlt,
      url: metadata.pageUrl,
      type: metadata.type,
      siteName: "Next Wave Dev",
    },
    twitter: {
      card: "summary_large_image",
      handle: metadata.twitterHandle,
      title: metadata.title,
      description: metadata.description,
      image: metadata.imageUrl,
    },
  };
};
