import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroSection from "../components/home/HeroSection";
import CreateCampaign from "../components/home/CreateCampaign";
import FeatureList from "../components/home/FeatureList";
import ListBuilding from "../components/home/ListBuilding";
import DomainAuthority from "../components/home/DomainAuthority";
import ResponseHandling from "../components/home/ResponseHandling";
import OurLeads from "../components/home/OurLeads";
import CreateCampaignWork from "../components/home/CreateCampaignWork";
import EmailCreations from "../components/home/EmailCreations";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main>
      <Header />
      <HeroSection />
      <CreateCampaign />
      <FeatureList />
      <ListBuilding/>
      <EmailCreations/>
      <DomainAuthority/>
      <ResponseHandling/>
      <OurLeads/>
      <CreateCampaignWork/>
      <Footer />
    </main>
  );
}
