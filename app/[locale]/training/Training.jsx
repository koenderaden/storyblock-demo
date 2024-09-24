import { storyblokEditable } from "@storyblok/react/rsc";

const Training = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    {blok.name}
    <h1>GA4 Training</h1>
    <h2>
      "In this GA4 training, you’ll learn how to set up and optimize Google
      Analytics 4 for your website. Understand key metrics, create custom
      reports, and use data to drive insights and improve business performance."
    </h2>
    <a href="feauture.jsx" className="btn btn-primary">
      Go Back
    </a>

    <br></br>

    <h1>Piwik Training</h1>
    <h2>
      "This Piwik training will teach you how to use this powerful,
      privacy-focused analytics platform. Gain skills in setting up Piwik,
      analyzing website traffic, and leveraging its features for deeper insights
      into user behavior."
    </h2>

    <br></br>
    <h1>GTM Training </h1>
    <h2>
      "Master Google Tag Manager (GTM) with this comprehensive training. Learn
      how to implement tags, track events, and streamline data collection, all
      without needing to modify your website's code directly."
    </h2>

    <br></br>
    <h1>Server Side Tagging Training</h1>
    <h2>
      "Discover the advantages of server-side tagging in this training. Learn
      how to securely and efficiently implement server-side tracking to gain
      better control over your website's data and improve performance."
    </h2>

    <br></br>
    <h1>Looker Studio Training</h1>
    <h2>
      Looker Studio Training "This Looker Studio training will help you
      visualize your data effectively. Learn how to create dynamic, interactive
      reports and dashboards to communicate insights clearly and enhance
      data-driven decision-making."
    </h2>
  </div>
);

export default Training;
