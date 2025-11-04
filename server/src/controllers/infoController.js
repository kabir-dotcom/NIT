const diseases = [
  {
    id: 1,
    name: 'Autoimmune Thyroiditis',
    summary:
      'Tailored immunotherapy protocols that rebalance hormone production and reduce flare frequency.',
  },
  {
    id: 2,
    name: 'Chronic Lyme',
    summary:
      'Integrative detox and immune modulation plans to restore vitality and cognitive clarity.',
  },
  {
    id: 3,
    name: 'Allergic Asthma',
    summary:
      'Sub-lingual boosters and respiratory support to calm overactive responses to environmental triggers.',
  },
];

const boosters = [
  {
    id: 1,
    name: 'Immune Reset',
    focus: 'Adaptive immune system rewiring with botanicals and micronutrients.',
  },
  {
    id: 2,
    name: 'Detox Momentum',
    focus: 'Supports liver pathways while maintaining healthy inflammatory response.',
  },
  {
    id: 3,
    name: 'Barrier Shield',
    focus: 'Strengthens gut mucosa and skin integrity to reduce allergen load.',
  },
];

const blogPosts = [
  {
    id: 1,
    title: '5 Biomarkers That Predict Immunotherapy Success',
    excerpt:
      'Tracking baselines for inflammation, micronutrients, and microbiome health can unlock precision care.',
  },
  {
    id: 2,
    title: 'Why Detox Sequencing Matters',
    excerpt:
      'Stepwise detoxification keeps energy pathways open while preventing Herxheimer reactions.',
  },
];

const heroContent = {
  headline: 'Personalized Natural Immunotherapy',
  subheadline: 'Evidence-led care plans recalibrating immunity for chronic disease recovery.',
  cta: 'Book a Discovery Call',
};

const getDiseases = (_req, res) => {
  res.status(200).json(diseases);
};

const getBoosters = (_req, res) => {
  res.status(200).json(boosters);
};

const getBlogPosts = (_req, res) => {
  res.status(200).json(blogPosts);
};

const getHeroContent = (_req, res) => {
  res.status(200).json(heroContent);
};

module.exports = {
  getDiseases,
  getBoosters,
  getBlogPosts,
  getHeroContent,
};
