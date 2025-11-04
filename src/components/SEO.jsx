import { useEffect } from 'react';
import heroBack from '../assets/heroBack.jpg';

const upsertMeta = ({ name, property, content }) => {
  if (!content) return;
  let selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    if (name) el.setAttribute('name', name);
    if (property) el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const upsertLink = ({ rel, href }) => {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const upsertJsonLd = (id, data) => {
  // Ensure a single script tag per id
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

const SEO = ({ data }) => {
  useEffect(() => {
    if (!data) return;

    const { company, about } = data;
    const siteName = company?.name || 'Website';
    const tagline = company?.tagline || '';
    const longDesc = (about && about.description) || '';
    const description = (tagline || longDesc).toString().slice(0, 160);

    const origin = window.location.origin;
    const base = import.meta.env.BASE_URL || '/';
    const siteUrl = new URL(base, origin).toString();

    const ogImage = heroBack; // Bundled asset URL

    // Title
    const title = tagline ? `${siteName} — ${tagline}` : siteName;
    document.title = title;

    // Standard meta
    upsertMeta({ name: 'description', content: description });
    upsertMeta({ name: 'robots', content: 'index, follow' });
    upsertMeta({ name: 'author', content: siteName });

    // Canonical
    upsertLink({ rel: 'canonical', href: siteUrl });

    // Open Graph
    upsertMeta({ property: 'og:type', content: 'website' });
    upsertMeta({ property: 'og:site_name', content: siteName });
    upsertMeta({ property: 'og:title', content: title });
    upsertMeta({ property: 'og:description', content: description });
    upsertMeta({ property: 'og:url', content: siteUrl });
    upsertMeta({ property: 'og:image', content: ogImage });
    upsertMeta({ property: 'og:locale', content: 'en_US' });

    // Twitter Card
    upsertMeta({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta({ name: 'twitter:title', content: title });
    upsertMeta({ name: 'twitter:description', content: description });
    upsertMeta({ name: 'twitter:image', content: ogImage });

    // JSON-LD: Organization
    const sameAs = company?.socialLinks
      ? Object.values(company.socialLinks).filter(Boolean)
      : [];

    const orgJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      sameAs,
      contactPoint: company?.phone || company?.email
        ? [
            {
              '@type': 'ContactPoint',
              telephone: company.phone || undefined,
              email: company.email || undefined,
              contactType: 'customer support',
              areaServed: 'Worldwide',
              availableLanguage: ['English'],
            },
          ]
        : undefined,
    };
    upsertJsonLd('ld-org', orgJsonLd);

    // JSON-LD: WebSite
    const siteJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
    };
    upsertJsonLd('ld-website', siteJsonLd);
  }, [data]);

  return null;
};

export default SEO;
